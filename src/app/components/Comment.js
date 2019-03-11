import React from 'react'
import CommentReplies from './CommentReplies.js'
import customStyles from  '../css/yakmosContainer.module.css'

const styles={
    commentContainer:{backgroundColor:'grey', marginBottom:'5px', borderStyle:'solid'},
    commentText:{borderStyle:'solid', borderWidth:'1px', borderColor:'yellow'},
    commentFooter:{borderStyle:'solid', borderWidth:'1px', borderColor:'green'},
    commentHeader:{borderStyle:'solid', borderWidth:'1px', borderColor:'purple'},
    user:{borderStyle:'solid', borderWidth:'1px', borderColor:'red'},
    reply:{borderStyle:'solid', borderWidth:'1px', borderColor:'blue'}
}

const hiddenMessageText = 'comment currently hidden click show to view this comment'

class Comment extends React.Component {
    state = {   
        hidden: false
    };
    constructor(props) {
        super(props)
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
                            <div  className={customStyles.commentFooterLink}>{this.state.hidden?'':'reply'}</div>

                            <div    
                                    className={customStyles.commentFooterLink}
                                    onClick={() => {this.hideComment()}}
                            >
                                        {this.state.hidden?'show':'hide'}
                            </div>   
                    
                           
                </div>  
                {this.props.comment.children.length>0?<CommentReplies children={this.props.comment.children}/>:''}
            </div>
        );
    }
}


export default Comment;