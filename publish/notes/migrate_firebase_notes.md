---
title: migrate_firebase_notes
tags: [ "notes" ]
date: 2022-10-30
lastmod: 2022-10-30
---
A javascript function used to migrate all existing notes from firebase to supabase. 

```
const migrate_firebase_notes = async (res, batch_size = 1000) => {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  let count = 0;
  let lastDoc;
  
  while (count === 0 || lastDoc) {
    let ref;
    if (lastDoc) {
      console.log(`Loaded ${batch_size} notes to supabase, total: ${count}, last note_id: ${lastDoc.id}`)
      ref = db
        .collection('notes')
        .orderBy('created_timestamp')
        .startAfter(lastDoc)
        .limit(batch_size);
    } else {
      ref = db
        .collection('notes')
        .orderBy('created_timestamp')
        .limit(batch_size);
    }
    const snapshot = await ref.get()
    lastDoc = snapshot.docs[snapshot.docs.length - 1];
    const supaNotes = snapshot.docs.map((doc) => firebaseNoteToSupabase(doc.id, doc.data()));
    const { error } = await supabase
      .from('notes')
      .upsert(supaNotes);
    if (error) {
      functions.logger.error(error);
      throw new Error('Failed to upsert into supabase')
    }
    count += snapshot.docs.length;
    
	// timeout used to not spam the servers
    await setTimeout(() => {}, 100);
  }
}
```