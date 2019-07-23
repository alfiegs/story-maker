import React from 'react';
import {Container, Row, Col, Dropdown} from 'react-bootstrap';
import {connect} from 'react-redux';


class MyStories extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <>
            <Container fluid>
                <Row>
                    <Col>
                        <div>
                            <h5>My Stories</h5>
                            <hr />
                            {/* <div class="saved-story-box">
                                <span>Hello </span>
                            </div> */}
                            <br />
                            <div class="saved-story-box">
                            {this.props.savedStory.map((sentence)=>{
                                return <span>{sentence} </span>
                            })}
                            </div>

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
        savedStory: state.savedStory
    }
}




export default connect(mapStateToProps)(MyStories)