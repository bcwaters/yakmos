import React from 'react';
import Comment from './Comment.js'
import CommentBoxHeader from './CommentBoxHeader.js'
import CommentBoxFooter from './CommentBoxFooter.js'
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
              <CommentBoxHeader originURL={this.props.originURL}/>
            </Row>
            {this.state.comments.map((comment) =>
                <Row noGutters>
                    <Col id='comment' xs={12}>
                    <Comment key={comment.id} text={comment.text} />
                    </Col>
                </Row>
            )}
            <Row noGutters>
             <CommentBoxFooter/>
            </Row>
        </Container>
    );
  }
}

export default CommentBox;