---
title: "Create your own plugin"
description: 
permalink: /plugins/create-your-own-plugin
date: 2023-09-08
publish: true
---
1. Fork this [repository](https://github.com/fleetingnotes/fleeting-notes-plugins) 
2. Create a folder to `plugins/community` in your fork. Use dashes to seperate words when naming this folder.
3. In the folder you created, add a file `index.ts`
4. Create a function within `index.ts` to that takes in the [[Receiving requests|Request]] as a parameter and returns a [[Sending responses|Response]]. For example:
```
export default (request: Request) : Response => {
  var exampleNote = {
    "note": {
      "title": "new title"
      "content": "new content",
      "source": "new source",
    }
  }
  return new Response(JSON.stringify(exampleNote));
}
```


6. [[Test your plugin locally|Test your plugin locally]] to ensure it works as expected
7. [Create a pull request from your fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) to the main repostory


 See [plugins/community/example](https://github.com/fleetingnotes/fleeting-notes-plugins/blob/main/plugins/community/example/index.ts) for an up-to-date example. 