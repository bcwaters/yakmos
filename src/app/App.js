import React, { Component } from "react";
import CommentBox from './components/CommentBox.js'

export default class App extends Component {
    constructor(props) {
        super(props)
        }
    
  render() {
    return (
      <React.Fragment>
        <CommentBox originURL='viewcommentsforthisurl.com'>
        </CommentBox>
      </React.Fragment>
    );
  }
}


