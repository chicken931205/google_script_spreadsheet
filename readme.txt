=== Set Up a Google Apps Script in the SpreadSheet ===
- Go to Google Sheets and create a new sheet.
- In the Google Sheet, go to Extensions -> Apps Script.
- Delete any existing code and Create Custom code.

=== deploy Google Apps Script as 'Web App' ===
- Click Deploy -> New Deployment.
- Choose Web app as the deployment type.
- Set the project version to "New" and provide a description.
- Set the "Execute the app as" to "Me" and "Who has access" to "Anyone".
- Click Deploy and authorize the script with the required permissions.
- You will get a URL (something like https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec). Copy the URL.