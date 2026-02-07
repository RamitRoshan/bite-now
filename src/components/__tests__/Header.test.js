import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render Header Component with a login button", () => {

    render(
        <BrowserRouter>
        {/* here this store will come from appstore(utils) */}
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
        
    );

    const loginButton = screen.getByRole("button");
    
    //we can do like this also
    //const loginButton = screen.getByText("Login");

    
    //for toBeInTheDocument we need library, @testing-library/jest-dom
    expect(loginButton).toBeInTheDocument();
});   


//another test cases fir Header Components
test("Should render Header Component with a Cart items 0 ", () => {

    render(
        <BrowserRouter>
        {/* here this store will come from appstore(utils) */}
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
        
    );

    const cartItems = screen.getByText("Cart - (0 items)");

    
    //for toBeInTheDocument we need library, @testing-library/jest-dom
    expect(cartItems).toBeInTheDocument();
}); 


//testing: I just wanted to check, whether my cart is there or not 
test("Should render Header Component with a Cart item ", () => {

    render(
        <BrowserRouter>
        {/* here this store will come from appstore(utils) */}
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
        
    );

    //this is rejex(/Cart/) and it rejex we dont have to write exact string
    const cartItems = screen.getByText(/Cart/);

    
    //for toBeInTheDocument we need library, @testing-library/jest-dom
    expect(cartItems).toBeInTheDocument();
}); 


//Every test case has a isolation renders 
//Check test cases for: If we click on login button, it should change logout
test("Should change Login Button to Logout on click", () => {

    render(
        <BrowserRouter>
        {/* here this store will come from appstore(utils) */}
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
        
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    //how to click that button, so we use fireEvent
    fireEvent.click(loginButton);

    //check logout
    const logoutButton = screen.getByRole("button", {name: "Logout"})

    //for toBeInTheDocument we need library, @testing-library/jest-dom
    expect(logoutButton).toBeInTheDocument();
}); 