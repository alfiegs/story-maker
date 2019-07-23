import React from 'react';
import {Button} from 'react-bootstrap';
import {addSentence, showFirstWord, displayNewWordAction} from '../actions/actions';
import {connect} from 'react-redux';
import commonWords from '../../data/commonWords';




class WriteSentence extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sentence: '', //the sentence a user inputs
            words: [], //the data from the API call
            sentencesLeft: 10,
            firstWord: []
        };
    }

    componentWillMount(){
        let wordList = commonWords.commonWords //wordList is the list of common words from the commonWords JSON file imported above
        var randomWord = wordList[Math.floor(Math.random()*wordList.length)]; //randomWord selects a random word from the common words list
        // console.log(`random word: ${randomWord}`)
        //Word_URL inserts the random word from the common word list into the Webster API call
        let Word_URL = `https://dictionaryapi.com/api/v3/references/collegiate/json/${randomWord}?key=e760fb57-279a-419f-b4c7-6222182bebc3`
        fetch(Word_URL)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            // console.log(`data: ${data}`)
            // console.log(`data[0].hwi.hw: ${data[0].hwi.hw}`)
            this.setState({
                firstWord: data
            }) //sets a new local state for 'words': it is now the data received from the API call (an array of strings)
            this.props.onPageLoad({
                firstWord: this.state.firstWord
            })
        })
    }

    getWords = () => {  //function to carry out API call to words list, gets called in handleSubmit whenever submit button is clicked
        let wordList = commonWords.commonWords //wordList is the list of common words from the commonWords JSON file imported above
        var randomWord = wordList[Math.floor(Math.random()*wordList.length)]; //randomWord selects a random word from the common words list
        // console.log(`random word: ${randomWord}`)
        //Word_URL inserts the random word from the common word list into the Webster API call
        let Word_URL = `https://dictionaryapi.com/api/v3/references/collegiate/json/${randomWord}?key=e760fb57-279a-419f-b4c7-6222182bebc3`
        fetch(Word_URL)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            // console.log(`data: ${data}`)
            // console.log(`data[0].hwi.hw: ${data[0].hwi.hw}`)
            this.setState({
                words: data,
            }) //sets a new local state for 'words': it is now the data received from the API call (an array of strings)
            this.props.displayNewWord({
                words: this.state.words
            })
        })
    }

    isSentenceValid = () => {
        if (!this.state.sentence){
            alert('Please write a sentence.')
        }
        else{
            return true
        }
    }

    // correctPunctuation = () => {
    //     let originalSentence = this.state.sentence


    // }

    handleSentenceChange = (e) => {
        //updates sentence in local state with the value of input from form
        this.setState({
            sentence: e.target.value
        })
    }




    handleSubmit = (e) =>{
        //calls the onAddSentence dispatcher in mapDispatchToProps
        //it will add this.state.sentence into the dispatch as 'sentence'
        if(this.isSentenceValid() && this.props.sentencesLeft > 0){
        e.preventDefault(); //prevents the default action of the button so that clicking it does what I want instead
        this.getWords() //performs API call whenever Add Your Sentence is clicked (see getWords function above)
        this.props.onAddSentence({ //adds payload to action, the contents will be passed to the onAddSentence action under the variable dataFromWriteSentence
            sentence: this.state.sentence,
            words: this.state.words,
            sentencesLeft: this.props.sentencesLeft - 1
            });
        this.setState({ //this updates the local state after submission, changing back to empty ('') in order to clear the input box
            sentence: '',
            sentencesLeft: this.state.sentencesLeft - 1,
            // words: this.state.words
            })
        }
        else{
            e.preventDefault()
        }
    }


    render(){
        const {sentence} = this.state;
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    {/* <p>{this.state.sentence}</p> */}
                    {/* the above would display content of current sentence as it's typed. It is displaying local state, which gets updated with each keystroke */}
                    {/* <p>{this.props.sentenceList[0]</p> */}
                    {/* the above would display the content of the first sentence after it is submitted. It is displaying the global state, which gets updated with each submit. sentenceList is an array, so it displays the first item of the array, i.e. sentenceList[0] */}
                    <div className="form-group">
                        {/* <label htmlFor="Sentence">Sentence</label> */}
                        <input 
                        type="text"
                        className="form-control"
                        id="sentence-input"
                        value={sentence}
                        onChange={this.handleSentenceChange} // calls handleSentenceChange above, which updates local state with the value of the input
                        />
                    </div>
                    <Button type="submit" className="btn btn-success btn-lg">
                        Add Your Sentence
                    </Button>
                </form>
            </>
        );
    }
}


let mapStateToProps = (state) => {
    //accesses global state and passes it into props that can be accessed in the component. sentenceList is an array that can be accessed in the component above
    return{
        sentenceList: state.sentenceList,
        wordsFromSubmitButton: state.wordsFromSubmitButton,
        sentencesLeft: state.sentencesLeft
    }
}

let mapDispatchToProps = (dispatch) =>{
    //dispatches an action to the store
    //onAddSentence is called in the handleSubmit function above
    //dataFromWriteSentence is an object from handleSubmit function above
    //dataFromWriteSentence is now stored in the store
    return {
        displayNewWord: (dataFromNextAPICalls) => dispatch(displayNewWordAction(dataFromNextAPICalls)),
        onPageLoad: (dataFromFirstAPICall) => dispatch(showFirstWord(dataFromFirstAPICall)),
        onAddSentence: (dataFromWriteSentence) => dispatch(addSentence(dataFromWriteSentence)),
        
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(WriteSentence)