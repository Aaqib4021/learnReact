import "@testing-library/jest-dom"; //* for tobeinthedocument
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("should load header component with a login button.", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //   const loginButton = screen.getByText("login");
  //   const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button", { name: "login" }); //*look for button which has a name = login
  expect(loginButton).toBeInTheDocument();
});

it("should load header component with a cart items 0.", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("Cart(0)"); //*look for button which has a name = login
  expect(cartItems).toBeInTheDocument();
});
it("should load header component with a cart.", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cart = screen.getByText(/Cart/); //*regix to check only cart is there or not
  expect(cart).toBeInTheDocument();
});

it("should change login button to logout button onClick", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "login" });

  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "logout" });
  expect(logoutButton).toBeInTheDocument();
});
