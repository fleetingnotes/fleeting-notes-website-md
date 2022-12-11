---
title: How to Sync Fleeting Notes with Obsidian
tags: [ "blog" ]
description: A step-by-step guide on how to sync Fleeting Notes with Obsidian
date: 2022-04-12
lastmod: 2022-09-22
---
[[notes/Fleeting Notes|Fleeting Notes]] is a separate network of notes outside of Obsidian. The goal of this plugin sync both these networks of notes into one! Below are step-by-step instructions on how to do this.

## Installation / Setup
1. Before you begin, you'll need to create an account in the [Fleeting Notes App](https://fleetingnotes.app/). You can do this by navigating to the settings and registering.
![Fleeting Notes authentication form](posts/img/fn-auth-form.png)
2. Go to Settings > Community Plugin and turn off the "Restricted mode". With this turned off, you can install the plugin to perform the sync.
![Install from Community Plugin](posts/img/fleeting-notes-sync-3.png)

3. Click "Browse" and search for "Fleeting Notes Sync"
![Browse Community Plugins](posts/img/fleeting-notes-sync-2.png)

4. Install the plugin and ensure you have it enabled
![Ensure Plugin Enabled](posts/img/fleeting-notes-sync-1.png)
5. Once enabled click "Fleeting Notes Sync" under Plugin Options > Fleeting Notes Sync. Under here, fill in your username, password, and desired folder location to sync your notes. 
![Fleeting Notes Settings](posts/img/fleeting-notes-sync-4.png)
6. (Optional) Adjust sync settings:
	1. Toggle the "Sync notes on startup", to run the sync whenever Obsidian is opened.
	2. Change sync type to "Two-way sync" for [[posts/imagine-google-keep-with-obsidian-sync|bi-directional sync]]
	3. Adjust note template to your needs (Note: metadata is needed for sync)
![[posts/img/fleeting-notes-sync-8.png]]

## Usage
1.  Now open the [command palette](https://help.obsidian.md/Plugins/Command+palette) and run `Fleeting Notes: Pull All Notes from Fleeting Notes`
![Open Command Palette](posts/img/fleeting-notes-sync-6.png)

2. Your notes will be synced with Fleeting Notes and you will get a notification!
![Sync Notification](posts/img/fleeting-notes-sync-7.png)
## Next Steps
Now that you have your notes synced, see the [[posts/3-ways-to-process-fleeting-notes-within-obsidian|3 Ways to Process Fleeting Notes within Obidian]]