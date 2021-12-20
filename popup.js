let launchReplay = document.getElementById("launchReplay");
let form = document.querySelector("form");

launchReplay.addEventListener("click", launchCallback);
form.addEventListener("submit", launchCallback);

async function launchCallback() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: recordThisTab,
  });
}

function recordThisTab() {
  window.location.href = `replay:record?url=${window.location.href}`;
}