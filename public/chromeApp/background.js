// Called when the user clicks on the browser action
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.count)
     updateBadge(request)
    sendResponse();
});


function updateBadge(response){
    if(response.count>0){
        chrome.browserAction.setBadgeText({text:'!'})
    }else{
        chrome.browserAction.setBadgeText({text:''})
    }
}

var appUrl = '';

setInterval(function(){//every second
      chrome.tabs.query({active: true, currentWindow:true},
      function(tabs) {
        var activeTab = tabs[0];
        if(appUrl != activeTab.url){
            console.log('new url')
            appUrl = activeTab.url
            chrome.tabs.sendMessage(    activeTab.id, 
                                        {"updateUrl": activeTab.url},
                                        function(response) {
                                            updateBadge(response)      
                                        }
            );
        }
      });
},1000);