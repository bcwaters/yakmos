import React from "react";
import ReactDOM from "react-dom";
import App from './app/App.js'

ReactDOM.render(<App collectionName={document.URL} />, document.getElementById("app"));
console.log('rended to APP')
