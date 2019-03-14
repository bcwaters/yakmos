/*global chrome*/
/* src/chromeContent.js */
import React from "react";
import ReactDOM from "react-dom";
import App from '../../src/app/App.js'

chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
       console.log('message heard by content script')
      if( request.message === "clicked_browser_action") {
        toggle();
      }
       if( request.updateUrl) {
           console.log('new url' + request.updateUrl)
        ReactDOM.render(<App collectionName={request.updateUrl}/>,
                        document.getElementById("reactApp"));
      }
   }
)

    var comments = document.createElement('div');
    comments.id = 'reactApp'
    comments.innerText = 'content injected'
    comments.style.display = "block";
    comments.style.zIndex = '9001'
    

document.body.appendChild(comments);

//Add the app with the tab url as the collectionName                    

         
    if(document.getElementById("reactApp")){
    
        ReactDOM.render(<App collectionName={document.URL}/>,
                        document.getElementById("reactApp"));
    }

    
    

function toggle(){
 if(comments.style.display === "none"){
     comments.style.display = "block";
   }else{
     comments.style.display = "none";
   }
    
}



  
    


