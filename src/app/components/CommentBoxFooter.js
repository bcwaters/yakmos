import React from 'react';
import Comment from './Comment.js'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const styles ={
    commentBoxFooter:{ borderStyle:'solid', backgroundColor:'lightcyan'}
}

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
            <Col xs={12}>
                <div id='commentBoxFooter' style={styles.commentBoxFooter}>
                <InputGroup>
                    <FormControl as="textarea" style={{resize:'none'}} aria-label="With textarea" />
                    <InputGroup.Append>
                        <InputGroup.Text>Leave Comment</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
                </div>
            </Col>
            )
    }
}

export default CommentBoxFooter;