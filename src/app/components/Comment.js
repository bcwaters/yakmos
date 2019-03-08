import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
    const { value } = this.state;
    return (
            <Container style={styles.commentContainer}>
                 <Row id='commentHeader' style={styles.commentHeader}>
                           <Col style={styles.commentHeader}>
                                <span >user name or id</span>
                            </Col>
                            <Col style={styles.commentHeader}>
                                <span >age of comment</span>
                            </Col>
                </Row>
                <Row style={styles.commentText}>
                    <span id='commentText' >
                        {this.props.text}
                    </span>
                </Row>
        
                <Row id='commentFooter' style={styles.commentFooter}>
                    <Col style={styles.reply}>
                            <span >hide link</span>
                    </Col>
                    <Col style={styles.reply}>
                            <span >report link</span>
                    </Col>
        
                   <Col style={styles.reply}>
                            <span >reply link</span>
                    </Col>
                </Row>
            </Container>
    );
  }
}


export default Comment;