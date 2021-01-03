chrome.runtime.onMessage.addListener(function (request) {
    window.location.href = request
})