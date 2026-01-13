//this(UserClass.js) is a  class based components, normal User.js is functional based components.

import React from "react";

class UserClass extends React.Component {

    //contructor will receive props
    constructor(props){
        super(props); //mandatory
 

        //creating state variable in class based component
        this.state ={
            userInfo: {
                name: "Dummy",
                location: "Default", 
            },
        };
        //console.log(this.props.name + "Child Constructor");
    }

    //fetching api 
    async componentDidMount(){
       // console.log(this.props.name + "Child Component Did Mount");
       
       //API call
       const data = await fetch("https://api.github.com/users/RamitRoshan");
       const json = await data.json(); //converting data -> JSON

       //updating state-variable in class-based component
       this.setState({
        userInfo: json, //put json inside userInfo
       });

       console.log(json);
    }

    //it called -> after the update cycle.
    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }


    render(){
        //destructuring props
        const {name, location, avatar_url} = this.state.userInfo; 

        //console.log(this.props.name + "Child Render");
        return (
            <div className="user-card">
                <img src={avatar_url}/>  
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: ramitsroshan@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;


//this.props.____ can be used anywhere in the class based component.

/*
---MOUNTING Lifecycle---

* constructor is called (dummy)
* Render (dummy data)
*    < HTML Dummy > (web page loads with dummy data)
* Component Did Mount is called
*           - <API Call> is called(under componentDidMount)
*           <this.setState>  -> State Variable is updated

[
what do you mean by Mounting Life cycle:-
Mounting -> constructor -> Render -> Update -> componentDidMount -> this.setState
]

when Mounting lifecycle finished setState() was called, whenever there is a 
setState(), it triggers the reconciliation process and the update cycle
now the update cycle is called.


---UPDATE Cycle--- begins (this.setState)
       render(API data)
       <HTML (new API data)> (html is loaded with new API data, this point user will see img and name and everything on the html)
       componentDidUpdate (now called this)
*/