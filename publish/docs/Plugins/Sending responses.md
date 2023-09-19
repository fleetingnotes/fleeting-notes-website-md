---
title: "Sending responses"
description: 
permalink: /plugins/sending-responses
date: 2023-09-08
publish: true
---
**NOTE:** The way Fleeting Notes handles responses is subject to change. This document will be updated accordingly.

The [Response](https://deno.land/api?s=Response) object is an object from the Deno fetch library.

If status code is 200:
- AND response contains a [[Note Object|note object]], then the current note is updated to match the note object.
```
var exampleNote = {
	"note": {
		"title": "new title",
		"content": "new content",
		"source": "new source",
	}
}
return new Response(JSON.stringify(exampleNote));
```
- AND response does not contain a [[Note Object|note object]], then the response body (string) is pasted at the current cursor location
```
return new Response("hello world");
```

If status code is not 200:
- Then a dialog will be shown with the response body show in the dialog.
```
return new Response("error!", { status: 400 });
```
