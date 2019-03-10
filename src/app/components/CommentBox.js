import React from 'react';
import Comment from './Comment.js'
import CommentBoxEditor from './CommentBoxHeader.js'
import CommentBoxFooter from './CommentBoxFooter.js'
import YakmosWidget from './YakmosWidget.js'
import customStyles from  '../css/yakmosContainer.module.css'

const styles ={
    commentBoxHeader:{backgroundColor:'lightgrey',borderStyle:'solid', borderWidth:'1px', borderColor:'blue', padding:'0px'} 
}

//TODO ADD INFINITE SCROLLING
//container = the element div for commentBoxContainer
//reached end when container.offsetHeight + container.scrollTop  == container.scrollHeight

class CommentBox extends React.Component {
    state = {
        comments : [],
        expanded : true,
        commentDisplay: 'none'
    };
    componentDidMount(){
        fetch('http://localhost:8080/api/callMongo').then(
            res => res.json()
        ).then(
            items => {
                this.setState( {comments : items})
            })
    }

    //make the comments visible
    expandComments = () => {
        this.setState({expanded: !this.state.expanded})
        if(this.state.expanded){
            this.setState({commentDisplay:'inherit'})
        }else{
            this.setState({commentDisplay:'none'})
        }
    }

    render() {
    return (
        <div id='commentBoxContainer' className={customStyles.commentBoxContainer}>
                <YakmosWidget 
                    originURL={this.props.originURL}
                    expandFunction = {this.expandComments}
                    commentCount= {this.state.comments.length}
                    />
              <CommentBoxEditor 
                    visibility={this.state.commentDisplay}
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