import React, { Component } from 'react'
import "./App.css"
import Axios from 'axios'

 class FetchData extends Component {
 state = {
  data: null,
  loading: true,
  error: ""
 }

 componentDidMount() {
  Axios 
  .get(this.props.url)
  .then(res => {
    this.setState({
      data: res.data,
      loading: false
    })
  })
  .catch(err => {
    console.log(err)
  })
 }

 render() {
  const {data, loading, error } = this.state
    return (
      <div>
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}
      {data && <div>
        <h3>title: {data.title}</h3>
        <p>id: {data.id}</p>
        </div>}
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <FetchData url = "https://jsonplaceholder.typicode.com/todos/1" />
    </div>  )
}

export default App;