---
title: Obsidian Plugin Settings
description: 
permalink: /reference/obsidian-plugin-settings
date: 2023-09-08
publish: true
---
## Authentication
- **Account**: Easily sign in or out of your Fleeting Notes account.
- **Encryption Key**: This key encrypts your notes. If [[Enable end-to-end encryption|set in the app]], ensure it's also set here to view your notes.

![[Pasted image 20230921102016.png]]
## Sync Settings
- **Notes Folder Location**: Designate a folder for storing and organizing notes.
- **Attachments Folder Location**: Designate a folder for storing attachments.
- **Automatic Sync**: Notes sync automatically upon startup and every 30 minutes.
- **Sync Type**: Choose the sync strategy for your notes. For detailed explanations of sync methods, [[Meaning of different sync types in Obsidian plugin|click here]].

![[Pasted image 20230921102030.png]]
## Note Templating Options
- **Title Template**: Define note titles in your vault. By default: Note title > Source title > Note ID.
- **Note Template**: Customize the structure of your notes.
- **Date Format**: Adjust the display of `${created_date}` and `${last_modified_date}`. For more, see [Moment.js documentation](https://momentjs.com/docs/#/displaying/).

![[Pasted image 20230921102054.png]]
## Other Settings
- **Auto-Generate Note Title**: If a note lacks a title, one is auto-generated from its content.
- **Notes Filter Text**: Only import notes with titles or content containing specified text.
- **Sync Obsidian Links**: Sync your `[[links]]` from Obsidian with Fleeting Notes. See more info [[How to sync Obsidian wikilinks into Fleeting Notes|here]].

![[Pasted image 20230921102102.png]]