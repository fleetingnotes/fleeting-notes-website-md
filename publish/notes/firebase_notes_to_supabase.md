---
title: firebase_notes_to_supabase
tags: [ "notes" ]
date: 2022-10-30
lastmod: 2022-10-30
---
A [[notes/firebase function|firebase function]] that is [triggered](https://firebase.google.com/docs/functions/firestore-events) whenever a note is created or modified. This function then updates the note within supabase.

1. With the updated note data from the [firebase trigger](https://firebase.google.com/docs/functions/firestore-events), a query is made to firebase for the same note within supabase
2. If the note from firebase was `modified_at` later than the note from supabase or if it is not a new note, then we skip the following steps.
3. Otherwise, [upsert](https://supabase.com/docs/reference/javascript/upsert) the updated note into firebase from supabase.

```
exports.firebase_notes_to_supabase = functions.firestore.document('notes/{note_id}').onWrite(async (change, context) => {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const note_id = context.params.note_id;
  const note = change.after.data();
  const fireNote = firebaseNoteToSupabase(note_id, note);

  // Step 1
  const { data: supaNote } = await supabase
    .from('notes')
    .select("modified_at")
    .match({id: note_id})
    .single();

  // Step 2
  if (!supaNote || new Date(supaNote.modified_at) < new Date(fireNote.modified_at)) {
  
    // Step 3
    const { data, error } = await supabase
      .from('notes')
      .upsert(fireNote)
    if (error) {
      console.error({ note_id, error });
      return false;
    }
    console.log({ note_id, data });
    return true;
  }
  return false
});
```