import { render, screen } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json"

global.fetch = jest.fn(() => {
    //mocking fns for fetch exactly how originally fetch fns works and it will return promises
    return Promise.resolve({
        //json has a fns which will again returns a promise
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});


test("should render the Body Component with Search" , () => {

    render(
        <Body/>
    ); 
})