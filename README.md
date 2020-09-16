# Leap Years

A simple tool that will tell you whether a year is a leap year, according to the following rules:

- All years divisible by 400 ARE leap years (e.g. 2000 was a leap year)
- All years divisible by 100 but not by 400 are NOT leap years (e.g. 1700, 1800 and 1900 were not leap years)
- All years divisible by 4 and not by 100 ARE leap years (e.g. 2004, 2008 and 2012 were leap years)
- All years not divisible by 4 are NOT leap years (e.g. 2009, 2010 and 2011 were not leap years)

### Acceptance Criteria

```
$ leapYear(2000)
 => true
$ leapYear(1970)
 => false
$ leapYear(1900)
 => false
$ leapYear(1988)
 => true
$ leapYear(1500)
 => false
```

## Extension Options

- Write a program that takes a start year and an end year and returns an array of all the leap years between.

```
$ leapYearsBetween(2000, 2010)
=> [2000, 2004, 2008]
$ leapYearsBetween(1879, 1901)
=> [1880, 1884, 1888, 1892, 1896]
```

- Write a program that when given a year, will return the closest leap year (this could be before or after the given year)
