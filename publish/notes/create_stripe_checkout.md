---
title: create_stripe_checkout
tags: [ "notes" ]
date: 2022-10-30
lastmod: 2022-10-30
---
A [supabase function](https://supabase.com/docs/guides/functions) that creates and returns a url to a stripe checkout session. Steps:

1. Get the `supabase_user_id` from the request
2. Use the `supabase_user_id` to get the `stripe_customer_id` from a table
3. Create a [stripe checkout session](https://stripe.com/docs/api/checkout/sessions/create?lang=node) and return the url of the stripe checkout session

[Example Code](https://github.com/dijonmusters/happy-days/blob/main/supabase/functions/create-stripe-checkout/index.ts)
[Video Walkthrough](https://egghead.io/lessons/next-js-charge-customer-for-stripe-subscription-in-next-js)