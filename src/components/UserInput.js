import React, { Component } from 'react';

export default class UserInput extends Component{
    constructor(props){
        super();
        this.changeNameHandler = this.changeNameHandler.bind(this);
    }
    state={ 
        // state pai hi updates horahain hain, har kisi event sai. Only the ways we write event handler's are different.
        name:""
    }
   
    // We will use eventHandler() function to change our state

    // Button 1 event handler
    changeNameHandler(){
        console.log("WORKING FINE. Hanlder 1 without ES6 Syntax.We have binded the scope to this ")
        this.setState({
            name:"emmeisoft@gmail.com"
        })
    }

    // Button 2 event handler
    changeNameHandler2=()=>{
        console.log("WORKING FINE. Handler 2 with ES6 Arrow Function. No need to bind scope of 'this'")
        this.setState({
            name:"ratherimran99@gamil.com"
        })
    }

     // Button 3 event handler : Since the changeNameHandler3() method is binded with "this" class at the time of binding event.import React, { Component } from 'react';
    //  We can actually use any of the syntax . ES6 arrow method or the ES5 function. Both works the same in this case.
     changeNameHandler3(value){
        this.setState({
            name:value
        })
        console.log("Value being passed successfully");
     }

     nameChangeHandler = (event)=>{
                this.setState({
                    name:event.target.value
                })
     }

     nameChangeHandler2 = (event)=>{
        this.setState({
            name:event.target.value
        })
    }

    render(){
        return(
            <div>
                    <h2>State Changed to: ===> : {this.state.name}</h2>  
                    <button onClick={this.changeNameHandler}>Calling Event handler: HardCoded value used in setState </button>    
                    <br/><br/>
                    <button onClick={this.changeNameHandler2}>Calling Event handler: though HardCoded: But ES6 being used  </button> 
                    <br/><br/>   
                    <button onClick={this.changeNameHandler3.bind(this,"RatherSaeb RetherSaeb !!!")}>Passing values in Event handler </button>    
                    <br/><br/>
                    {/* Let's work on onChange event to pass change state on every letter we type */}
                    <h1>Enter Your Name</h1>
                    {/* In case of input field automatically a callback value event is passed into the function */}
                    <input type="text" onChange={this.nameChangeHandler} value={this.state.name}/>
                    <input type="text" onChange={(event) => this.nameChangeHandler2(event)} value={this.state.name}/>
                    <h3>You are currently typing: {this.state.name}</h3>
                          
            </div>
        )
    }
}

// There are two ways to wire our event handler, while passing a value to the handler method
// 1. onClick = {this.eventHandler.bind(this,"Kabootar")} // this is recommended one
// 2. onClick = {()=>this.eventHandler("Badaam")} .They say! performance wise this is not recommended.No comments from my side. the anonymous function way
// B. However onChange event, by default an event is passed, so we no longer need to use either bind or other syntax.
// .. We simple write : onChange={this.eventHandler}, this we use in two way binding too

// ONE DATA SOURCE || state : name. one variable... we are making chagnes in this variable only  every time . 
// Once we work on redux we will be working on the store to fetch our application data.But this is at this moment a state presented

