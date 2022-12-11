---
title: supabase_notes_to_firebase
tags: [ "notes" ]
date: 2022-10-30
lastmod: 2022-10-30
---
A [[notes/firebase function|firebase function]] that is called from firebase with the updated note data through a [database webhook](https://supabase.com/docs/guides/database/webhooks). This function updates the note within firebase from supabase.

1. With the updated note data from the supabase, a query is made to supabase for the same note within firebase
2. If the note from supabase was `modified_at` later than the note from firebase, then we skip the following steps.
3. Otherwise, [upsert](https://supabase.com/docs/reference/javascript/upsert) the updated note into supabase from firebase.

```
exports.supabase_notes_to_firebase = functions.https.onRequest(async (req, res) => {
  const note = req.body.record;
  const fireNote = supabaseNoteToFirebase(note);
  const ref = db.collection('notes').doc(note.id);
  const snapshot = await ref.get();
  const prevNote = snapshot.data();
  if (!prevNote || prevNote.last_modified_timestamp.toDate() < fireNote.last_modified_timestamp) {
    await ref.set(fireNote);
    functions.logger.info(`updated note: ${note.id}`)
    return res.sendStatus(200);
  }
  return res.sendStatus(400)
});
```