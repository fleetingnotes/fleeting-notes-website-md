---
title: transfer_encryption_key
tags: [ "notes" ]
date: 2022-10-30
lastmod: 2022-10-30
---
A [[notes/firebase function|firebase function]] that transfers the hashed encryption key for [[posts/end-to-end-encryption-in-fleeting-notes|end-to-end encryption]] from firebase to supabase.

1. The function takes `supabase_user_id` as an input
2. The `supabase_user` is queried based on the supabase uid
3. The `firebase_user_id` is extracted from the `supabase_user`
4. `encryption_key` is queried from firebase using the `firebase_user_id`
5. The `supabase_user_id` and the `encryption_key` are upserted into supabase

```
exports.transfer_encryption_key = functions.https.onRequest(async (req, res) => {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // get firebaseUid from supabaseUid
  const supabaseUid = req.body.record?.id;
  const { data } = await supabase.auth.admin.getUserById(supabaseUid);
  const firebaseUid = data?.user?.user_metadata?.['firebaseUid']
  
  
  // get encryption key
  const ref = db.collection('encryption').doc(firebaseUid);
  const doc = await ref.get();
  const encryption_key = doc.data()?.key;

  // update supabase encryption_key
  const { error } = await supabase
    .from('user_data')
    .upsert({
      id: supabaseUid,
      encryption_key
    });
    
  return res.sendStatus(200);
});
```