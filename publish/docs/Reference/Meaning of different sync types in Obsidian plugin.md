---
title: Meaning of different sync types in Obsidian plugin
description: 
permalink: /reference/meaning-of-different-sync-types-obsidian-plugin
date: 2023-09-08
publish: true
---

![[Pasted image 20230915104107.png]]
### One-Way Sync (FN → Obsidian)
**Description:** This sync type allows for a one-way transfer of notes from Fleeting Notes to Obsidian. Any changes made in Obsidian will not be mirrored back in Fleeting Notes.

**Ideal for:** Users who prefer a controlled sync process and do not intend to modify the Fleeting Notes folder post-sync.

### One-Way Sync with Deletion (FN → Obsidian) + Delete from FN
**Description:** In addition to syncing notes from Fleeting Notes to Obsidian, this option also deletes the synced notes from Fleeting Notes.

**Ideal for:** Users who use Fleeting Notes merely as a temporary storage space and do not wish to revisit notes there.

### Real-Time One-Way Sync (FN → Obsidian)
**Description:** This sync type ensures real-time one-way synchronization from Fleeting Notes to Obsidian. Note that edits made in Obsidian will not be reflected in Fleeting Notes.

**Ideal for:** Users seeking an automatic, real-time sync solution without the need to manage the Fleeting Notes folder actively.

### Real-Time Two-Way Sync (FN ↔ Obsidian)
**Description:** This option facilitates a two-way sync, allowing for an interactive exchange between Fleeting Notes and Obsidian with the following conditions:
- New notes in Fleeting Notes will only sync if initiated through the `Create Empty Fleeting Note` command in Obsidian.
- Notes moved or deleted outside of the designated folder will also be deleted in Fleeting Notes.

**Ideal for:** Users who actively engage with both Fleeting Notes and Obsidian and require a dynamic sync solution.



