import React from "react";

function Square(props) {
    return (
      <button className="square" style={{backgroundColor:props.color}} onClick={() => props.onClick(props.value)}>
        {props.value}
      </button>
    );
  }
  
  class App extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        value : "",
      }
    }

    handleChange(event) {
      console.log(event);
        this.setState({value: event.target.value});
    }

    handleClick(i){
      console.log(i);
      if(i==="="){
        let output;
         try {
          output = eval(this.state.value);
         }catch(e){
          output = "ERROR";
         }
         this.setState({value:output});

      }
      else{
        this.setState({
          value:this.state.value+`${i}`,
        });
      }
     
    }

    handlekeyDown(event){
      console.log(event.key);
      if(event.key === "Enter")
        this.handleClick("=")
      if(event.target.value === "ERROR"){
          this.setState={value:""};
        }
      
    }

    renderSquare(i) {
      return (
        <Square
          value={i}
          onClick={() => this.handleClick(i)}
          color = {isNaN(i)? i==="="?"wheat":"#FF8C00":null}
        />
      );
    }
  
    render() {
    
      return (
        <div className="center">
            <div className="board-row">
                <input 
                className="display-box" 
                value={this.state.value}
                onChange={(event) => this.handleChange(event)}
                onKeyDown={(event)=> this.handlekeyDown(event)}
                />
            </div>
          <div className="board-row">
            {this.renderSquare(9)}
            {this.renderSquare(8)}
            {this.renderSquare(7)}
              {this.renderSquare(")")}
              {this.renderSquare("+")}
              {this.renderSquare("-")}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(5)}
            {this.renderSquare(4)}
              {this.renderSquare("(")}
              {this.renderSquare("*")}
              {this.renderSquare("/")}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(2)}
            {this.renderSquare(1)}
            {this.renderSquare(0)}
              {this.renderSquare(".")}
              {this.renderSquare("=")}
          </div>
        </div>
      );
    }
  }
  
  
export default App; 