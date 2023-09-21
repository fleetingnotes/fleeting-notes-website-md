---
title: Start Here
description: 
permalink: "contributing/start-here"
date: 2023-09-08
publish: true
---
If you'd like to checkout how you can contribute to Fleeting Notes, how you can [[Create your own plugin|create your own plugin]].  Or you can look at the documentation on how to [[publish/docs/Contributing/Start here|get started with contributing]] to the Fleeting Notes app and tackle an [issue](https://github.com/fleetingnotes/fleeting-notes-flutter/issues).

Here is a list of guides that will be helpful to get started with contributing to the [Fleeting Notes app](https://github.com/fleetingnotes/fleeting-notes-flutter/). The fastest way to get started is to [[#Run Fleeting Notes Locally on the web|run the web build locally]]. Below is how you can do so.

## Run Fleeting Notes Locally on the web
1. [Install flutter](https://docs.flutter.dev/get-started/install)
2. Clone the [repository](https://github.com/fleetingnotes/fleeting-notes-flutter) locally
3. Ask me (matthew@fleetingnotes.app) for the `env.json` file and add it to the root directory
4. Run the command below to run a dev build:
```
flutter run -d chrome --web-renderer=html --dart-define-from-file=env.json
```

## Further Reading:
- [[Release a new version|Release a new version]]

