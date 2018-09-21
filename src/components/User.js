import React, { Component } from 'react';


// Functional Component: Cannot have state. So no use of "this" keyword at all. Directly we use props.<propName>
const User  = (props)=>{
    return(
        <div>
            <p>Name :{props.name} and Age :{props.age}</p>
        </div>
    )
}

export default User;