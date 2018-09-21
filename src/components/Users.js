import React, { Component } from 'react';
import User from './User';
// We will make Users a stateful component

export default class Users extends Component{
    state = {
        users:[
            {name:"Imran",age:20},
            {name:"Rafiq",age:50},
            {name:"Rather",age:30},
        ],
        title:"Show Users"
    }

    // ES6 arrow method takes care of this scope 

    makeYoungHandler = ()=>{
        const newState = this.state.users.map((user)=>{
            const tempUser = user;// We are not directly mutating the state
            tempUser.age-=10;
            return tempUser;
        })
        this.setState({
          
        })

        console.log()
    }

    render(){
        return(
            <div>
                  <h1>{this.state.title}</h1>
                  <button onClick={this.makeYoungHandler}>Click to make your self young.At least for now :)</button>
                 {
                     this.state.users.map((user)=>{
                        return <User age={user.age} name={user.name}/>
                     })
                 }
            </div>
          
        )
    }
}