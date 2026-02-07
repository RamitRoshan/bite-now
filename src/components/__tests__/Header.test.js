import { render, screen } from "@testing-library/react"
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