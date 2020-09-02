const leapYear = require("./leapYears.js");

test("should return true if a year is divisble by 400", () => {
  expect(leapYear(2000)).toBe(true);
});
