let addSentenceReducer = (state, action) => {
    //global state
    //if the state is undefined, create an initial state
    if(state === undefined){
        state = {
            sentenceList: [],
            wordList: []
        }
    }





    switch(action.type){
        //reducer looks for action type from the action function. if it is 'ADD_SENTENCE', it will update state in the following way
        case 'ADD_SENTENCE':
            console.log(state.sentenceList)
            return{
                ...state,
                sentenceList: state.sentenceList.concat(action.sentence) //concatenates the payload (sentence) from the action onto the initial state. Global state is now updated.
            }
        case 'ADD_WORDS':
            console.log(state.wordList)
            return{
                ...state,
                wordList: action.data
            }
        default:
            return state
        }
    }


    

export default addSentenceReducer;
