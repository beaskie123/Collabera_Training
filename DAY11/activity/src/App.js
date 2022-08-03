import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';

const api = axios.create({
  baseURL:`https://fakestoreapi.com/products`
})

export default class App extends Component {

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
      <div className='card-body'>
      {this.state.courses.map(course =>
      <Card className='product'  style={{ width: '18rem' }}>
      <Card.Img className='img' variant="top" src={course.image} />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>
          {course.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{course.price}</ListGroup.Item>
        <ListGroup.Item>{course.category}</ListGroup.Item>
      </ListGroup>
      </Card> 
        )}
          
      </div>
    )
  }
}
