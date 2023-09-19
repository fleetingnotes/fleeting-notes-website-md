---
title: Add your first plugin
description: 
permalink: /plugins/add-your-first-plugin
date: 2023-09-08
publish: true
---
1. Find a plugin you want to add, either a [community plugin](https://github.com/fleetingnotes/fleeting-notes-plugins/tree/main/plugins/community) or an [official plugin](https://github.com/fleetingnotes/fleeting-notes-plugins/tree/main/plugins/official). (official plugins are officially supported plugins)
2. Open Fleeting Notes, then log into your account. In the settings screen, you will see a button called "Add New Command" under the `Plugin Slash Commands`. Click the "Add New Command" button.
![[Pasted image 20230531140622.png]]
3. Then, click the "Untitled Command" button and a drop down with three text fields should appear. Here's what they do:
	- **Alias (required)**: the name used when running the slash command
	- **Command ID (required)**: It will be either `official/` or `community/` followed by the name of the plugin (indicated by the folder name) in the [plugins repository](https://github.com/fleetingnotes/fleeting-notes-plugins/tree/main/plugins/official) (e.g. `official/chat-gpt-3.5`)
	- **Metadata**: This is metadata used by the plugin. Depending on the plugin this may or may not be required. For example, the `official/chat-gpt-3.5` plugin uses this to "pre-prompt" chat-gpt
![[Pasted image 20230531141232.png]]
4. Now within your note, you can run the slash command simply by typing the `/` in your keyboard. You should see a suggestion popup to run the command.
![[Pasted image 20230531141359.png]]