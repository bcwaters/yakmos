import React from 'react';
import customStyles from  '../css/yakmosContainer.module.css'

const styles={
    commentContainer:{backgroundColor:'grey', marginBottom:'5px', borderStyle:'solid'},
    commentText:{borderStyle:'solid', borderWidth:'1px', borderColor:'yellow'},
    commentFooter:{borderStyle:'solid', borderWidth:'1px', borderColor:'green'},
    commentHeader:{borderStyle:'solid', borderWidth:'1px', borderColor:'purple'},
    user:{borderStyle:'solid', borderWidth:'1px', borderColor:'red'},
    reply:{borderStyle:'solid', borderWidth:'1px', borderColor:'blue'}
}

class Comment extends React.Component {
    state = {   
    };
    constructor(props) {
        super(props)
        }

    render() {
        return (
            <div id='comment' className={customStyles.comment} style={{display:this.props.visibility}}>
                 <div id='commentHeader' className={customStyles.commentHeader} >
                                <span className={customStyles.userName} >{this.props.comment.user} </span>
                                <span className={customStyles.commentAge} >{this.props.comment.commentAge} ago</span>         
                </div>
        
                <div  className={customStyles.commentText}>
                    <span id='commentText' >
                        {this.props.comment.text}
                    </span>
                </div>
        
                <div className={customStyles.commentFooter} 
                        id='commentFooter' style={styles.commentFooter}>
                            <span  className={customStyles.commentFooterLink}>reply</span>
                            <span  className={customStyles.commentFooterLink}>hide</span>     
                            <span  className={customStyles.commentFooterLink}>report</span>
                </div>
            </div>
        );
    }
}


export default Comment;