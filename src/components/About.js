import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is About section of my projects</h2>
            <User name={"Sanu (function)"}/>
   
            <UserClass name={"Sanu Kumar (classes)"} location={"Bengluru(class-based)"}/>
        </div>
    );
};

export default About;