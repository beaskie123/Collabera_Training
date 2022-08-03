class App extends React.Component {
    constructor() {
      super();
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
    };
    
   forceUpdateHandler() {
     this.forceUpdate();
   }
    render(){
       return(
          <div>
        <button onClick = {this.forceUpdateHandler}>FORCE Update </button>
        <h4>Random Numbers: {Math.random()} </h4>
          </div>  
          )
    }
  }
  
  ReactDOM.render(<App/>, document.getElementById('mountNode'))
  