---
title: get_stripe_id_from_firebase_uid
tags: [ "notes" ]
date: 2022-10-30
lastmod: 2022-10-30
---
A [[notes/firebase function|firebase function]] that gets the stripe customer id given a firebase user id.

1. Makes a query to a table given a `firebase_user_id`
2. Returns the `stripe_customer_id` found the document within the table

```
exports.get_stripe_id_from_firebase_uid = functions.https.onRequest(async (req, res) => {
  // Step 1
  const uid = req.body.uid;
  const ref = db.collection(`customers`).doc(uid);
  const doc = await ref.get();

  // Step 2
  const stripeId = doc.data()?.stripeId;
  return res.status(200).json({ stripeId });
});
```