class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        header: "Header from state ...",
        content: "Content from state ..."
      }
    } 
    
    render() {
    return(
          <div>
        <h1>{this.state.header}</h1>
            <h2>{this.state.header}</h2>
          </div>  
          )
      }
  }
  
  ReactDOM.render(<App /> , document.getElementById('mountNode'))
  