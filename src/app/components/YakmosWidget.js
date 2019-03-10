import React from 'react';
import customStyles from  '../css/yakmosContainer.module.css'

class YakmosWidget extends React.Component {
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
           <div     id='YakmosWidget' className={customStyles.yakmosWidget}
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
                        <span   className={customStyles.commentCount} 
                                style={{display:this.state.countExpandedVisibility}}>
                            {this.props.commentCount}
                        </span>
                    </button>
                    <button 
                        className={customStyles.sortButton}
                        id='sortCommentsButton'
                        style={{display:this.state.sortExpandedVisibility}}
                        >
                        sort
                    </button>
                   
            </div>
            )
    }
}

export default YakmosWidget;