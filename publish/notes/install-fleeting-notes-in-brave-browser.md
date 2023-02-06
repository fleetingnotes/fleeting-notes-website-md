---
title: "Install Fleeting Notes in Brave browser"
date: 2023-02-06
---
1. Go to the chrome extension store and download the [Fleeting Notes app](https://chrome.google.com/webstore/detail/fleeting-notes/gcplhmogdjioeaenmehmapbdonklmdnc/related)
2. Go to the brave cookie settings by navigating to below URL:
```
brave://settings/cookies
```
3. Scroll down to `Sites that can always use cookies` and click "Add" (this enables cookies which is needed to display the sidebar)
![[brave-cookie-settings.png]]
4. Paste the URL below into the text field.
```
chrome-extension://gcplhmogdjioeaenmehmapbdonklmdnc/*
```
5. Open the Fleeting Notes extension and see that the sidebar is not blank anymore
![[fleeting-notes-in-brave.png]]