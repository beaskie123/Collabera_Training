import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function Contact() {
  return (
  <div className='contact-container'>
    <Container className='contact'>
        <p>
        <h3>For More inquiries Contact Us!!</h3>
        <h5>We'd love to hear from you!</h5>
        </p>
        <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Message</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    <Form className='form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='button' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </div>
  )
}
