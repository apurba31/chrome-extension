// background.js - runs in the background persistently.
console.log("Background script loaded");
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(sender.tab ?
              "from a content script:" + sender.tab.url :
              "from the extension");
  if (request.greeting == "hello")
    sendResponse({farewell: "goodbye"});
});