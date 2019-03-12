import React from 'react';
import Comment from './Comment.js'
import customStyles from  '../css/yakmosContainer.module.css'

class CommentSection extends React.Component {
    state = {   
        expanded: false,
        commentDisplay:'none'
    };
    constructor(props) {
        super(props)
    }

    //TODO something fishy about the expanded boolean... maybe set state race condition?
    expandChildren = () => {
        this.setState({expanded: !this.state.expanded})
        if(!this.state.expanded){
            this.setState({commentDisplay:'grid'})
        }else{
            this.setState({commentDisplay:'none'})
        }
    }
    
    render() {
        return (
            <div className={customStyles.commentSection} id='commentSection'>
             
                {this.props.comments.filter(comment => {
                        return comment.parentID == 'root'
                        }).map((comment, index, filteredComments) =>
                            <Comment 
                                key={comment._id} 
                                comment={comment} 
                                visibility={this.props.commentDisplay} 
                                comments={this.props.comments}
                                collectionName={this.props.collectionName}
                            />
                            )
                }       
            </div>

            
        );
    }
}

export default CommentSection;