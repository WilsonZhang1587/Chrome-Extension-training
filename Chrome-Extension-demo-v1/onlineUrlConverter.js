document.addEventListener("DOMContentLoaded", function () {
  let newURLText

  document.getElementById("setURL").addEventListener("click", function () {
    const inputValue =  document.getElementById("searchURL").value
    let rangeURLText = inputValue.substring(inputValue.length - 14 ,inputValue.length)

    newURLText = 'url' + rangeURLText
    document.getElementById("getURL").textContent = newURLText
  }, false);

  document.getElementById("copyText").addEventListener("click", function () {
    const getURLElement =  document.getElementById("getURL")
    let range = document.createRange();
    range.selectNodeContents(getURLElement);

    let sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    document.execCommand("copy");
  }, false)

  document.getElementById("goToPage").addEventListener("click", function () {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      let expression = 'RegExp';
      let isUrlFormat = RegExp(expression).test(tabs[0].url);

      if(isUrlFormat){
        chrome.tabs.sendMessage(tabs[0].id, newURLText)
      }else{
        document.getElementById("errorMessage").textContent = '請在當前分頁輸入基本網址'
      }
    })
  }, false)
});
