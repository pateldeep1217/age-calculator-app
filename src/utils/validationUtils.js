// Function to determine the maximum number of days in a month for a given year and month
const getMaxDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

// Function to validate the day
const validateDay = (value, getValues) => {
  if (!value) {
    return "Day is required";
  }

  const day = parseInt(value, 10);
  if (day < 1 || day > 31) {
    return "Day must be between 1 and 31";
  }

  const { month, year } = getValues();
  if (!month || !year) {
    return true;
  }

  const maxDaysInMonth = getMaxDaysInMonth(month, year);
  if (day > maxDaysInMonth) {
    return `Day must be between 1 and ${maxDaysInMonth}`;
  }

  return true;
};

// Function to validate the month
const validateMonth = (value) => {
  if (!value) {
    return "Month is required";
  }

  const month = parseInt(value, 10);
  if (month < 1 || month > 12) {
    return "Month must be between 1 and 12";
  }

  return true;
};

// Function to validate the year
const validateYear = (value) => {
  if (!value) {
    return "Year is required";
  }

  const year = parseInt(value, 10);
  const currentYear = new Date().getFullYear();

  if (year > currentYear) {
    return "Year cannot be in the future";
  }

  return true;
};

export { validateDay, validateMonth, validateYear };
