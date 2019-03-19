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
            console.log('new url ' + request.updateUrl)
            var oldApp = document.getElementById('reactApp')
            document.body.removeChild(oldApp)
            //document.body.appendChild(comments);
            document.body.appendChild(makeRootElement('reactApp'))           
            ReactDOM.render(<App    collectionName={request.updateUrl}
                                    sendCount={sendResponse}
                            />,
                        document.getElementById("reactApp"));
        
      }
        return true; //makes this async for sendresponse
    }
)

function changeBadgeCount(response) {                                      
    chrome.extension.sendMessage(response)
                                        
}



document.body.appendChild(makeRootElement('reactApp'));
//Add the app with the tab url as the collectionName                    
    if(document.getElementById("reactApp")){
        ReactDOM.render(<App    collectionName={document.URL}
                                sendCount={changeBadgeCount}
                        />,
                        document.getElementById("reactApp"));
    }

function toggle(){
    let comments = document.getElementById('reactApp');
 if(comments.style.display === "none"){
     comments.style.display = "block";
   }else{
     comments.style.display = "none";
   }
    
}

function makeRootElement(rootName){
    
    let comments = document.createElement('div');
    comments.id = rootName
    comments.innerText = 'content injected'
    comments.style.display = "block";
    comments.style.zIndex = '9001'
    
    return comments;
    
}



  
    


