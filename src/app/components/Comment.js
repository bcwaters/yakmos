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
                                <span className={customStyles.userName} >user name or id </span>
                                <span className={customStyles.commentAge} >age of comment</span>         
                </div>
        
                <div  className={customStyles.commentText}>
                    <span id='commentText' >
                        {this.props.text}
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