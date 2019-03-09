import React from 'react';
import Comment from './Comment.js'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const styles ={
    commentBoxHeader:{
        backgroundColor:'lightgrey',
        borderStyle:'solid', 
        minHeight:'100px',
        },
    yakmosWidget:{
        background:'darkorange'
    }
}



class CommentBoxHeader extends React.Component {
    state = {
            expandedVisibility:'hidden',
            expanded: false,
            expandText: 'view comments'
    };
    componentDidMount(){     
    }

    expandComments = () => {
         
        if(this.state.expanded){
                this.setState({
                        expanded:false, 
                        expandText: 'view comments',
                        expandedVisibility: 'hidden'
                    })
        }else{
               this.setState({
                    expanded:true, 
                    expandText: 'hide comments',
                    expandedVisibility: 'visible'
               })
        }
        this.props.expandFunction()
    }

    render() {
        return(
            <React.Fragment>
            <Col xs={10} id='commentBoxHeader' style={{
                ...styles.commentBoxHeader, 
                visibility: this.state.expandedVisibility}}
            >
            <h1>YAKMOS COMMENTS VIEWER</h1>
            </Col>
            <Col xs={2} id='yakmosWidget' style={styles.yakmosWidget}>   
                    <div>Comment Count: {this.props.commentCount}</div>
                    <Button     id='expandCommentsButton' 
                                onClick={this.expandComments} 
                                variant='outline-primary'>
                        {this.state.expandText}
                    </Button>
                    <Button 
                        id='sortCommentsButton'
                        style={{visibility:this.state.expandedVisibility}}
                        variant='link'>
                        sort
                    </Button>
            </Col>
            </React.Fragment>
            )
    }
}

export default CommentBoxHeader;