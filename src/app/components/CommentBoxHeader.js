import React from 'react';
import Comment from './Comment.js'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const styles ={
    commentBoxHeader:{backgroundColor:'lightgrey',borderStyle:'solid' }
}



class CommentBoxHeader extends React.Component {
    state = {
      
    };
    componentDidMount(){     
    }

    render() {
        return(
            <React.Fragment>
            <Col xs={10} id='commentBoxHeader' style={styles.commentBoxHeader}>
                <span >comments for <a href='.'>{this.props.originURL}</a></span>
            </Col>
            <Col xs={2}>                
                    <Button variant='link'>sort</Button>
            </Col>
            </React.Fragment>
            )
    }
}

export default CommentBoxHeader;