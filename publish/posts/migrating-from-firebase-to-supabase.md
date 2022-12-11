---
title: How I Migrated 1000+ Users from Firebase to Supabase
tags: [ "blog" ]
date: 2022-10-21
lastmod: 2022-10-21
---
When beginning my journey as a [Flutter](https://flutter.dev/) developer, I thought [Firebase](https://firebase.google.com/) would be the best backend solution for Flutter. Given that both are made by Google, I thought this would be the backend that would be the most stable and flexible. I was wrong.

The [lack of full native Dart support](https://github.com/cachapa/firedart), [slow build times](https://github.com/firebase/flutterfire/issues/349), sketchy workarounds, and [no desktop support](https://groups.google.com/g/firebase-talk/c/gDAMWGVH88k) led me searching for another solution. After many hours of research, I was faced with the choice between two frameworks: [Appwrite](https://appwrite.io/) and [Supabase](https://supabase.com/). Both were great frameworks and both fit my use case perfectly. But, I decided to move forward with Supabase because of their philosophy of "[not reinventing the wheel](https://www.felicis.com/news/leading-the-supabase-series-b-why-were-supa-excited#:~:text=It%20starts%20with%20Supabase's%20philosophy,database%20or%20GoTrue%20for%20Auth.)". 

So now I was tasked with the problem of moving 1000+ active users from one platform to another. This was no easy feat, and I wanted to share my experience in case some one else wanted to perform a similar migration.

## Migration Criteria
I wanted a seamless migration. At most, the user would only need to reauthenticate into the app and they would see everything they'd expect to see. In addition, I wanted the migration to be backwards compatible with the previous app. Users aren't going to update every app concurrently, so it'd make sense for the supabase version to be backwards compatible with the firebase version of the app. 

In order to make the migration seamless and be backwards compatible, three components needed to be migrated:
- **Subscription tier:** Subscription tier must be constantly up-to-date between the firebase and supabase version of the app. 
- **Authentication & User data (username, password, etc):** Authentication / user data only needs to be synced once immediately after the account migration
- **Notes data:** Notes must be bi-directionally synced in realtime

Each critera had its own different set of problems. In the following sections, I'll be walking through the problems I faced with each criteria, and the solution I eventually settled upon.

## Stripe migration
### Backend Stripe Migration
[Stripe](https://stripe.com/) was the most difficult and finicky aspect of the migration. Within firebase, I used the [stripe firebase extension](https://github.com/stripe/stripe-firebase-extensions/) to manage all the stripe components. It took care of a lot of the implementation work so I had no idea how to approach this when I first started. I bounced between different ideas like bi-directional sync of the subscription tier within firebase, but eventually I settled upon using Stripe as my single source of truth. Although it'd be more involved, I knew it'd make fully cutting Firebase out of Fleeting Notes easier down the road. Here are the migration steps I settled upon:
1. User signs in and behind the scenes <a href="/posts/migrating-from-firebase-to-supabase/#account-migration" rel="noopener">account migration</a> occurs
2. After account migration, a [[notes/handle_new_users|supabase database function]] adds a row to the `stripe` table with the supabase id filled in.
3. Once the row is added, a [database webhook](https://supabase.com/docs/guides/database/webhooks) calls a [[notes/get_stripe_id_from_firebase|firebase function]] that grabs the relevant `stripe_customer_id` from firebase and populates it into supabase.
4. Once the `stripe_customer_id` is populated into the table, another database webhook is triggered to [[notes/update_subscription_tier|pull the subscrition tier from stripe]]. 
5. Additionally, [[notes/stripe_webhooks|stripe webhooks]] are set up to update the subscription tier of customers whenever they are updated (e.g. trialing period ends).

### Payments Page
Another component I needed to upgrade was the payments page. For the current payments page, I closely modelled it to this [sample payments page](https://github.com/stripe-samples/firebase-subscription-payments). The only problem with this payments page is that supabase isn't notified of any new customers after the migration.

Meaning, if someone were to create a new subscription, only the firebase version of the app would know that they are a paying user and the supabase version would not. Hence, I needed to connect these in realtime and the way to do this was to utilize [firebase trigger functions](https://firebase.google.com/docs/functions/firestore-events). Here's how I did it:
1. A user creates a subscription in the [payments page](https://payments.fleetingnotes.app) 
2. The [stripe firebase extension](https://github.com/stripe/stripe-firebase-extensions/) creates a new customer in the `customer` collection in firebase
3. A [[notes/update_stripe_customer_id|firebase function]] is triggered to update the supabase tables with the correct `stripe_customer_id`
4. If the `stripe_customer_id` is updated, this [[notes/update_subscription_tier|triggers a supabase function]] that updates the subscription tier

With all this functionality, we now have a table that's constantly up to date with the subscription tier of the user. This table also stores the `stripe_customer_id`. Which can be used to [[notes/create_stripe_checkout|create checkout sessions]] or redirect to the [[notes/stripe_customer_portal|stripe customer portal]]. For our particular use case, we redirect the user to a checkout session if they are a free user (after sign in), otherwise redirect them to the stripe customer portal.

### Resources that helped me
A big shout out to the supabase team, [supabase happy hour series](https://www.youtube.com/playlist?list=PL5S4mPUpp4Ouyw8bMupHgxC3VL9BLZzvV), [egghead stripe course](https://egghead.io/lessons/supabase-create-a-supabase-project) and the [happy-days repo](https://github.com/dijonmusters/happy-days) for helping with this component of the migration. I definitely would've spent way more time figuring out what I needed to do without these helpful courses / videos.

## Notes migration
The idea of the two-way sync came from a [github comment](https://github.com/supabase/supabase/discussions/175) by the co-founder of supabase. Here's how I made it work on the supabase end:
1. A user saves a note with the supabase version of the app
2. A [database webhook](https://supabase.com/docs/guides/database/webhooks) sends the updated note data to a [[notes/supabase_notes_to_firebase|firebase function]] that saves the note to firebase.

A very similar thing happens on the firebase end:
1. A user saves a note with the firebase version of the app
2. A [[notes/firebase_notes_to_supabase|firebase trigger function]] updates supabase with the updated note

With this the notes are bi-directionally synced, but there was an issue where these functions keep triggering each other indefinitely. I avoided this was by using the `modified_at` field within the note. The update would not proceed if the note in the database was `modified_at` later than the note in question. Now the databases won't be calling each other back and forth indefinitely.

After I got the sync set up, I still needed to migrate all existing notes from firebase to supabase. To do this, I ran a [[notes/migrate_firebase_notes|script to transfer all notes from firebase to supabase]].


## Account Migration
Account migration is done within the supabase version on sign in. Here's how it works:
1. User clicks "sign in" for the first time on the supabase version of the app
2. Using the credentials entered, two concurrent sign in attempts are made to the firebase and supabase.
3. Only if supabase fails the login and firebase succeeds, we continue to the next steps.
	1. Otherwise we proceed the login (if supabase attempt successful) or fail the login (if supabase attempt unsuccessful).
4. Attempt to register for supabase. On registration a series of backend functions are called to migrate the user data:
	1. On user creation, [[notes/handle_new_users|database function]] is called to insert rows to into other tables.
	2. Then, this triggers two database webhooks that get the [[notes/get_stripe_id_from_firebase|stripe_customer_id]] and [[notes/transfer_encryption_key|encryption key]] from firebase.
	3. If the `stripe_customer_id` exists, then another database webhook is triggered to [[notes/update_subscription_tier|get the subscription_tier]]
5. After registration is complete, another supabase login attempt is made to login the user.

A single bad, but "acceptable" scenario
- If a user changes their password after the account migration, then the password change won't be reflected in the other version of the app. 

## Other considerations I had
- [Firebase migration guide](https://supabase.com/docs/guides/migrations): Migration guide from supabase would've been nice if I didn't want a seamless migration. Going about this way would make the supabase version fully incompatible with the firebase version. In addition, the multi-platform nature would mean that users could be using different versions of the app. This would cause unexpected behaviour and make for a bad user experience. That being said, my [[notes/migrate_firebase_notes|script to migrate notes]] was inspired by code in this repo. 
- [Stripe-Supabase Sync Engine](https://github.com/supabase/stripe-sync-engine): syncing the stripe database to supabase would've been nice but also would've been a lot of unnessary extra work (I'll just use stripe webhooks instead). Also, I needed to spin up something to host that and I wasn't willing to do that.
- **Two-way sync of account data:** Originally the plan was to have two-way sync of the account data. Once I set this up, both versions would automatically be 100% compatible with each other (with two-way note sync). But, I soon realized that it was a lot more work than anticipated because of several reasons: there aren't firebase hooks for account creation or account data modification, I needed to deal with encrypting and decrypting hashed passwords, and I couldn't use the SDK to do this. Instead, I settled on migrating the user on sign in, so I do have access to the email & password while performing the migration.
- **Save notes to supabase & firebase within the app:** Another consideration was to save notes to two servers (supabase & firebase). The problem with this was that I wanted to completely remove firebase dependencies from within my app and doing this would delay that. Also, saving might not be reliable as connectivity issues can cause one note to be saved on one server but not the other. 

## Was it worth it?
Hopefully.

This entire migration process probably took 3 weeks of my time to plan, execute and fix (Yes, there were some bugs upon initial release). During this time, I could've been marketing or developing new features. It was a lot more work than anticipated and it probably would've been more if I saved it for later. But with this migration, I feel more at ease about the future of Fleeting Notes and I'm excited for what to come in the following months.

## All backend functions used for migration:

### Firebase functions
- [[notes/update_stripe_customer_id]]
- [[notes/get_stripe_id_from_firebase_uid]]
- [[notes/transfer_encryption_key]]
- [[notes/firebase_notes_to_supabase]]
- [[notes/supabase_notes_to_firebase]]
- [[notes/migrate_firebase_notes]]

### Supabase functions
- [[notes/create_stripe_checkout]]
- [[notes/create_stripe_customer]]
- [[notes/get_stripe_id_from_firebase]]
- [[notes/stripe_customer_portal]]
- [[notes/stripe_webhooks]]
- [[notes/update_subscription_tier]]

### Database Functions
- [[notes/handle_new_users]]