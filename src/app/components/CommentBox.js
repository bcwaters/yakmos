import React from 'react';
import Comment from './Comment.js'
import CommentBoxHeader from './CommentBoxHeader.js'
import CommentBoxFooter from './CommentBoxFooter.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const styles ={
    commentBox:{ padding:'0px', width:'90%', position:'fixed', bottom:'0', marginLeft:'5%', zIndex:'9001'},
    commentBoxHeader:{backgroundColor:'lightgrey',borderStyle:'solid', borderWidth:'1px', borderColor:'blue', padding:'0px'} 
}

class CommentBox extends React.Component {
    state = {
        comments : [],
        expanded : true,
        commentDisplay: 'none'
    };
    componentDidMount(){
        fetch('http://localhost:8080/api/callMongo').then(
            res => res.json()
        ).then(
            items => {
                this.setState( {comments : items})
            })
    }

    //make the comments visible
    expandComments = () => {
        this.setState({expanded: !this.state.expanded})
        if(this.state.expanded){
            this.setState({commentDisplay:'inherit'})
        }else{
            this.setState({commentDisplay:'none'})
        }
    }

    render() {
    return (
        <Container id='commentBox' style={styles.commentBox}>
            <Row noGutters>
              <CommentBoxHeader 
                    originURL={this.props.originURL}
                    expandFunction = {this.expandComments}
                    commentCount= {this.state.comments.length}
                    
                    />
            </Row>
            <div id='commentContainer' 
                style={{display:this.state.commentDisplay}}>
            {this.state.comments.map((comment) =>
                <Row noGutters>
                    <Col id='comment' xs={12}>
                    <Comment key={comment.id} text={comment.text} />
                    </Col>
                </Row>
            )}
            </div>
            <Row noGutters>
             <CommentBoxFooter visibility={this.state.commentDisplay}/>
            </Row>
        </Container>
    );
  }
}

export default CommentBox;