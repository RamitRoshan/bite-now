import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
 

global.fetch = jest.fn(() => {
    //mocking fns for fetch exactly how originally fetch fns works and it will return promises
    return Promise.resolve({
        //json has a fns which will again returns a promise
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});


test("Should Search Res List for burger text input " , async() => {

    await act(async () => 
        render(
            <BrowserRouter>
               <Body/>
            </BrowserRouter>
        )
    );

    const cardsBeforSearch = screen.getAllByTestId("resCard");

    //initial card length should be 9, but later after chnage it should be 1(when we search burger)
    expect(cardsBeforSearch.length).toBe(9);

    const searchBtn = screen.getByRole("button", {name: "Search"});

    //testing input box and searchInput comes from body component Input
    const searchInput = screen.getByTestId("searchInput");

    //what we type here, inside the input box
    fireEvent.change(searchInput, { target: { value: "burger" } });
    //click the search
    fireEvent.click(searchBtn);

    //screen should load 4 restaurant cards 

    //all the ele. which have testId of resCard, give me all the element
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    
    //expect cards length should be 1(crads), after search
    expect(cardsAfterSearch.length).toBe(1);

    //assertion
    //expect(searchBtn).toBeInTheDocument();
})



//Writing Test case for Top Rated Restaurent 
test("Should filter Top Rated Restaurant", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
        )
    );

    const cardsBeforSearch = screen.getAllByTestId("resCard");

    //initial card length should be 9, but later after change it should be 1(when we search burger)
    expect(cardsBeforSearch.length).toBe(9);

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurant"});
    //call the events(click the btn)
    fireEvent.click(topRatedBtn);

    //once we click on the btn of top rated restaurant then it should show 5 which is actuall top rated
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    //assertion
    expect(cardsAfterFilter.length).toBe(5);

})