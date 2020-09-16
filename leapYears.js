const leapYear = (year) => {
  if (year % 400 === 0) {
    return true;
  } else if (year % 4 !== 0) {
    return false;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 !== 0) {
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

const closestLeapYear = (year) => {
  if (leapYear(year)) return year;
  else if (leapYear(year - 4) && leapYear(year + 4)) {
    return [year - 4, year + 4];
  } else if (leapYear(year - 2) && leapYear(year + 2)) {
    return [year - 2, year + 2];
  } else
    for (let i = year - 1; i < year + 4; i++) {
      if (leapYear(i)) {
        return i;
      }
    }
};
module.exports = { leapYear, leapYearsBetween, closestLeapYear };
