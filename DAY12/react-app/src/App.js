import React, { Component } from 'react'
import "./index.css"
import Axios from 'axios'

const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile} /> )}
  </div>
)
class Card extends Component{
  render() {
    const profile = this.props;
    return (
      <div className='github-profile'>
        <img src={profile.avatar_url} alt='img'/>
        <div className="info">
            <div className='="name'>{profile.name}</div>
            <div className='company'>{profile.company}</div>
        </div>
      </div>
    )
  }
}

class Form extends Component{
  state = { userName: ''}

  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await Axios.get(`https://api.github.com/users/${this.state.userName}`)
    this.props.onSubmit(resp.data)
    this.setState({userName: ""})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
        value={this.state.userName}
        onChange = {event => this.setState({userName: event.target.value})}
        placeholder='Github username'
        required />
        <button>Add Card</button>
      </form>
    )
  }
}
class App extends Component {
  state ={
    profiles: [],
  }; 

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }
  
  render() {
    return (
      <div>
          <div className='header'>{this.props.title}</div>
          <Form onSubmit={this.addNewProfile}/>
          <CardList profiles={this.state.profiles} />
      </div>
    )
  }
}

export default App;