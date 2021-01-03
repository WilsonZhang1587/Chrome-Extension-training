chrome.browserAction.onClicked.addListener(function (tab) {
  let expression = "url";
  let isUrlFormat = RegExp(expression).test(tab.url);

  let rangeURLText = tab.url.substring(tab.url.length - 14, tab.url.length);
  let newURLText =
    "url" +
    rangeURLText;

  if (isUrlFormat) {
    let copyEl = document.createElement("textarea");
    copyEl.textContent = newURLText;
    document.body.appendChild(copyEl);
    copyEl.select();
    document.execCommand("copy");

    alert("複製成功");
  } else {
    alert("網址錯誤");
  }
});
