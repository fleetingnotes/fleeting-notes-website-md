---
title: "Supported metadata fields in Obsidian plugin"
date: 2023-01-25
---
- `${id}` : the id of the note used for sync (required)
- `${title}` : title populated in fleeting notes
- `${content}` : content populated in fleeting
- `${source}` : source populated in fleeting notes
- `${tags}` : an array of tags used within the note (e.g. `["hello", "world", "iloveu"]`)
- `${modified_date}` : the date in which the note was modified (e.g. `"2023-01-06"`)
- `${created_date}` : the date in which the note was created (e.g. `"2023-01-06"`)
- `${datetime}` : the datetime in which the note was created (e.g. `"2023-01-06T12:37:19.249+00:00"`). 


Note: the `datetime` variable can be parsed with the templater plugin to [[create-custom-date-formatting-with-templater|create custom date formatting]]