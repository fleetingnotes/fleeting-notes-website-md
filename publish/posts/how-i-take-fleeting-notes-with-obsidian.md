---
title: "How I take Fleeting Notes with Obsidian"
date: 2023-02-06
---
I get a lot of questions asking how I process Fleeting Notes once they land in Obsidian. There are many ways to approach this but here's the best method I found for myself.

1. Setup [[sync-fleeting-notes-with-obsidian|Obsidian sync with Fleeting Notes]]
2. Install the [Obsidian Dataview](https://github.com/blacksmithgu/obsidian-dataview) plugin
3. Enable the Daily Notes plugin in the Obsidian settings (Also, check out [[simplest-obsidian-workflow-in-1-minute|how I use daily notes in Obsidian]])
4. Create a template file for the daily notes, and add the path of the file to the `Template file location`
5. Here's the template I use: 
````
## Fleeting Notes
```dataview
LIST
FROM "FleetingNotesApp"
WHERE created_date = date({{title}}) 
```

## Tasks from Fleeting Notes
```dataview
TASK
FROM "FleetingNotesApp"
WHERE !completed
```

## My Notes

````

Now with this template, I can see all the Fleeting Notes I've created for the day and the leftover tasks that I've created for myself in Fleeting Notes. What's great about this is that the [Dataview queries are fully customizable](https://blacksmithgu.github.io/obsidian-dataview/) and can be changed to fit whatever workflow you have. 

https://youtu.be/spqVolFtPws