# OMEGA Script Studio

Desktop Luau editor for Windows built with Electron. Includes a dark purple UI, editable tabs/workspace, starter templates, open/save/export, request prompt builder for ChatGPT, and a link to official Luau documentation.

## Requirements
- Windows 10/11
- Node.js 20+ (LTS recommended)
- Internet connection for installing dependencies

## Run from source
1. Install Node.js from https://nodejs.org/
2. Extract this folder.
3. Open PowerShell in the `omega_script_studio` folder.
4. Run:
   ```powershell
   npm install
   npm start
   ```

## Build a Windows installer
Run:
```powershell
npm install
npm run dist
```
The installer will be generated in `dist/`.

## Usage
- Write or edit Luau in the main editor.
- Use starter snippets in the left sidebar.
- Save or export `.luau` / `.lua` files.
- Enter a task in Script Copilot and click “Скопировать запрос для ChatGPT”; paste it into ChatGPT to get help improving the script.
- Open the exported code in Roblox Studio in the appropriate Script, LocalScript, or ModuleScript, then test using Play and the Output panel.

## Scope
This app is an editor/workspace. It does not inject code into Roblox, execute scripts inside public games, or bypass server permissions. Code should be tested in a Roblox Studio project you own or are authorized to edit.
