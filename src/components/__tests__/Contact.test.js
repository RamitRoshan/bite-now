// we will see whether, it got  loaded on DOM or not..

import { render, screen } from "@testing-library/react"
import Contact from "../Contact"

test("Should load contact us component", () => {
    //render this contact on JS-DOM
    render(<Contact/>);

    //it will render heading here
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
});