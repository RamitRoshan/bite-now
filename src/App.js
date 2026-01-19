import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
// import "../index.css";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"; 
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

//lazy loading of Grocery
const Grocery = lazy(() => import("./components/Grocery")); 

//lazy loading of About us
const About = lazy(() => import("./components/About"));

//App components
const AppLayout = () => {

  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Ramit Roshan",
    };
    setUserName(data.name);
  }, []);


  return (
    <Provider store={appStore}>
     <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className="app">
        <Header/>
        <Outlet/>
      </div>
     </UserContext.Provider>
    </Provider> 
  );
};

const appRouter = createBrowserRouter([
  {
    //if my path is '/' then load home page
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        //if my path is '/about', load the about page 
        path: "/about",
        // element: <About/>,
        element: (
        <Suspense fallback ={<h1>Loading....</h1>}>
          <About/>
        </Suspense>
        ),
      },
      {
        //if my path is '/contact', load the contact page 
        path: "/contact",
        element: <Contact/>,
      },
      { 
        path: "/grocery",
        element: (
        <Suspense fallback ={<h1>Loading....</h1>}>
          <Grocery/>
        </Suspense>
        ),
      },
      {
        //this part of url has a Dynamics path, as every restaurant has different data
        // here :resId is a dynamic and it can change acc to the id of restaurants
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
    errorElement: <Error/>,
  },
]);
   


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);