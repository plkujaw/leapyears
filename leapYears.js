const leapYear = (year) => {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 4 !== 0) {
    return false;
  }
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }
};

const leapYearsBetween = (startYear, endYear) => {
  let leapYears = [];
  for (let year = startYear; year <= endYear; year++) {
    if (leapYear(year)) {
      leapYears.push(year);
    }
  }
  return leapYears;
};

export { leapYear, leapYearsBetween };
