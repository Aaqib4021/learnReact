import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../mocks/resListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  //* making fetch function equals to the jest.fn()
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search the body component before and after pressing the search button with a particular input.", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("Card");
  expect(cardsBeforeSearch.length).toBe(8);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const inputBtn = screen.getByTestId("searchInput");
  fireEvent.change(inputBtn, { target  : { value: "cafe" } }); //*this object just like we pass e and then get e.target.value as we can not do that here so target is object and then value is whatever you want to search as u have to give it here it does not works in realtime
  fireEvent.click(searchBtn);
  const cardsAfterSearch = screen.getAllByTestId("Card");
  expect(cardsAfterSearch.length).toBe(2);
});
