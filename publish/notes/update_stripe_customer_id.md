---
title: update_stripe_customer_id
tags: [ "notes" ]
date: 2022-10-30
lastmod: 2022-10-30
---
A [[notes/firebase function|firebase function]] that is [triggered](https://firebase.google.com/docs/functions/firestore-events) whenever a new stripe customer is added from the [firebase stripe extension](https://github.com/stripe/stripe-firebase-extensions/). The function then updates the supabase table with the correct `stripe_customer_id`. 

Steps:
1. Firebase function is triggered
2. The `supabase_user_id` is queried using the `firebase_user_id`
3. If a `supabase_user_id` exists, then [upserts](https://supabase.com/docs/reference/javascript/upsert) the `supabase_user_id` along with the `stripe_customer_id` into a table.

```
exports.update_stripe_customer_id = functions.firestore.document('customers/{uid}').onWrite(async (change, context) => {
  const stripeId = change.after.data()?.stripeId;
  const firebaseUid = context.params.uid
  if (stripeId) {
	const { data: { id: supabaseUid } } = await supabase.from('user_data')
			.select('id')
			.eq("firebase_uid", firebaseUid)
			.limit(1).single();
	if (supabaseUid) {
		await supabase.from('stripe')
		  .upsert({
			id: supabaseUid,
			stripe_customer_id: stripeId
		  })
	  }
  }
});
```