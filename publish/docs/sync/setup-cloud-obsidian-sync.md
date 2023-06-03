---
title: "Setup Obsidian Cloud Sync"
date: 2023-06-03
---

## Installation / Setup
1. Before you begin, you'll need to create an account in the [Fleeting Notes App](https://fleetingnotes.app/). You can do this by navigating to the settings and registering.
![[fn-auth-form.png|Fleeting Notes authentication form]]
2. Go to Settings > Community Plugin and turn off the "Restricted mode". With this turned off, you can install the plugin to perform the sync.
![[fleeting-notes-sync-3.png|Install from Community Plugin]]

3. Click "Browse" and search for "Fleeting Notes Sync"
![[fleeting-notes-sync-2.png|Browse Community Plugins]]
![[fleeting-notes-sync-2.png]]

4. Install the plugin and ensure you have it enabled
![[fleeting-notes-sync-1.png|Ensure Plugin Enabled]]
5. Once enabled click "Fleeting Notes Sync" under Plugin Options > Fleeting Notes Sync. Under here, fill in your username, password, and desired folder location to sync your notes. 
![[fleeting-notes-sync-4.png|Fleeting Notes Settings]]
6. (Optional) Adjust sync settings:
	1. Toggle the "Sync notes on startup", to run the sync whenever Obsidian is opened.
	2. Change sync type to "Two-way sync" for [[posts/imagine-google-keep-with-obsidian-sync|bi-directional sync]]
	3. Adjust note template to your needs (Note: metadata is needed for sync)
![[fleeting-notes-sync-8.png]]

## Usage
1.  Now open the [command palette](https://help.obsidian.md/Plugins/Command+palette) and run `Fleeting Notes: Pull All Notes from Fleeting Notes`
![[fleeting-notes-sync-6.png|Open Command Palette]]

2. Your notes will be synced with Fleeting Notes and you will get a notification!
![[fleeting-notes-sync-7.png|Sync Notification]]