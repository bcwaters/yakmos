import React from 'react'
import CommentReplies from './CommentReplies.js'
import customStyles from  '../css/yakmosContainer.module.css'
import ReplyEditor from './ReplyEditor.js'
const hiddenMessageText = 'comment currently hidden click show to view this comment'

class Comment extends React.Component {
    state = {   
        hidden: false,
        editor: '',
    };
    constructor(props) {
        super(props)
        let childrenFound =
                    this.props.comments.filter((comment, index, array)=>{
                       
                        return comment.parentID==this.props.comment._id
                    }).length;
        console.log(this.props.comments.filter((comment, index, array)=>{
                       
                        return comment.parentID==this.props.comment._id
                    }))
        console.log(this.props.comment._id + ' has ' + childrenFound + ' children')
         this.state.replyCount = childrenFound;
    }
    
     msToTime =(commentDate) => {
                let currentTime = new Date().getTime();
                let duration = parseInt(currentTime) - parseInt(commentDate) 
                let seconds = Math.floor((duration / 1000) % 60)
                let minutes = Math.floor((duration / (1000 * 60)) % 60)
                let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
                let days = Math.floor((duration / (1000 * 60 * 60 * 24)) % 365)
                let years = Math.floor((duration / (1000 * 60 * 60 * 24 * 365)))

                let result = 'now'
                if(years>0){
                    result = years;
                    result += years==1?' year ago':' years ago'
                }else
                if(days>0){
                    result = days;
                    result += days==1?' day ago':' days ago'
                }else if(hours>0){
                    result = hours
                    result += hours==1?' hour ago':' hours ago'
                }else if(minutes>0){
                    result = minutes 
                    result += minutes==1?' minute ago':' minutes ago'
                }else if(seconds>0){
                    result = seconds 
                    result += seconds==1?' second ago':' seconds ago'
                }
        return result;
     }
     
    addReply = () => {
         this.setState({editor: 
                <ReplyEditor 
                    addComment={() => {console.log('reply added')}}
                    removeEditor={this.removeReplyEditor}
                    addToReplyChain={this.appendReply}
                    parentID = {this.props.comment._id}
                    collectionName={this.props.collectionName}
                />
                       })
     }
    appendReply = (commentObject) => {
        commentObject._id = 'localCommentTempID_' + new Date().getTime();
         this.props.comments.unshift(commentObject)
        this.setState({replyCount : this.state.replyCount+1})
     }
                       
    removeReplyEditor = () => {
         this.setState({editor: ''})
     }
     
    hideComment = () => {
        
         this.setState({hidden: !this.state.hidden})
        console.log(this.state.hidden)
        this.setVisibility();
     }

    setVisibility = () => {
        if(!this.state.hidden){
             return {display:'none'}
        }else{
         return {display:this.props.visibility}
        }
    }

    render() {
        return (
            <div id='comment' className={customStyles.comment} style={{display:this.props.visibility}}>
                 <div id='commentHeader' className={customStyles.commentHeader} >
                                <span className={customStyles.userName} >{this.state.hidden?'hidden':this.props.comment.user} </span>
                                <span className={customStyles.commentAge} >{this.msToTime(this.props.comment.commentAge)}</span>         
                </div>
                
                <div  className={customStyles.commentText}>
                    <span id='commentText' className={customStyles.commentTextSpan} style={{display:this.props.visibility}} >
                        {this.state.hidden?hiddenMessageText:this.props.comment.text}
                    </span>
                </div>
        
                <div className={customStyles.commentFooter} 
                        id='commentFooter'>
                            <div  onClick={()=>{this.addReply()}} id='replyLink' className={customStyles.commentFooterLink}>{this.state.hidden?'':'reply'}</div>

                            <div    id='showLink'
                                    className={customStyles.commentFooterLink}
                                    onClick={() => {this.hideComment()}}
                            >
                                        {this.state.hidden?'show':'hide'}
                            </div>   
                </div>  
                {this.state.editor}
                

                {( !this.state.hidden && this.state.replyCount>0)?<CommentReplies parentID={this.props.comment._id} comments={this.props.comments} replyCount={this.state.replyCount}/>:''}
            </div>
        );
    }
}


export default Comment;