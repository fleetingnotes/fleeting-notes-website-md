---
title: Release a New Version
description: 
permalink: contributing/release-a-new-version
date: 2023-09-08
publish: true
---
1. Checkout a new in the format `version-x.x.x`
2. Run the bumpversion script and specify version number
```
./bumpversion.sh 1.2.3
```
3. Push the new commit created by the bumpversion script and tags to the repository. 
```
git push
git push --tags
```
4. Wait for the build to finish running then test that the apps work
5. Use these assets to distribute app on see "Release Checklist" below.
	1. **For iOS:** drag and drop the "build/ios/ipa/*.ipa" bundle into the Apple Transport macOS app https://apps.apple.com/us/app/transporter/id1450874784
	2. **For Firefox**: You'll need to add the source code (because we submit minified version) & add the [steps to release from clean env](https://github.com/fleetingnotes/fleeting-notes-flutter/blob/main/docs/release_from_clean_env.md)
	3. **For Safari**: Run `./build_web_ext.sh`, then open `safari` folder in XCode and go to Product > Archive. 
6. Create a [github release](https://github.com/fleetingnotes/fleeting-notes-flutter/releases) and add the CHANGELOG to the description. 
7. Merge the PR and publish the github release once you send everything to review and you've gone through the release checklist
