---
title: Meaning of different sync types in Obsidian plugin
description: 
permalink: /reference/meaning-of-different-sync-types-obsidian-plugin
date: 2023-09-08
publish: true
---
![[Pasted image 20230915104107.png]]
### One-way sync (FN => Obsidian)
**Description**: Notes are synced from Fleeting Notes to Obsidian. Changes in Obsidian (Creating, Deleting, Editing) are NOT reflected in Obsidian. 

**When to use**: If you don't plan to touch the Fleeting Notes folder and want control of when notes are synced, use this sync type. 
### One-way sync (FN => Obsidian) + Delete from FN
**Description**: Notes are synced from Fleeting Notes to Obsidian. When notes are synced into Obsidian, all notes are *deleted* from Fleeting Notes.

**When to use**: If Fleeting Notes is only your dumping ground and you don't really use Fleeting Notes to revisit past notes, use this sync type.
### Realtime One-way sync (FN => Obsidian)
**Description**: Notes are synced from Fleeting Notes to Obsidian. Notes edited in Obsidian are NOT reflected in 

**When to use**: If you don't want to touch your Fleeting Notes folder and want realtime automatic sync from Fleeting Notes to Obsidian.

### Realtime Two-way sync (FN => Obsidian)
**Description**: Notes are synced from Fleeting Notes to Obsidian. Notes edited in Obsidian are NOT reflected in 

**When to use**: When you see yourself going back to notes in Fleeting Notes and Obsidian.

**Notes**:
- New notes created in Fleeting Notes are not synced UNLESS you run the `Create Empty Fleeting Note` command in Obsidian
- Notes deleted / moved outside of the folder WILL be deleted in Fleeting Notes.