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


test("should render the Body Component with Search" , async() => {

    await act(async () => 
        render(
            <BrowserRouter>
               <Body/>
            </BrowserRouter>
        )
    );

    const searchBtn = screen.getByRole("button", {name: "Search"});

    //testing input box and searchInput comes from body component Input
    const searchInput = screen.getByTestId("searchInput");

    //what we type here, inside the input box
    fireEvent.change(searchInput, { target: { value: "burger" } });
    //click the search
    fireEvent.click(searchBtn);

    //screen should load 4 restaurant cards 

    //all the ele. which have testId of resCard, give me all the element
    const cards = screen.getAllByTestId("resCard");
    //expect cards length should be 4(crads)
    expect(cards.length).toBe(4);

    //assertion
    expect(searchBtn).toBeInTheDocument();
})