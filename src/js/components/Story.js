import React from 'react';
import {connect} from 'react-redux';

class Story extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <>        
                {this.props.sentenceList.map((sentence)=>{
                    return <span>{sentence}. </span>
                })}
            </>
        );
    }
}


let mapStateToProps = (state) => {
    return{
        sentenceList: state.sentenceList
    }
}


export default connect(mapStateToProps, null)(Story)
