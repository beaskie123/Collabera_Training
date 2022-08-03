class App extends React.Component {
    render() {
    return(
          <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
          </div>  
          )
      }
  }
  
  ReactDOM.render(<App  headerProp = "Header from First Property ..."
                  contentProp = "Content from second Propeerty ..." />, document.getElementById('mountNode'))
  