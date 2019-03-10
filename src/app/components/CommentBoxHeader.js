import React from 'react';
import customStyles from  '../css/yakmosContainer.module.css'
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css'

class CommentBoxEditor extends React.Component {
    state = {
            expandedVisibility:'hidden',
            expanded: false,
            expandText: 'view'
    };
    constructor(props){
        super(props);
         this.state = {editorState: EditorState.createEmpty()};
            this.onChange = (editorState) => this.setState({editorState});
    }
    componentDidMount(){     
    }

    render() {
        return(
            <React.Fragment>
            <div    id='commentBoxHeader' 
                    className={customStyles.commentBoxHeader} 
                    style={{display:this.props.visibility}}
            >
            <div className={customStyles.draftEditor}>
                   <Editor 
                        
                        editorState={this.state.editorState} 
                        onChange={this.onChange}
                        placeholder="Leave a comment"
                    />
            </div>
            <div className={customStyles.editorFooter}>
              <button 
                        className={customStyles.cancelCommentButton}
                        id='cancelCommentButton'
                        >
                        cancel
            </button>
            
            <button 
                        className={customStyles.leaveCommentButton}
                        id='leaveCommentButton'
                        >
                        comment
            </button>
           
            </div>
            
            </div>
            </React.Fragment>
            )
    }
}

export default CommentBoxEditor;