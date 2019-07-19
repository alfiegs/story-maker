import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import WriteSentence from './WriteSentence';
import Story from './Story';
import Words from './Words';


class App extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col md={4} id="col1" class="column">
                            <h2>Story</h2>
                            <Story />
                        </Col>
                        <Col md={4} class="column">
                            <h2>Write Your Sentence</h2>
                            <WriteSentence />
                        </Col>
                        <Col md={4} class="column">
                            <h2>Words</h2>
                            <Words />
                        </Col>
                    </Row> 
                </Container>

            </>
        );
    }
}



export default App
