import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import data from '../data';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'
import Accordion from 'react-bootstrap/Accordion'

const api = axios.create({
    baseURL:`https://fakestoreapi.com/products`
  })

export default class Product extends Component {
  state = {
    courses: []
  }
  constructor(){
    super()
    api.get('/').then(res =>{
      console.log(res.data)
      this.setState({courses: res.data})
    })
  }

  render() {
    return (
      <div className='product-container'>
        <div className='card-body'>
      {this.state.courses.map(course =>
      <Card className='product'  style={{ width: '18rem' }}>
      <Card.Img className='card-img' variant="top" src={course.image} />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
            <Accordion.Header className='acc-details'>Click for Details</Accordion.Header>
            <Accordion.Body>
            {course.description}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
          
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{course.price}</ListGroup.Item>
        <ListGroup.Item>{course.category}</ListGroup.Item>
      </ListGroup>
      </Card> 
        )}
      </div>
      </div>
    )
  }
}
