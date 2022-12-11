---
title: update_subscription_tier
tags: [ "notes" ]
date: 2022-10-30
lastmod: 2022-10-30
---
A [supabase function](https://supabase.com/docs/guides/functions) that is triggered by a [database webhook](https://supabase.com/docs/guides/database/webhooks) when the `stripe_customer_id` is [[notes/create_stripe_customer|created]] or updated.

1. Check if it's a valid `stripe_customer_id`  by [querying subscriptions](https://stripe.com/docs/api/subscriptions/retrieve?lang=node)
2. If subscription is "active" or "trialing", then retrieve the `subscription_tier` from the [metadata](https://stripe.com/docs/api/metadata) of the subscription plan.
3. Otherwise, set the `subscription_tier` to "free"
4. Update the row of the `stripe_customer_id` with the new `subscription_tier`

```
let subscription_tier = 'free';

// Step 1
const sub = await stripe.subscriptions.list({
  customer: record.stripe_customer_id,
  limit: 1,
});
if (sub.data.length > 0) {
  const subData = sub.data[0];
  
  // Step 2
  if (["active", "trialing"].includes(subData.status)) {
	const prod = await stripe.products.retrieve(subData.plan.product);
	subscription_tier = prod.metadata.supabaseTier || 'free';
  }
}

// Step 3 (default subscription_tier is free)

// Step 4
const { error } = await supabase
  .from("customers")
  .update({
	subscription_tier,
  })
  .match({ id: record.id })
  .neq('subscription_tier', subscription_tier);
```