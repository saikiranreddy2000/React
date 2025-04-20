import { Provider } from "react-redux";
import { Heading } from "../Heading";
import { render, screen } from "@testing-library/react";
import  appStore  from "../../asserts/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
describe("heading tests", () => {
  test("Should have logo in heading", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Heading />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name:"login"});
    expect(loginButton).toBeInTheDocument();
  });
});
