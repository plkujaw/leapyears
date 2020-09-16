import { leapYear, leapYearsBetween } from "./leapYears.js";
// const leapYearsBetween = require("./leapYears.js");

test("should return true if a year is divisible by 400", () => {
  expect(leapYear(2000)).toBe(true);
});

test("should return false if a year is not divisible by 4", () => {
  expect(leapYear(2009)).toBe(false);
});

test("should return true if a year is divisible by 4 but not divisible by 100", () => {
  expect(leapYear(2004)).toBe(true);
});

test("should return false if a year is divisible by 100 but not by 400", () => {
  expect(leapYear(1900)).toBe(false);
});

test("should return an array of all the leap years between given years", () => {
  expect(leapYearsBetween(2000, 2010)).toStrictEqual([2000, 2004, 2008]);
  expect(leapYearsBetween(1879, 1901)).toStrictEqual([
    1880,
    1884,
    1888,
    1892,
    1896,
  ]);
});
