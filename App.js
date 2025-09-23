import React from "react";
import ReactDOM from "react-dom/client";
 


const Header = () => {
  return (
    <div className="header">
      <div></div>
    </div>
  )
}
 
//App components
const AppLayout = () => {
  return (
    <div className="app"></div>
  )
}
 

// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
 


 