import React from 'react';
import Comment from './Comment.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const styles ={
    commentBox:{ padding:'0px', borderStyle:'solid', width:'60%'},
    commentBoxHeader:{backgroundColor:'lightgrey',borderStyle:'solid', borderWidth:'1px', borderColor:'blue', padding:'0px'} 
}

class CommentBox extends React.Component {
    state = {
        comments : [{id:'loading', text:'retrieving comments'}],
    };
    componentDidMount(){
        fetch('http://localhost:8080/api/callMongo').then(
            res => res.json()
        ).then(
            items => {
                this.setState( {comments : items})
            })
    }

    render() {
    return (
        <Container id='commentBox' style={styles.commentBox}>
            <Row noGutters>
                <Col xs={10} id='commentBoxHeader' style={styles.commentBoxHeader}>
                <span >
                        comments for <a href='.'>{this.props.originURL}</a></span>
                </Col>
                <Col xs={2}>                
                    <Button variant='link'>sort</Button>
                </Col>
            </Row>
            {this.state.comments.map((comment) =>
                <Row noGutters>
                    <Col id='comment' xs={12}>
                    <Comment key={comment.id} text={comment.text} />
                    </Col>
                </Row>
            )}
            <Row noGutters>
                <Col xs={12}>
                <div id='commentBoxFooter'
                    style={{ borderStyle:'solid'}}>
                        Add the option to add comment here
                </div>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default CommentBox;