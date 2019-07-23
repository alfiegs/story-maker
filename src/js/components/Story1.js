import React from 'react';
import {connect} from 'react-redux';
import {saveStoryAction} from '../actions/saveStoryAction';
import {Badge} from 'react-bootstrap';


class Story extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            seedSentences: [
                "It was a dark and stormy night. ",
                "John looked lovingly into Susan's eyes. ",
                "'Oh my God!', screamed Joe. ",
                "Mertyl had a weird dream last night. ",
                "The world is going to end in 7 days. ",
                "Maude wondered why the boss called her into his office. ",
                "Billy was the first man on Mars. "
            ],
            storySaver: [],
            seed: "",
            pageLoaded: false,
            firstSeed: ""
        }
    }

    componentWillMount(){
        if(this.state.pageLoaded === false){
        let num = Math.floor(Math.random() * this.state.seedSentences.length);
        this.setState({
            seed: this.state.seedSentences[num],
            pageLoaded: true
        })
    }
    }



    saveStory = () => {
        console.log(`storyToSave: ${this.state.sentenceList}`)
        // if(this.state.storySaverClicked === false)
        this.setState({
            storySaver: this.state.storySaver.concat(this.state.seed + this.props.sentenceList),
            storySaverClicked: true
        })
        this.props.toSaveStory({
            storyToSave: this.state.storySaver
        })

    }

    addSaveButton = () => {
        if(this.props.sentencesLeft === 0){
            return(
                <Badge
                variant="primary"
                id="save-story-button" 
                pill 
                onClick={this.saveStory}
                >
                    Save
                </Badge>
            )
            
        }
    }

    sendSentencesToState = () => {
        if(this.props.sentencesLeft === 0){
        this.setState({
            test: "duh"
        })
        }
    }


    render() {
        return (
            <>  
                <b>{this.state.seed}</b>
                {this.props.sentenceList.map((sentence)=>{
                    return <span>{sentence} </span>
                })}
                {this.addSaveButton()}
                {/* <br />
                {this.props.savedStory.map((sentence)=>{
                    return <span>{sentence}. </span>
                })} */}
            </>
        );
    }
}


let mapStateToProps = (state) => {
    return{
        sentenceList: state.sentenceList,
        sentencesLeft: state.sentencesLeft,
        savedStory: state.savedStory
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        toSaveStory: (storyToSave) => dispatch(saveStoryAction(storyToSave)),
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Story)
