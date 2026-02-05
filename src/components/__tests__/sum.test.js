// test("sum of 2 numbers", () => {
//   expect(2 + 3).toBe(5);
// });

import { sum } from "../Sum";
test("Sum function should calculate the sum of two numbers", () => {
  
  const result = sum(3,4);
  //Assertion
  expect(result).toBe(7);
});
