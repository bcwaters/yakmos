import React from 'react';
import Comment from './Comment.js'
import customStyles from  '../css/yakmosContainer.module.css'


//TODO Replace text area with a draft editor from draftjs
//This will be it's own component since comments can be made from
//different areas of the app

class CommentBoxFooter extends React.Component {
    state = {
      
    };
   
    componentDidMount(){     
    }

    render() {   
        return(
        
                <div className={customStyles.commentBoxFooter} id='commentBoxFooter' 
                    style={{display:this.props.visibility}}
                >
            
                </div>
       
            )
    }
}

export default CommentBoxFooter;