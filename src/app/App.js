import React, { Component } from "react";
import AppContainer from './components/AppContainer.js'
import URLConverter from './utils/URLConverter.js'

export default class App extends Component {
    constructor(props) {
        super(props)
        }
    
  render() {
    return (
      <React.Fragment>
        <AppContainer    sendCount={this.props.sendCount}
                        collectionName={URLConverter.convertURL(this.props.collectionName)}>
        </AppContainer>
      </React.Fragment>
    );
  }
}


