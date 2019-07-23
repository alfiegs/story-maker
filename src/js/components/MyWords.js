import React from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Dropdown} from 'react-bootstrap';



class MyWords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wordToDisplay: []
        }
        
    }





    render() {
        return (
            <>
            <Container >
                <Row>
                    <Col>
                        <div id="my-words-box">
                            <h5>My Words</h5>
                            <hr />
                        {this.props.savedWords.map((word) => {
                        return <>
                                <br />
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">{word.meta.id}</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <b>{word.meta.id}</b> - <i>{word.fl}</i>
                                            <ul>
                                            {word.shortdef.map((def) => {
                                            return <Dropdown.Item href="#/action-1"><li>{def}</li></Dropdown.Item>
                                            })}
                                            </ul>
                                    </Dropdown.Menu>
                                </Dropdown>
                                </>
                        })}
                        </div>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}


let mapStateToProps = (state) => {
    //accesses global state and passes it into props that can be accessed in the component. sentenceList is an array that can be accessed in the component above
    return{
        savedWords: state.savedWords,
        defWord: state.defWord
    }
}




export default connect(mapStateToProps)(MyWords)