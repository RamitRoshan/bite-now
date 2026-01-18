import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

//in place of import React we can write just import {Component} from "react";
//and in place of React.Component , we can write Component. class About extends Component

class About extends React.Component {

    constructor(props){
        super(props);

        //console.log("Parent Constructor");
    }

    componentDidMount(){
        //console.log("Parent Component Did Mount");
    }

    render(){
        //console.log("Parent Render");
        return (
           <div>
              <h1>About Class Component</h1>
              <div>
                LoggedIn User
                <UserContext.Consumer>
                    {({loggedInUser}) => (
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
              </div>
              <h2>This is About section of my projects</h2>
              <UserClass name={"Ramit Roshan (classes)"} location={"Bengluru(class-based)"}/> 
            </div>
        );
    }
};

export default About;


/*
//About component using -> Fucntional component

import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is About section of my projects</h2>
            <User name={"Sanu (function)"}/>
   
            <UserClass name={"Ramit Roshan (classes)"} location={"Bengluru(class-based)"}/>
        </div>
    );
};
export default About;
*/