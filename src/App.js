import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";

//lazy loading of Grocery
const Grocery = lazy(() => import("./components/Grocery")); 

//lazy loading of About us
const About = lazy(() => import("./components/About"));

//App components
const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
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
    ],
    errorElement: <Error/>,
  },
]);
   


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);