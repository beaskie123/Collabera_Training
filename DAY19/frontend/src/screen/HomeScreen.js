import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function HomeScreen() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <Card>
            <Card.Img src="./img/bg1.jpg">
            </Card.Img>
          </Card></Col>
          <Col>
          hello</Col>
        </Row>
        <Row>
        <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="./img/bg2.jpg" />
      </Card>
        </Row>
      </Container>
    </div>
  )
}
