// we will see whether, it got  loaded on DOM or not..

import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
    //render this contact on JS-DOM
    render(<Contact/>);

    //it will render heading here, we have multiple 
    // heading, so to test it in contact we will 
    // choose one heading 
    const heading = screen.getByRole("heading", {
        level: 1,
        name: /get in touch/i,
    });

    //Assertion
    expect(heading).toBeInTheDocument();
});