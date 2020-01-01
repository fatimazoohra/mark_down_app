import './App.css';
import React  , { Component } from "react";
import textVal from './textVal';
import 'bootstrap/dist/css/bootstrap.min.css';
import marked from "marked";

class App extends Component{
  state = {
    text : textVal
  };

  change = (e)=>{
    let newtext = e.target.value;
    this.setState({text:newtext});
  }
  renderText = (text)=>{
    let t=marked(text,{sanitize: true});
     return { __html: t};
}

    render(){
      return (
        <div className="container ">
          <div className="titre">
              <h1>{this.props.title}</h1> 
              <p>" {this.props.name} "</p>
          </div>
          <div className="row">
              <div className="col-sm-6">
                <textarea cols="50" rows="8" value={this.state.text} onChange={(e)=>this.change(e)}> </textarea>
              </div>
              <div className="col-sm-6"  dangerouslySetInnerHTML={this.renderText(this.state.text)}>  
               
              </div>
          </div>
        </div>
        );
      }
}
export default App;
