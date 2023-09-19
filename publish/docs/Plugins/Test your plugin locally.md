---
title: "Test your plugin locally"
description: 
permalink: /plugins/test-your-plugin-locally
date: 2023-09-08
publish: true
---
1. [Install deno](https://deno.com/manual/getting_started/installation)
2. Within the folder you [[Create your own plugin|created for your plugin]], create a file called `webserver.ts` and add the following lines to it.
```
import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import myPlugin from "./index.ts"
serve(myPlugin);
```
2. Now run the deno command to start the webserver
```
deno run --allow-all webserver.ts
```
3. Once the webserver is up and running go to http://localhost:8000 to call the function you created in `index.ts`
4. Here is an example curl request to get you started
```
curl -d '{"metadata":"some metadata", "note":{"title":"title","content":"content","source":"source"}}' -H "Content-Type: application/json" -X POST http://localhost:8000/
```

 See [plugins/community/example](https://github.com/fleetingnotes/fleeting-notes-plugins/blob/main/plugins/community/example/index.ts) as an example