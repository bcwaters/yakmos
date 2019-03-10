import React from 'react';
import Comment from './Comment.js'
import customStyles from  '../css/yakmosContainer.module.css'

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
            <div id='commentBoxHeader' className={customStyles.commentBoxHeader} style={{
                visibility: this.state.expandedVisibility}}
            >
                <h1>YAKMOS COMMENTS VIEWER</h1>
            </div>
            <div  id='yakmosWidget' className={customStyles.widget}>   
               
                    <button     className={customStyles.expandButton}
                                id='expandCommentsButton' 
                                onClick={this.expandComments} 
                                variant='outline-primary'>
                        {this.state.expandText}<span className={customStyles.commentCount}>{this.props.commentCount}</span>
                    </button>
                    <button 
                        className={customStyles.sortButton}
                        id='sortCommentsButton'
                        style={{visibility:this.state.expandedVisibility}}
                        variant='link'>
                        sort comments
                    </button>
            </div>
            </React.Fragment>
            )
    }
}

export default CommentBoxHeader;