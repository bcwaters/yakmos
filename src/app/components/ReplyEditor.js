import React from 'react';
import customStyles from  '../css/yakmosContainer.module.css'
import {Editor, EditorState, ContentState} from 'draft-js';
import Api from '../utils/ApiCalls.js'
import 'draft-js/dist/Draft.css'


class ReplyEditor extends React.Component {
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
        Api.insertComment(this.props.collectionName, commentObject, ()=>{
                this.props.addToReplyChain(commentObject)
                this.props.removeEditor()
         })
    }
    
    //TODO CHANGE THIS
    makeComment = () => {
        let currentTime = new Date().getTime();
        return {
                    user: 'anonUser',
                    text: this.state.editorState.getCurrentContent().getPlainText(),
                    commentAge: currentTime,
                    parentID: this.props.parentID
                }
    }

    render() {
        return(
            <React.Fragment>
            <div    id='ReplyEditor' 
                    className={customStyles.commentBoxHeader} 
                    
            >
            <div>enter your reply below</div>
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
                        onClick={this.props.removeEditor}
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

export default ReplyEditor;