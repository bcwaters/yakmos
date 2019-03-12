import React from 'react';
import customStyles from  '../css/yakmosContainer.module.css'
import sortCommentOptions from '../utils/sortCommentOptions.js'

class AppHeader extends React.Component {
    state = {
            sortExpandedVisibility: 'none',
            countExpandedVisibility: 'inline-block',
            titleExpandedVisibility: 'flex',
            expanded: false,
            expandText: 'view'
    };
    componentDidMount(){     
    }

    expandComments = () => {
         
        if(this.state.expanded){
                this.setState({
                        expanded:false, 
                        expandText: 'view',
                        sortExpandedVisibility: 'none',
                        countExpandedVisibility: 'inline-block',
                        titleExpandedVisibility: 'flex'
                    
                    })
        }else{
               this.setState({
                    expanded:true, 
                    expandText: 'hide',
                    sortExpandedVisibility: 'inherit',
                    countExpandedVisibility: 'none',
                    titleExpandedVisibility: 'none'
               })
        }
        this.props.expandFunction()
    }

    render() {
        return(
           <div     id='AppHeader' className={customStyles.appHeader}
                    >   
                    <div className={customStyles.widgetTitle}
                    style={{display:this.state.titleExpandedVisibility}}
                    >
                            <span>Universal Comment Box</span>
                    </div>
                    <button     className={customStyles.expandButton}
                                id='expandCommentsButton' 
                                onClick={this.expandComments} 
                               >
                        {this.state.expandText}
                        <span   className={customStyles.commentCount} id='commentCountBadge'
                                style={{display:this.state.countExpandedVisibility}}>
                            {this.props.commentCount}
                        </span>
                    </button>
                    <button 
                        className={customStyles.sortButton}
                        id='sortCommentsButton'
                        style={{display:this.state.sortExpandedVisibility}}
                        onClick={() => this.props.sortComments(sortCommentOptions.newest)}
                        >
                        sort by
                    </button>

                    <button 
                        className={customStyles.filterCommentsButton}
                        id='filterCommentsButton'
                        style={{display:this.state.sortExpandedVisibility}}
                     
                        >
                        filter
                    </button>
                   
            </div>
            )
    }
}

export default AppHeader;