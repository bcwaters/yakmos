/*global chrome*/
/* src/chromeContent.js */
import React from "react";
import ReactDOM from "react-dom";
import App from './app/App.js'

chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
       console.log('message heard by content script')
      if( request.message === "clicked_browser_action") {
        toggle();
      }
   }
)

    var comments = document.createElement('div');
    comments.id = 'reactApp'
    comments.innerText = 'content injected'
    comments.style.display = "none";
    comments.style.zIndex = '9001'
    

document.body.appendChild(comments);


if(document.getElementById("reactApp")){
    ReactDOM.render(<App />, document.getElementById("reactApp"));
}


function toggle(){
 if(comments.style.display === "none"){
     comments.style.display = "block";
   }else{
     comments.style.display = "none";
   }
    
}



  
    


