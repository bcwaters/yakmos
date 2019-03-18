import React from 'react';
import customStyles from  '../css/yakmosContainer.module.css'


//TODO Replace text area with a draft editor from draftjs
//This will be it's own component since comments can be made from
//different areas of the app

class InfoSection extends React.Component {
    state = {
      url : document.URL,
    };
   
    componentDidMount(){     
    }

    render() {   
        return(
                <div className={customStyles.infoSection} id='infoSection' >
                    INFO SECTION <br/>
                    userName: {this.props.userName} [Login link] <br/>
                    commentCount: {this.props.commentCount}  <br/>
                    currentDBCollection: {new URL(this.state.url).hostname}  <br/>
                    currentUrl Hostname: {new URL(this.state.url).hostname}  <br/>
                    currentUrl Path: {new URL(this.state.url).pathname}  <br/>
                    search params: {new URL(this.state.url).search}
                </div>
            )
    }
}

export default InfoSection;