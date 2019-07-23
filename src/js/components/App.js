import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import WriteSentence from './WriteSentence';
import Story from './Story';
import Words from './Words';
import '../../App.css';
import {connect} from 'react-redux';



class App extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <>
                <Container fluid id="page-container">
                    <Row>
                        <Col md={3} class="column" id="words-box">
                            <h5>Words</h5>
                            <Words />
                        </Col>
                        <Col id="col1" class="column">
                            <div id="story-box" className=".z-depth-5">
                            <h5 class='alignleft'>Your Story:</h5>
                            <span class='alignright'>Sentences Left: {this.props.sentencesLeft}</span>
                            <div id='clear'></div>
                            <hr />
                            <Story />
                            </div>
                            <br />
                            <div id="sentence-box">
                            <h5>Write Your Sentence Here:</h5>
                            <WriteSentence />
                            </div>
                        </Col>
                        <Col md={1}></Col>
                    </Row> 
                </Container>
            </>
        );
    }
}

let mapStateToProps = (state) => {
    //accesses global state and passes it into props that can be accessed in the component. sentenceList is an array that can be accessed in the component above
    return{
        sentencesLeft: state.sentencesLeft
    }
}


export default connect(mapStateToProps)(App)