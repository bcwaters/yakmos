import React from 'react';
import Comment from './Comment.js'
import CommentBoxEditor from './CommentBoxHeader.js'
import CommentBoxFooter from './CommentBoxFooter.js'
import YakmosWidget from './YakmosWidget.js'
import customStyles from  '../css/yakmosContainer.module.css'
import sortCommentOptions from '../utils/sortCommentOptions.js'

const styles ={
    commentBoxHeader:{backgroundColor:'lightgrey',borderStyle:'solid', borderWidth:'1px', borderColor:'blue', padding:'0px'} 
}

const apiUrl = 'http://yakmos.com/api/getComments'

//TODO ADD INFINITE SCROLLING
//container = the element div for commentBoxContainer
//reached end when container.offsetHeight + container.scrollTop  == container.scrollHeight

class CommentBox extends React.Component {
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
        <div id='commentBoxContainer' className={customStyles.commentBoxContainer}>
                <YakmosWidget 
                    originURL={this.props.originURL}
                    expandFunction = {this.expandComments}
                    commentCount= {this.state.comments.length}
                    sortComments = {this.sortComments}
                    />
                <CommentBoxEditor 
                    visibility={this.state.commentDisplay}
                    addComment={this.addComment}
                    />
        
                    {this.state.comments.map((comment) =>
                    <Comment key={comment.id} comment={comment} visibility={this.state.commentDisplay} />
                    )}
             
                <CommentBoxFooter visibility={this.state.commentDisplay}/>
        </div>
    );
  }
}

export default CommentBox;
