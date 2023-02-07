## Fleeting Notes
```dataview
LIST
FROM "FleetingNotesApp"
WHERE created_date = date({{date}}) 
```

## Tasks from Fleeting Notes
```dataview
TASK
FROM "FleetingNotesApp"
WHERE !completed
```

## My Notes
