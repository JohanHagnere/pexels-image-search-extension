// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "show-me-something" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "show-me-something.helloWorld",
    async function () {
      // The code you place here will be executed every time your command is executed
      const query = await vscode.window.showInputBox({
        prompt: "Enter the image search query",
      });

      if (query) {
        // Generate the Bing Images search URL based on the query
        const searchUrl = `https://www.pexels.com/fr-fr/chercher/${encodeURIComponent(
          query
        )}`;

        // Open the URL in the default web browser
        vscode.commands.executeCommand(
          "vscode.open",
          vscode.Uri.parse(searchUrl)
        );
      }
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
