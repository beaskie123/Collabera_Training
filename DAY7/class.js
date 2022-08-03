class App extends React.Component {
    render() {
  return(
        <div>
          <Header />
          <Content />
        </div>  
        )
    }
}

class Header extends React.Component {
  render() {
    return(
    <div>
        <h1> Component ! 
        </h1>
    </div>
    )
  }
}

class Content extends React.Component {
  render() {
    return (
    <div>
        <h2> Component 2 </h2>
        <p> this is sub content !! </p>
        </div>)
  }
}
ReactDOM.render(<App /> , document.getElementById('mountNode'))
