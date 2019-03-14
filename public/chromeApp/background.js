// Called when the user clicks on the browser action
chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.query({active: true, currentWindow:true},
      function(tabs) {
         var activeTab = tabs[0];
         chrome.tabs.sendMessage(activeTab.id, 
             {"message": "clicked_browser_action"}
         );
   });
});

var appUrl = '';
setInterval(function(){//every second
      chrome.tabs.query({active: true, currentWindow:true},
      function(tabs) {
        var activeTab = tabs[0];
        if(appUrl != activeTab.url){
            console.log('new url')
            appUrl = activeTab.url
            chrome.tabs.sendMessage(activeTab.id, 
                {"updateUrl": activeTab.url}
                );
            }
        });
},1000);