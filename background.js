chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {

      if (changeInfo.url) {
        
        chrome.tabs.sendMessage( tabId, {
          message: 'URLCHANGED!',
          url: changeInfo.url
        })
      }
    }
);
  