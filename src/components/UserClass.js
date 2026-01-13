//this(UserClass.js) is a  class based components, normal User.js is functional based components.

import React from "react";

class UserClass extends React.Component {

    //contructor will receive props
    constructor(props){
        super(props); //mandatory
        // console.log(props); //debugging purpose

        //creating state variable in class based component
        this.state = {
            count: 0,
            count2: 2,
        };
        console.log(this.props.name + "Child Constructor");
    }

    componentDidMount(){
        console.log(this.props.name + "Child Component Did Mount");
    }
    render(){
        //destructuring props
        const {name, location} = this.props;
        const {count} = this.state;

        console.log(this.props.name + "Child Render");
        return (
            <div className="user-card">
                <h1>Count : {count}</h1>  
                <button onClick={() => {
                    this.setState({
                        count: this.state.count+1, 
                    }); 
                }}>Count-Inc</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: ramitsroshan@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;


//this.props.____ can be used anywhere in the class based component.