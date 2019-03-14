import React from 'react';
import Comment from './Comment.js'
import customStyles from  '../css/yakmosContainer.module.css'

const hiddenMessageText = 'comment currently hidden click show to view this comment'

class CommentReplies extends React.Component {
    state = {   
       
        expanded: false,
        childrenDisplay:'none',
     
    };
    constructor(props) {
        super(props)
    }

    //TODO something fishy about the expanded boolean... maybe set state race condition?
    expandChildren = () => {
        this.setState({expanded: !this.state.expanded})
        if(!this.state.expanded){
            this.setState({childrenDisplay:'grid'})
        }else{
            this.setState({childrenDisplay:'none'})
        }
    }
    
    render() {
        return (
            <div className={customStyles.repliesContainter}>
                <div className={customStyles.commentReplies} id='commentReplies' onClick={()=>{this.expandChildren()}}>
                    {this.state.expanded?'- Hide replies':'+ View '+this.props.replyCount+' replies'} 
                </div>
               
                {this.props.comments.filter((comment)=>{
                    return comment.parentID==this.props.parentID
                }).map((comment, index, array) =>
                      
                       <Comment key={comment._id} 
                                comment={comment} 
                                visibility={this.state.childrenDisplay} 
                                comments={this.props.comments}
                                collectionName={this.props.collectionName}
                       />
                )}
                
            </div>

            
        );
    }
}

export default CommentReplies;