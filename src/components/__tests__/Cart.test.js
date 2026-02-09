import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"; //used for toBeInTheDocument

//writing test cases for cart flows.
global.fetch = jest.fn(() => {
    //promise.all return json
    return Promise.resolve({
        //again we will call promise resolve in json fn
        json: () => {
            return Promise.resolve(MOCK_DATA_NAME);
        }
    });
});

test("should Load Restaurant Menu Component", async() => { 
    
    await act(async () => 
        render(
            //there is a link inside the Header component, so we will give Browser Router
            <BrowserRouter>
            <Provider store={appStore}>
              <Header/>
              <RestaurantMenu/>
            </Provider>
            </BrowserRouter>
        )
    );

    const accordionHeader = screen.getByText("Signature Burgers (3)");

    //clicking on the events
    fireEvent.click(accordionHeader);

    //as it has 3 food items Signature Burgers (3)
    expect(screen.getAllByTestId("foodItems").length).toBe(3);


    //ADD 1 item in the Cart

    //finding the add buttons, used getAllByRole and it will assume all btns
    const addBtns = screen.getAllByRole("button", {name: "Add +"});
    //let's click on the first buttons
    fireEvent.click(addBtns[0]);
    //if there is test (1) in cart items or not
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
})