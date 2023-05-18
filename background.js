chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    changeInfo.status === 'complete' &&
    tab.status === 'complete' &&
    tab.url.includes('https://vtop.vit.ac.in/vtop/login')
  ) {
    chrome.tabs.executeScript(tabId, { file: 'content.js' }, function () {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      }
    });
  }
});

chrome.action.onClicked.addListener(function(tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  }, function() {
    chrome.tabs.reload(tab.id);
  });
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.action.onClicked.addListener(function() {
    chrome.tabs.create({ url: "https://vtop.vit.ac.in/" });
  });
});


