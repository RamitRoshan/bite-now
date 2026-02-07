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


//testing one more thing inside the contacts
//testing wheather email is visible or not
test("Should display email address", () => {
    
    render(<Contact/>);

      
    const email = screen.getByText(/hello@bitenow.com/i);

    //Assertion
    expect(email).toBeInTheDocument();
});

//another new test cases: Phone no. is visible
test("Should display phone number", () => {
    render(<Contact/>);

    const phone = screen.getByText(/\+91 9931970143/i);
    expect(phone).toBeInTheDocument(); 
})
 