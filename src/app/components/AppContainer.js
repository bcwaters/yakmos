import React from 'react';
import Comment from './Comment.js'
import CommentBoxEditor from './CommentBoxEditor.js'
import AppFooter from './AppFooter.js'
import AppHeader from './AppHeader.js'
import CommentSection from './CommentSection.js'
import InfoSection from './InfoSection.js'
import customStyles from  '../css/yakmosContainer.module.css'
import sortCommentOptions from '../utils/sortCommentOptions.js'
import Api from '../utils/ApiCalls.js'
import URLConverter from '../utils/URLConverter.js'

const styles ={
    commentBoxHeader:{backgroundColor:'lightgrey',borderStyle:'solid', borderWidth:'1px', borderColor:'blue', padding:'0px'} 
}

//TODO ADD INFINITE SCROLLING
//container = the element div for AppContainer
//reached end when container.offsetHeight + container.scrollTop  == container.scrollHeight

class AppContainer extends React.Component {
    //note: Collection name corresponds to the Current URL the user is on
    state = {
        sortPref : sortCommentOptions.oldest,
        comments : [],
        expanded : true,
        commentDisplay: 'none',
        collectionName: 'comments'
    };

    componentDidMount(){
        console.log('App was provided with CollectionName: ' + this.props.collectionName)
        
        this.removeYoutubeHotkeys()
        //changing collectionName to urlHostname for testing
        Api.getCommentsCollection(this.props.collectionName,
                (commentsFound)=>{ 
                    commentsFound.sort(sortCommentOptions.oldest) 
                    this.setState( {comments : commentsFound})
               }
        )
     
    }

    updateCollectionName = (updatedName) =>{
        this.setState({collectionName: updatedName},
                     Api.getCommentsCollection(updatedName,
                (commentsFound)=>{ 
                    commentsFound.sort(sortCommentOptions.oldest)  
                    this.setState( {comments : commentsFound})
               }
        )
                     )
    }

    //this logic probably belongs in the content script for the extension
    //so that the hotkeys can be added back to the document
    removeYoutubeHotkeys = () =>{
        
        var x = document.getElementsByTagName('yt-Hotkey-Manager')[0]
        if(x){
             var clone = x.cloneNode(false)
            var parent = x.parentNode
            console.log(parent)
            x.parentNode.replaceChild(clone,x)
            console.log(parent)
            clone.parentNode.removeChild(clone)
            console.log('removed hotkeys')
            console.log(x);
            console.log(parent)
            
        }
    }

    //make the comments visible
    expandComments = () => {
        this.setState({expanded: !this.state.expanded})
        if(this.state.expanded){
            this.setState({commentDisplay:'grid'})
        }else{
            this.setState({commentDisplay:'none'})
        }
    }
    
    addComment = (commentObject) => {
         this.setState( (prevState,props) => (
             {comments : [commentObject, ...prevState.comments]}
         ));
    }
    
    sortComments = (sortFunction) => {
        let sorted = this.state.comments.sort(sortFunction)
        this.setState({comments: sorted})
    }

    render() {
    return (
        <div id='AppContainer' className={customStyles.AppContainer}>
                <AppHeader 
                    originURL={this.props.originURL}
                    expandFunction = {this.expandComments}
                    commentCount= {this.state.comments.length}
                    sortComments = {this.sortComments}
                    updateCollectionName = {this.updateCollectionName}
                    />
                <div id='topRowContainer' className={customStyles.topRowContainer}>
                <CommentBoxEditor 
                    removeHotKeys={()=>{this.removeYoutubeHotkeys()}}
                    addComment={this.addComment}
                    collectionName={this.props.collectionName}
                    />
                        
                <InfoSection 
                    collectionName={this.state.collectionName}
                    commentCount= {this.state.comments.length}
                    userName='anon'
                    currentUrl = {this.props.collectionName}
                />
                </div>
                <CommentSection 
                    comments={this.state.comments} 
                    commentDisplay={this.state.commentDisplay} 
                    collectionName={this.props.collectionName}
                    />
                 
                <AppFooter 
                    visibility={this.state.commentDisplay}  
                    />
        </div>
    );
  }
}

export default AppContainer;