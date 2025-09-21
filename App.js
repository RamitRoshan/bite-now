import React from "react";
import ReactDOM from "react-dom/client";
 

const elem = <span>React Element </span>

const Title = () => (
  <h1 className="head" tabIndex="5">
    {elem}
    React Js using - JSX🚀
  </h1>
);

 

//React Functional Component
const HeadingComponent = () => (
  <div id="container">
      {Title()}
    <h1 className="heading">React Functional Component</h1>
  </div>
  
);

const Header = () => <h1>Bangalore</h1>;
const Content =() => <p>tech city bengaluru</p>
const Page = () => {
  return(
    <div>
      <Header/>
      <Content/>
    </div>
  )
}



// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
 


 