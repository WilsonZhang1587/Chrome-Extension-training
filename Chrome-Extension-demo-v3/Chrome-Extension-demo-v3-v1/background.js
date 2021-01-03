let newURLText;

chrome.browserAction.onClicked.addListener(function (tab) {
  // -----------------------------------
  chrome.tabs.executeScript(tab.id, {
    file: "alertDialog.js",
  });
  chrome.tabs.insertCSS(tab.id, {
    file: "alertDialog.css",
  });
    // -----------------------------------

  let rangeURLText = tab.url.substring(tab.url.length - 14, tab.url.length);
  newURLText =
    "url" +
    rangeURLText;

  isCheckURL(tab);
});

function isCheckURL(tab) {
  let expression = "url";
  let isUrlFormat = RegExp(expression).test(tab.url);

  copyNewURL(isUrlFormat);
}

function copyNewURL(isUrlFormat) {
  let copyEl = document.createElement("textarea");

  copyEl.textContent = newURLText;
  document.body.appendChild(copyEl);
  copyEl.select();
  if (isUrlFormat) document.execCommand("copy");
  document.body.removeChild(copyEl);
}
