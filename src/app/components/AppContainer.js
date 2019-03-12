import React from 'react';
import Comment from './Comment.js'
import CommentBoxEditor from './CommentBoxEditor.js'
import AppFooter from './AppFooter.js'
import AppHeader from './AppHeader.js'
import CommentSection from './CommentSection.js'
import customStyles from  '../css/yakmosContainer.module.css'
import sortCommentOptions from '../utils/sortCommentOptions.js'

const styles ={
    commentBoxHeader:{backgroundColor:'lightgrey',borderStyle:'solid', borderWidth:'1px', borderColor:'blue', padding:'0px'} 
}

const apiUrl = 'https://cmq6eg51s7.execute-api.us-west-1.amazonaws.com/beta'

//TODO ADD INFINITE SCROLLING
//container = the element div for AppContainer
//reached end when container.offsetHeight + container.scrollTop  == container.scrollHeight

class AppContainer extends React.Component {
    state = {
        sortPref : sortCommentOptions.oldest,
        comments : [],
        expanded : true,
        commentDisplay: 'none'
    };
    componentDidMount(){
        fetch(apiUrl).then(
            res => res.json()
        ).then(
            items => {
                items = items.sort(sortCommentOptions.oldest)
                this.setState( {comments : items})
            })
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
                    />
                <CommentBoxEditor 
                    addComment={this.addComment}
                    />
                <CommentSection 
                    comments={this.state.comments} 
                    commentDisplay={this.state.commentDisplay} 
                    />
                 
                <AppFooter 
                    visibility={this.state.commentDisplay}  
                    />
        </div>
    );
  }
}

export default AppContainer;
