---
title: "Run Fleeting Notes Locally on the web"
date: 2023-06-15
---
1. [Install flutter](https://docs.flutter.dev/get-started/install)
2. Clone the [repository](https://github.com/fleetingnotes/fleeting-notes-flutter) locally
3. Ask me (matthew@fleetingnotes.app) for the `env.json` file and add it to the root directory
4. Run the command below to run a dev build:
```
flutter run -d chrome --web-renderer=html --dart-define-from-file=env.json
```