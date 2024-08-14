import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResCard from "../ResCard";
import { OpenRestaurant } from "../ResCard";
import MOCK_DATA from "../../mocks/restaurantCardmock.json";
const OpenResCard = OpenRestaurant(ResCard);
it("should have the first card.", () => {
  render(<ResCard resData={MOCK_DATA} />);

  const name = screen.getByText("Chinese Wok");

  expect(name).toBeInTheDocument();
});

it("should render rescard component with open label .", () => {
  render(<OpenResCard resData={MOCK_DATA} />);

  const Openname = screen.getByText("Open");

  expect(Openname).toBeInTheDocument();
});
