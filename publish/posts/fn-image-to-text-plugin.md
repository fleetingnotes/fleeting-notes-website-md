
- Ever took a screenshot of a web page or wanted to take a quick snap of a note and then transcribe it into text? Well look no further. 
- As of v0.10.4 of Fleeting Notes, I've added quick commands to easily record notes, take pictures and create checklists from the homescreen of Fleeting Notes.
- And with this I'd also like to introduce the image-to-text plugin (otherwise known as OCR). With this plugin, you can easily snap a photo, put it in Fleeting Notes and then run the command to extract the text out of the image! 
- Now this plugin provides a new quick way of capturing information into Obsidian. Upload or take a photo, then quickly extract the text
- How to set it up
	- [Follow the instructions to add a plugin](https://www.fleetingnotes.app/docs/plugins/add-a-plugin)
	- Then set the command id as `official/ocr-source`

How to convert an image to text in Fleeting Notes?
1. Open the Fleeting Notes app and login to your account
2. [[add-a-plugin|Add a plugin]] and set the command id as `official/ocr-source` and alias as `image-to-text`
3. Upload an image or add an image URL to the source field
4. Run the `image-to-text` command by typing `/` in the content field
5. Text is loaded into the content field