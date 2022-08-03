import React, { Component } from 'react'
import "./App.css"
import Axios from 'axios'

 class RenderProps extends Component {
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
    return this.props.children(this.state)
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <RenderProps url = "https://jsonplaceholder.typicode.com/todos/1">
        {({data, loading, error}) => {
            if(loading) return <p>loading...</p>
            if(error) return <p>{error}</p>
            return(
                <div>
                    <h3>title:{data.title}</h3>
                    <p>id: {data.id}</p>
                </div>
            )
        }}
        </RenderProps>
    </div>  )
}

export default App;