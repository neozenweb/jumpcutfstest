 import React from 'react';
import css from "./App.css";
import * as generator from "./generator.js";

export default class App extends React.Component {
    
selfunc(ev)
    {
        var funcName= ev.value;
        alert(ev.value);
        if(funcName ==="factorial")
            {
              this.setState({resultbox:generator.factorial.init()});
            alert(document.getElementsByClassName("resultBox").length);
            document.getElementsByClassName("resultBox")[0].style.display="block";
            document.getElementsByClassName("nextBtn")[0].style.display="block";
            }
         if(funcName ==="fibonacci")
            {
              this.setState({resultbox:generator.fibonacci.init()});
            alert(document.getElementsByClassName("resultBox").length);
            document.getElementsByClassName("resultBox")[0].style.display="block";
            document.getElementsByClassName("nextBtn")[0].style.display="block";
            }
         if(funcName ==="prime")
            {
              this.setState({resultbox:generator.prime.init()});
            alert(document.getElementsByClassName("resultBox").length);
            document.getElementsByClassName("resultBox")[0].style.display="block";
            document.getElementsByClassName("nextBtn")[0].style.display="block";
            }
        
        
    }
  btnfunc()
        {
            var selFunc = document.getElementsByTagName("select")[0].value
           if(selFunc === "factorial")
                this.setState({resultbox:generator.factorial.next(this.state.count),count:this.state.count + 1});
             if(selFunc === "fibonacci")
                this.setState({resultbox:generator.fibonacci.next(this.state.count + 1),count:this.state.count + 1});
              if(selFunc === "prime")
                this.setState({resultbox:generator.prime.next(this.state.count + 1),count:this.state.count + 1});
            
        }
    
     state = {
       maintext:"Please select a sequence for the generator",
       resultbox:"",
         count:0
  } 
  

  
  render() {
    return (
        <div className="App">
        <div className="App-left">
        <div className="App-header"> Sequence Generator App </div>
        <div className="App-txt">{this.state.maintext}</div>
        </div>
        <div className="App-main">
            <select name="selList" onChange={evt=>this.selfunc(evt.target)}>
                <option>Select a sequence</option>
               <option value="fibonacci">Fibonnacci </option>
               <option value="factorial">Factorial </option>
               <option value="range">Range Sequence </option>
                <option value="prime">Prime Sequence </option>
               
        
        
            </select>
         <div className="resultBox" >{this.state.resultbox} </div>
        <button className="nextBtn"><img className="imgclass" onClick={evt=>this.btnfunc()}src='./images/next.jpg'/> </button>
       
        </div>
        
        </div>
    );
  }
}