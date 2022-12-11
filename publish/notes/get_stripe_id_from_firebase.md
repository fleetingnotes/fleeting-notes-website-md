---
title: get_stripe_id_from_firebase
tags: [ "notes" ]
date: 2022-10-30
lastmod: 2022-10-30
---
A [supabase function](https://supabase.com/docs/guides/functions) that gets the stripe id from firebase and updates the table within supabase.

1. Make a request to [[notes/get_stripe_id_from_firebase_uid|get the stripe id from firebase]]
2. Update the table with the `stripe_customer_id` requested from firebase

```
// Step 1
let res = await fetch(uidToStripeIdUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ uid: firebaseUid })
  });

// Step 2
const { data, error } = await supabase
      .from("table")
      .update({
        stripe_customer_id,
      })
      .match({ id: record.id });
```