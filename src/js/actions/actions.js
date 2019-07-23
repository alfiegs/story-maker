
//addSentence is an action that gets called by mapDispatchToProps
//it gets passed 'sentence' from mapDispatchToProps
//it passes its payload 'sentence' to Store
export function addSentence(dataFromWriteSentence) {
    // console.log(dataFromWriteSentence.sentencesLeft)
    return {
        type: "ADD_SENTENCE", 
        sentence: dataFromWriteSentence.sentence,
        words: dataFromWriteSentence.words,
        sentencesLeft: dataFromWriteSentence.sentencesLeft
    }
}


export function addToSavedWords(dataFromSaveWord) {
    console.log(`dataFromSaveWord: ${dataFromSaveWord.hwi.hw}`)
    return {
        type: "SAVE_WORD", 
        wordToSave: dataFromSaveWord
        }
}

export function showFirstWord(dataFromFirstAPICall) {
    return {
        type: "FIRST_WORD", 
        firstWord: dataFromFirstAPICall.firstWord
        }
}


export function displayNewWordAction(dataFromNextAPICalls) {
    return {
        type: "NEXT_WORDS", 
        nextWords: dataFromNextAPICalls.words
        }
}













// //addWordsActions is an action that gets called by mapDispatchToProps in Words
// //it gets passed 'data' from mapDispatchToProps
// //it passes its payload 'data' to Store
// export function addWordsAction(data) {
//     console.log(data)
//     return {
//         type: "ADD_WORDS", 
//         data: data
//     }
// }