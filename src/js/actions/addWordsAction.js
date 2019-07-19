
//addWordsActions is an action that gets called by mapDispatchToProps in Words
//it gets passed 'data' from mapDispatchToProps
//it passes its payload 'data' to Store
export function addWordsAction(data) {
    console.log(data)
    return {
        type: "ADD_WORDS", 
        data: data
    }
}