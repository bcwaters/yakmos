import React, { Component } from "react";
import AppContainer from './components/AppContainer.js'

export default class App extends Component {
    constructor(props) {
        super(props)
        }
    
  render() {
    return (
      <React.Fragment>
        <AppContainer originURL='viewcommentsforthisurl.com'>
        </AppContainer>
      </React.Fragment>
    );
  }
}


