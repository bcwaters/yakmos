import React from 'react';
import Comment from './Comment.js'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
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
                <InputGroup>
                    <FormControl as="textarea" style={{resize:'none'}} aria-label="With textarea" />
                    <InputGroup.Append>
                        <InputGroup.Text>Leave Comment</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
                </div>
       
            )
    }
}

export default CommentBoxFooter;