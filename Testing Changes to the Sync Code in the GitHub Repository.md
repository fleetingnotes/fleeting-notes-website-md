
### Instructions: Testing Changes to the Sync Code in the GitHub Repository

1. **Fork the Repository (if not already done)**:
   - Navigate to the 'sync' GitHub repo.
   - Click on the 'Fork' button in the top-right corner to create your copy of the repository.

2. **Clone Your Forked Repository**:
   - After forking, clone your repository to your local machine.

3. **Place the Repository in the .obsidian Folder**:
   - Navigate to your Obsidian vault.
   - Open the `.obsidian` folder, and then go to the `plugins` subfolder (this is where other plugin folders reside).
   - Move or copy your cloned 'sync' repo into this `plugins` folder.

4. **Run the Development Server**:
   - Open a terminal or command prompt.
   - Navigate to your 'sync' repository folder.
   - Run `npm install` (if you haven't already) to install necessary dependencies.
   - Then, run `npm run dev` to start the development server.

5. **Refresh the Plugin in Obsidian**:
   - Go back to the Obsidian application.
   - Navigate to the `Settings` > `Third-party plugins`.
   - Disable and then enable the 'sync' plugin. This action will refresh the plugin and incorporate your changes.

6. **Document the Process**:
   - As suggested by Matt Wong, it's a good practice to document these steps either in the README.md of the repository or in any other relevant documentation space. This will help any contributors or yourself in the future.

7. **Make Changes and Test**:
   - Now, you can make changes to the code in the repository.
   - Every time you make a change, you can refresh the plugin in Obsidian by disabling and enabling it to test the changes.

By following these instructions, you should be able to test any modifications you make to the 'sync' code effectively.