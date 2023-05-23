---
title: "How Fleeting Notes handles responses from plugins"
date: 2023-05-23
---
**NOTE:** The way Fleeting Notes handles responses is subject to change. This document will be updated accordingly.

If status code is 200:
- AND response contains a note object, then the current note is updated to match the note object.
- AND response does not contain a note object, then the response body (string) is pasted at the current cursor location

If status code is not 200:
- Then a dialog will be shown with the response body show in the dialog.