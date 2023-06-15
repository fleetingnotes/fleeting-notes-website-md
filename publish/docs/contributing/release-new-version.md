---
title: "Release a New Version"
date: 2023-06-15
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
6. Create a [github release](https://github.com/fleetingnotes/fleeting-notes-flutter/releases) and add the CHANGELOG to the description. 
7. Merge the PR and publish the github release once you send everything to review and you've gone through the release checklist

## Release Checklist:
- [ ] iOS (https://appstoreconnect.apple.com/apps/1615226800/appstore/ios/version/inflight)
- [ ] Android (https://play.google.com/console/u/0/developers/5327230890052241772/app/4976191625623411474/tracks/production)
- [ ] Firefox (https://addons.mozilla.org/en-CA/developers/addon/fleeting-notes/versions/submit/)
- [ ] Chrome (https://chrome.google.com/webstore/devconsole/4d8ee7e3-234d-4403-85bb-2b633b407fbb/gcplhmogdjioeaenmehmapbdonklmdnc/edit/package?hl=en)
- [ ] Web (https://app.netlify.com/sites/my-fleetingnotes/deploys)
- [ ] Safari (https://appstoreconnect.apple.com/apps/1669824754/testflight/macos)
