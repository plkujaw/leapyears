import { leapYear, leapYearsBetween, closestLeapYear } from "./leapYears.js";
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
  expect(leapYearsBetween(1879, 1905)).toStrictEqual([
    1880,
    1884,
    1888,
    1892,
    1896,
    1904,
  ]);
});

test("should return itself if the given year is a leap year", () => {
  expect(closestLeapYear(2000)).toBe(2000);
  expect(closestLeapYear(2004)).toBe(2004);
  expect(closestLeapYear(1888)).toBe(1888);
});

test("should return the closest leap year to the given year", () => {
  expect(closestLeapYear(1999)).toBe(2000); // year + 1;
  expect(closestLeapYear(2003)).toBe(2004); // year + 1
  expect(closestLeapYear(2005)).toBe(2004); // year - 1;
  expect(closestLeapYear(2001)).toBe(2000); // year - 1;
  expect(closestLeapYear(1901)).toBe(1904); // year + 3;
});

test("should return an array with the closest leap years if the given year is in between", () => {
  expect(closestLeapYear(2002)).toStrictEqual([2000, 2004]);
  expect(closestLeapYear(1882)).toStrictEqual([1880, 1884]);
  expect(closestLeapYear(1900)).toStrictEqual([1896, 1904]);
  expect(closestLeapYear(1700)).toStrictEqual([1696, 1704]);
});
