const leapYear = require("./leapYears.js");

test("should return true if a year is divisble by 400", () => {
  expect(leapYear(2000)).toBe(true);
});

test("should return false if a year is not divisible by 4", () => {
  expect(leapYear(2009)).toBe(false);
});

test("should return true if a year is divisible by 4 but not divisible by 100", () => {
  expect(leapYear(2004)).toBe(true);
});
