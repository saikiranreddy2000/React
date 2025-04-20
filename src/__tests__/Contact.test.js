import Contact from "../Contact"
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"
test("Should have heading as contact",()=>{
    render(<Contact/>)
    const heading =screen.getByPlaceholderText("name");
    expect(heading).toBeInTheDocument();
})