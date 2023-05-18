document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("refreshButton").addEventListener("click", function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.reload(tabs[0].id);
      });
    });
  });
  