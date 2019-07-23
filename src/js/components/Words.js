import React from 'react';
import commonWords from '../../data/commonWords';
import {connect} from 'react-redux';
import {addToSavedWords} from '../actions/actions';
import {Badge, Button, Popover, OverlayTrigger} from 'react-bootstrap';



class Words extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstWord: [],
            words: [],
            clicked: false
        }
    }

    // saveToLocalStorage = () => {
    //     localStorage.setItem("savedWords", this.props.savedWords)
    // }

    saveButtonHandler = (word) => {
        this.props.onSaveWord(word);
    }



    
    render() {
        if(this.props.sentencesLeft === 10){
            return (
            <>
            <ul>
            {this.props.firstWord.map((word, index)=>{
            if(index === 0){ //only return first item in word array
                if(word.meta.id.includes(":")){ //word.meta.id often includes ":1" at the end of it, this if statement checks to see if the string contains ":" and if it does it lops off the last two characters
                    word.meta.id = word.meta.id.substring(0, word.meta.id.length - 2)
                }
                return <li>
                    {/* headword */}
                <b>{word.meta.id}</b> - 
                {/* part of speech */}
                <i> {word.fl} </i>
                {/* {console.log(`word to log ${word.hwi.hw}`)} */}
                <Badge
                variant="primary"
                id="save-word-button" 
                onClick={
                    ()=>{this.saveButtonHandler(word)} 
                    } 
                pill 
                >
                    Save
                </Badge>
                <br />
                <br />
                <ul>
                    {/* definition (array) */}
                {word.shortdef.map((def) => {
                    return <li>{def}</li>
                })}
                </ul>
                </li>
            }
                })}
            </ul>
            <br />
            </>
            )
        }
        else{
        return (
            <>
                <ul>
                    {this.props.wordsFromSubmitButton.map((word, index)=>{
                    if(index === 0){ //only return first item in word array
                        if(word.meta.id.includes(":")){ //word.meta.id often includes ":1" at the end of it, this if statement checks to see if the string contains ":" and if it does it lops off the last two characters
                            word.meta.id = word.meta.id.substring(0, word.meta.id.length - 2)
                        }
                        return <li>
                            {/* headword */}
                        <b>{word.meta.id}</b> - 
                        {/* part of speech */}
                        <i> {word.fl} </i>
                        {/* {console.log(`word to log ${word.hwi.hw}`)} */}
                        <Badge
                        variant="primary"
                        id="save-word-button" 
                        onClick={
                            ()=>{this.saveButtonHandler(word)} 
                            } 
                        pill 
                        >
                            Save
                        </Badge>
                        <br />
                        <br />
                        <ul>
                            {/* definition (array) */}
                        {word.shortdef.map((def) => {
                            return <li>{def}</li>
                        }
                        )}
                        </ul>
                        </li>
                    }
                        })}
                </ul>
                </>
                );
                    }
    }
}


let mapStateToProps = (state) => {
    //accesses global state and passes it into props that can be accessed in the component. wordsFromSubmitButton is an array that can be accessed in the component above
    return{
        wordsFromSubmitButton: state.wordsFromSubmitButton,
        sentencesLeft: state.sentencesLeft,
        firstWord: state.firstWord
    }
}



let mapDispatchToProps = (dispatch) =>{
    //dispatches word from save button click into the global state via the addToSavedWords action and reducer
    return{
        onSaveWord: (dataFromSaveWord) => dispatch(addToSavedWords(dataFromSaveWord))
    }
}


Words.propTypes = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Words)