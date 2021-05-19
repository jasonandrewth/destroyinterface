function destroy() {
  chrome.tabs.executeScript({
    file: "script.js",
  });
}

document.getElementById("clickme").addEventListener("click", destroy);
