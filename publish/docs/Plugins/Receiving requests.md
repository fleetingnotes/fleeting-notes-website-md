---
title: Receiving requests
description: 
permalink: /plugins/receiving-requests
date: 2023-09-08
publish: true
---
**NOTE:** The way Fleeting Notes sends requests is subject to change. This document will be updated accordingly.

The [Request](https://deno.land/api?s=Request) object is an object from the Deno fetch library. When a slash command is called from a note, the [[Note Object|note]] and some metadata will be sent to your function. In order to access this data, you'll need to convert the body into a JSON object. See how to do so below:
```
var json = await request.json();
var metadata = json['metadata'];
var note = json['note'];
```

