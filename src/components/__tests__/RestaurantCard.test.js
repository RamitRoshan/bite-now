import { render , screen} from "@testing-library/react"
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

test("should render RestaurantCard component with props Data", () => {

    render(
        <RestaurantCard resData={MOCK_DATA}/>
    );

    //checking, the card was succefully render or not
    
    //let me find the name of the restaurant, to be present
    //inside my card or not

    const name = screen.getByText("Pizza Paradise");

    //assertion
    expect(name).toBeInTheDocument();
});