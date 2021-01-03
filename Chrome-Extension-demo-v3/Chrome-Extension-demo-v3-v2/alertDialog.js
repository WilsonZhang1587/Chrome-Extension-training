function alertDialog() {
  let isCheckEl = document.querySelector("#alertBlock");

  let alertBlock = document.createElement("div");
  let closeButton = document.createElement("div");

  let reciprocalSeconds = 3;
  let reciprocalSecondsFunction = setInterval(function () {
    if (reciprocalSeconds === 0) {
      closeAlertBlock();
    } else {
      reciprocalSeconds -= 1;
      updateAlertBlockInnerHTML();
    }
  }, 1000);

  function elementDefaultStatus() {
    alertBlock.id = "alertBlock";
    alertBlock.classList.add("active");

    closeButton.id = "closeButton";
    closeButton.textContent = "確定";
    closeButton.onclick = function () {
      closeAlertBlock();
    };

    document.body.appendChild(alertBlock);
    updateAlertBlockInnerHTML();
  }

  function isUrlFormat() {
    let expression = "url";
    let isUrlFormat = RegExp(expression).test(window.location.href);

    return isUrlFormat;
  }

  function updateAlertBlockInnerHTML() {
    const alertBlockCopyStatusText = isUrlFormat() ? "複製成功" : "網址錯誤"

    alertBlock.innerHTML = 
      `<div>
        ${alertBlockCopyStatusText}
        <span>${reciprocalSeconds}秒後自動關閉</span>
      </div>`;
    alertBlock.appendChild(closeButton);
  }

  function closeAlertBlock() {
    clearInterval(reciprocalSecondsFunction);
    document.body.removeChild(alertBlock);
  }

  function loadingAlertDialog() {
    if (isCheckEl) {
      return false
    } else {
      elementDefaultStatus();
    }
  }

  return loadingAlertDialog()
}

alertDialog();
