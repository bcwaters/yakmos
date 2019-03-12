import React from 'react';
import customStyles from  '../css/yakmosContainer.module.css'
import {Editor, EditorState, ContentState} from 'draft-js';
import 'draft-js/dist/Draft.css'
const apiUrl = 'http://localhost:8083/api/addComment'

class CommentBoxEditor extends React.Component {
    state = {
    };
    constructor(props){
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
    }
    componentDidMount(){     
    }

    clearEditor = () => {
        const editorState = EditorState.push(this.state.editorState, ContentState.createFromText(''));
        this.setState({ editorState });
    }
    
    insertComment = (commentObject) => {
        //send comment to rest endpoint
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(commentObject)
            }).then(this.clearEditor(), this.props.addComment(commentObject))
    }
    
    makeComment = () => {
        let currentTime = new Date().getTime();
        return {
                    user: 'anonUser',
                    text: this.state.editorState.getCurrentContent().getPlainText(),
                    commentAge: currentTime,
                    children: [],
                    parentID: 'root'
                }
    }

    render() {
        return(
            <React.Fragment>
            <div    id='commentBoxEditor' 
                    className={customStyles.commentBoxHeader} 
                    
            >
            <div id='draftEditor' className={customStyles.draftEditor}>
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
                        onClick={this.clearEditor}
                        >
                        cancel
            </button>
            
            <button 
                        className={customStyles.leaveCommentButton}
                        id='leaveCommentButton'
                        onClick={( ) => {this.insertComment(this.makeComment())}}
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