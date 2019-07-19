import React from 'react';
import {Button} from 'react-bootstrap';
import {addSentence} from '../actions/actions';
import {connect} from 'react-redux';




class WriteSentence extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sentence: ''
        };
        
    }

    handleSentenceChange = (e) => {
        //updates sentence in local state with the value of input from form
        this.setState({
            sentence: e.target.value
        })
    }

    handleSubmit = (e) =>{
        //calls the onAddSentence dispatcher in mapDispatchToProps
        //it will add this.state.sentence into the dispatch as 'sentence'
        e.preventDefault(); //prevents the default action of the button so that clicking it does what I want instead
        this.props.onAddSentence(this.state.sentence);
        this.setState({ //this updates the local state after submission, changing back to empty ('') in order to clear the input box
            sentence: ''
        })

    }


    render(){
        const {sentence} = this.state;
        return(
            
            <form onSubmit={this.handleSubmit}>
                {/* <p>{this.state.sentence}</p> */}
                {/* the above would display content of current sentence as it's typed. It is displaying local state, which gets updated with each keystroke */}
                {/* <p>{this.props.sentenceList[0]</p> */}
                {/* the above would display the content of the first sentence after it is submitted. It is displaying the global state, which gets updated with each submit. sentenceList is an array, so it displays the first item of the array, i.e. sentenceList[0] */}
                <div className="form-group">
                    <label htmlFor="Sentence">Sentence</label>
                    <input 
                    type="text"
                    className="form-control"
                    id="sentence"
                    value={sentence}
                    onChange={this.handleSentenceChange} // calls handleSentenceChange above, which updates local state with the value of the input
                    />
                </div>
                <Button type="submit" className="btn btn-success btn-lg">
                    Add Your Sentence
                </Button>
            </form>
        );
    }
}


let mapStateToProps = (state) => {
    //accesses global state and passes it into props that can be accessed in the component. sentenceList is an array that can be accessed in the component above
    return{
        sentenceList: state.sentenceList
    }
}

let mapDispatchToProps = (dispatch) =>{
    //dispatches an action to the store
    //onAddSentence is called in the handleSubmit function above
    //sentence is this.state.sentence from handleSubmit function above
    //sentence is now stored in the store
    return {
        onAddSentence: (sentence) => dispatch(addSentence(sentence))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(WriteSentence)