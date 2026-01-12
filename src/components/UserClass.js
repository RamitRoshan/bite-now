//this(UserClass.js) is a  class based components, normal User.js is functional based components.

import React from "react";
class UserClass extends React.Component {

    //contructor will receive props
    constructor(props){
        super(props); //mandatory
        console.log(props); //debugging purpose
    }
    render(){
        //destructuring props
        const {name, location} = this.props;

        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: ramitsroshan@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;


//this.props.____ can be used anywhere in the class based component.