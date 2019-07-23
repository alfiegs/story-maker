let addSentenceReducer = (state, action) => {
    //global state
    //if the state is undefined, create an initial state
    if(state === undefined){
        state = {
            sentenceList: [],
            wordsFromSubmitButton: [],
            randomNumber: 0,
            wordList: [],
            savedWords: [],
            sentencesLeft: 10,
            savedStory: [],
            firstWord: [],
        }
    }





    switch(action.type){
        //reducer looks for action type from the action function. if it is 'ADD_SENTENCE', it will update state in the following way
        case 'ADD_SENTENCE':
            console.log(`wordsFromSubmitButton: ${state.wordsFromSubmitButton}`)
            return{
                ...state,
                sentenceList: state.sentenceList.concat(action.sentence), //concatenates the payload (sentence) from the action onto the initial state. Global state is now updated.
                // wordsFromSubmitButton: action.words,
                randomNumber: action.randomNumber,
                sentencesLeft: action.sentencesLeft
            }
        case 'SAVE_WORD':
            console.log(`savedWords: ${state.savedWords}`)
            return{
                ...state,
                savedWords: state.savedWords.concat(action.wordToSave)
            }
        case 'SAVE_STORY':
            console.log(`savedStory: ${state.savedStory}`)
            return{
                ...state,
                savedStory: state.savedStory.concat(action.storyToSave),
                seed: action.seed
            }
        case 'FIRST_WORD':
            console.log(`firstWord: ${state.firstWord}`)
            return{
                ...state,
                firstWord: action.firstWord
            }
        case 'NEXT_WORDS':
            // console.log(`test: ${action.nextWords[0].hwi.hw}`)
            return{
                ...state,
                wordsFromSubmitButton: action.nextWords
            }




        // case 'ADD_WORDS':
        //     console.log(state.wordList)
        //     return{
        //         ...state,
        //         wordList: action.data
        //     }
        default:
            return state
        }
    }


    

export default addSentenceReducer;
