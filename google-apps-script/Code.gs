/**
 * Google Apps Script - Contact form -> Google Sheet
 *
 * Paste this into the Apps Script editor of your Google Sheet
 * (Extensions > Apps Script), then Deploy > New deployment > Web app.
 */

var SHEET_NAME = "Contact Requests";
var HEADERS = ["Timestamp", "Name", "Mobile Number", "Email", "Subject", "Message"];
var WORDS_LIMIT = 5; // keep in sync with NEXT_PUBLIC_WORDS_LIMIT

function doPost(e) {
  var lock = LockService.getScriptLock();

  try {
    lock.waitLock(30000);

    var body = JSON.parse(e.postData.contents);
    var name = clean_(body.name);
    var mobile = clean_(body.mobile);
    var email = clean_(body.email);
    var subject = clean_(body.subject);
    var message = clean_(body.message);

    if (!subject || !message) {
      return json_({ success: false, error: "Subject and message are required" });
    }

    if (message.split(/\s+/).length < WORDS_LIMIT) {
      return json_({
        success: false,
        error: "Message must be at least " + WORDS_LIMIT + " words",
      });
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    // Mobile column is stored as text so leading zeros / formats are preserved
    var nextRow = sheet.getLastRow() + 1;
    sheet.getRange(nextRow, 3).setNumberFormat("@");
    sheet.getRange(nextRow, 1, 1, HEADERS.length).setValues([
      [new Date(), name, mobile, email, subject, message],
    ]);

    return json_({ success: true });
  } catch (err) {
    return json_({
      success: false,
      error: "Failed to send message. Please contact support at +918700228181.",
    });
  } finally {
    try {
      lock.releaseLock();
    } catch (ignore) {}
  }
}

// Optional: open the Web App URL in a browser to check that it is live
function doGet() {
  return json_({ success: true, message: "Contact form endpoint is running" });
}

function clean_(value) {
  var text = value === undefined || value === null ? "" : String(value).trim();
  // Stop spreadsheet formula injection (=, +, -, @ at the start of a cell)
  if (/^[=+\-@]/.test(text)) {
    text = "'" + text;
  }
  return text;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
