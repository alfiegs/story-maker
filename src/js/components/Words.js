import React from 'react';
import commonWords from '../../data/commonWords';
import {connect} from 'react-redux';
import {addWordsAction} from '../actions/actions';



class Words extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: []
        }
    }





    componentWillMount(){
        let wordList = commonWords.commonWords //wordList is the list of common words from the commonWords JSON file imported above
        var randomWord = wordList[Math.floor(Math.random()*wordList.length)]; //randomWord selects a random word from the common words list
        console.log(`random word: ${randomWord}`)
        //Word_URL inserts the random word from the common word list into the Webster API call
        let Word_URL = `https://dictionaryapi.com/api/v3/references/collegiate/json/${randomWord}?key=e760fb57-279a-419f-b4c7-6222182bebc3`
        fetch(Word_URL)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(`data: ${data}`)
            console.log(`data[0].hwi.hw: ${data[0].hwi.hw}`)
            this.setState({
                words: data
            }) //sets a new local state for 'words': it is now the data received from the API call (an array of strings)
            this.props.addWordsDispatcher(data)
        })
    }

    
    render() {
        return (
            <>
                <ul>
                    {this.props.wordList.map((word, index)=>{
                    if(index === 0){ //only return first item in word array
                        return <li>
                            {/* headword */}
                        <b>{word.hwi.hw}</b> - 
                        {/* part of speech */}
                        <span> {word.fl}</span>
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


let mapStateToProps = (state) => {
    //accesses global state and passes it into props that can be accessed in the component. sentenceList is an array that can be accessed in the component above
    return{
        wordList: state.wordList
    }
}

let mapDispatchToProps = (dispatch) =>{
    //dispatches an action to the store
    //addWordsDispatcher is called in the componentWillMount function above with data from the API call to the dictionary
    //data is now stored in the store
    return {
        addWordsDispatcher: (data) => dispatch(addWordsAction(data))
    }
}


Words.propTypes = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Words)