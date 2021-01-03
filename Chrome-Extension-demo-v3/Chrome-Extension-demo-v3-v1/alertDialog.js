function alertDialog() {
  let isCheckEl = document.querySelector("#alertBlock");

  let expression = "url";
  let isUrlFormat = RegExp(expression).test(window.location.href);

  let alertBlock = document.createElement("div");
  let closeButton = document.createElement("div");
  let text = isUrlFormat ? "複製成功" : "網址錯誤";

  if (isCheckEl) {
    return false;
  } else {
    alertBlock.id = "alertBlock";
    alertBlock.classList.add('active')
    alertBlock.textContent = text;

    closeButton.id = "closeButton";
    closeButton.textContent = "確定";
    closeButton.onclick = function () {
      alertBlock.classList.toggle("active");
    };

    document.body.appendChild(alertBlock);
    alertBlock.appendChild(closeButton);
  }
}

alertDialog();
