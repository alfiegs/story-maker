import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';


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
                        </Col>
                        <Col md={4} class="column">
                            <h2>Write Your Sentence</h2>
                        </Col>
                        <Col md={4} class="column">
                            <h2>Words</h2>
                        </Col>
                    </Row> 
                </Container>

            </>
        );
    }
}



export default App
