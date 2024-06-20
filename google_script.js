function doPost(e) {
    var memberSealCode = e.parameter.sealCode;
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  
    var sealImageUrl = "";
    var numRows = sheet.getLastRow();
  
    for (var row = 2; row <= numRows; row++) { // Start from row 2 to skip the header row
      var sealCode = sheet.getRange(row, 5).getValue();
      var status = sheet.getRange(row, 7).getValue();
      if (sealCode !== memberSealCode || status.toLowerCase() !== 'approved') {
        continue;
      }
      sealImageUrl = sheet.getRange(row, 6).getValue();
    }
  
    if (sealImageUrl !== "") {
      return ContentService.createTextOutput(JSON.stringify({ "status": "success", "imageUrl": sealImageUrl }));
    } else {
      return ContentService.createTextOutput(JSON.stringify({ "status": "not found seal"}));
    } 
  }
  