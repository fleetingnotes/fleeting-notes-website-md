---
title: "Create custom date formatting in Obsidian plugin with templater"
date: 2023-01-25
---
There's some odd behaviour between the templater plugin and the Fleeting Notes plugin the Fleeting Notes plugin to utilize it's functionality. Here are the steps to customize the datetime format within the note template.

1. Install and enable the [templater plugin](https://github.com/SilentVoid13/Templater) in Obsidian
2. In the templater settings, enable "Trigger Templater on new file creation"
![[templater-setting-new-file-creation.png]]
3. Templater supports a library called `moment`, you can see the what different types of formats you can use in the [documentation](https://momentjs.com/docs/#/displaying/). Update the note template in the Fleeting Notes settings
```
created_date: "<% moment("${datetime}").format("YYYY-MM-DD") %>"
```
4. Then try and run the sync command and see the proper date format work!

