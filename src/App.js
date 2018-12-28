 import React from 'react';
import css from "./App.css";
import * as generator from "./generator.js";

export default class App extends React.Component {
    
//This function is called on selecting the function from the dropdown. The display property for the text boxes and values are reset.
//Based on the function chosen, the state variables are initiated and the related items are made visible.
    
selfunc(ev)
    {
        var funcName= ev.value;
        document.getElementsByClassName("startnum")[0].style.display="none";
        document.getElementsByClassName("stepnum")[0].style.display="none";
        document.getElementsByClassName("calcBtn")[0].style.display="none";
        document.getElementsByClassName("resultBox")[0].style.display="none";
        document.getElementsByClassName("nextBtn")[0].style.display="none";
        this.setState({maintext:"Please select a sequence for the generator",resultbox:"",count:0});
        
        if(funcName ==="factorial")
            {
              this.setState({resultbox:generator.factorial.init(),maintext:"Factorial series :1, 1, 2, 6, 24, ... "});
             document.getElementsByClassName("resultBox")[0].style.display="block";
            document.getElementsByClassName("nextBtn")[0].style.display="block";
            }
         if(funcName ==="fibonacci")
            {
              this.setState({resultbox:generator.fibonacci.init(),maintext:"Fibonacci series :1,1, 2, 3, 5, 8, 13, ...  "});
             document.getElementsByClassName("resultBox")[0].style.display="block";
            document.getElementsByClassName("nextBtn")[0].style.display="block";
            }
         if(funcName ==="prime")
            {
              this.setState({resultbox:generator.prime.init(),maintext:"Prime series :2, 3, 5, 7, 11, 13, ..."});
             document.getElementsByClassName("resultBox")[0].style.display="block";
            document.getElementsByClassName("nextBtn")[0].style.display="block";
            }
        
        if(funcName ==="range")
            {
              
              document.getElementsByClassName("startnum")[0].style.display="block";
            document.getElementsByClassName("stepnum")[0].style.display="block";
            document.getElementsByClassName("calcBtn")[0].style.display="block";
            }
    }
    
    //This function is used exclusively for the range function as the user has to input the start and step values additionally.
    
    rangefunc()
    {
         if(parseInt(document.getElementsByName("startnum")[0].value)>=0&&parseInt(document.getElementsByName("stepnum")[0].value)>=0 )
           {
               this.setState({resultbox:document.getElementsByName("startnum")[0].value,maintext:"Range series rangeSeq(1, 2) -> 1, 3, 5, 7, ...."});
                document.getElementsByClassName("startnum")[0].style.display="none";
                    document.getElementsByClassName("stepnum")[0].style.display="none";
                    document.getElementsByClassName("calcBtn")[0].style.display="none";
                 document.getElementsByClassName("resultBox")[0].style.display="block";
                    document.getElementsByClassName("nextBtn")[0].style.display="block";
            }
        else{
            alert("Please enter valid integers as start and step numbers");
        }
       
          
        
    }
    
    //Based on the series selected, this function initiates the state variables and gets the initial display values.
    
  btnfunc()
        {
            var start = parseInt(document.getElementsByName("startnum")[0].value);
            var step = parseInt(document.getElementsByName("stepnum")[0].value);
            var selFunc = document.getElementsByTagName("select")[0].value
           if(selFunc === "factorial")
                this.setState({resultbox:generator.factorial.next(this.state.count),count:this.state.count + 1});
             if(selFunc === "fibonacci")
                this.setState({resultbox:generator.fibonacci.next(this.state.count + 1),count:this.state.count + 1});
              if(selFunc === "prime")
                this.setState({resultbox:generator.prime.next(this.state.count + 1),count:this.state.count + 1});
            if(selFunc === "range")
                this.setState({resultbox:generator.range.next(this.state.count,start,step),count:this.state.count + 1});
          
            
        }
    
    //State variables are defined here
    
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
        <div className="startnum" >start number:<input type="text" name="startnum" maxlength='4' size='4'/></div>
        <div className="stepnum" >step number:<input type="text"  name="stepnum" maxlength='4' size='4'/></div>
      <button className="calcBtn" value="Calculate" onClick={evt=>this.rangefunc()}>Calculate </button>
       
         <div className="resultBox" >{this.state.resultbox} </div>
        <button className="nextBtn"><img className="imgclass" onClick={evt=>this.btnfunc()}src='./images/next.jpg'/> </button>
       
        </div>
        
        </div>
    );
  }
}