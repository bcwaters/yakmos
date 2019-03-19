//Wire up event event handlers
document.addEventListener("DOMContentLoaded", function(event) {
    var resultsButton = document.getElementById("toggleVisible");
    resultsButton.onclick = toggleVisible;
});

function toggleVisible(){ 
     chrome.tabs.query({active: true, currentWindow:true},
      function(tabs) {
         var activeTab = tabs[0];
         chrome.tabs.sendMessage(activeTab.id, 
             {"message": "clicked_browser_action"}
         );
   });
}