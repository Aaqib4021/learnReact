import { sum } from "../sum";

test("this should sum my two numbers", () => {
  const result = sum(2, 2);
  expect(result).toBe(4);
  //   expect("success");
});
