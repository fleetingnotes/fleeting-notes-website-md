---
title: "Adjusted Obsidian template for weekly notes"
date: 2023-02-16
---
Source: https://www.reddit.com/r/ObsidianMD/comments/10xb9p1/comment/j7wnmbg/?utm_source=share&utm_medium=web2x&context=3

````
## Fleeting Notes
```dataview
LIST
FROM "FleetingNotesApp"
WHERE dateformat(created_date, "ww-yyyy") = dateformat(date(split(this.file.name, " ")[0]), "ww-yyyy")
```

## Tasks from Fleeting Notes
```dataview
TASK
FROM "FleetingNotesApp"
WHERE !completed
```

## My Notes

````