import * as yup from "yup";

const getMaxDaysInMonth = (month, year) => new Date(year, month, 0).getDate();

const schema = yup.object().shape({
  day: yup
    .number()
    .typeError("Day must be a number")
    .transform((value, originalValue) => {
      // If originalValue is an empty string, return undefined to let .required() handle it
      return originalValue === "" ? undefined : value;
    })
    .required("This field is required")
    .min(1, "Day must be at least 1")
    .test(
      "valid-day",
      "Invalid day for the given month and year",
      function (value) {
        const { month, year } = this.parent;
        if (!month || !year) return true;
        const maxDaysInMonth = getMaxDaysInMonth(month, year);
        return value >= 1 && value <= maxDaysInMonth;
      },
    ),

  month: yup
    .number()
    .typeError("Month must be a number")
    .transform((value, originalValue) => {
      // If originalValue is an empty string, return undefined to let .required() handle it
      return originalValue === "" ? undefined : value;
    })
    .required("This field is required")
    .min(1, "Month must be between 1 and 12")
    .max(12, "Month must be between 1 and 12"),

  year: yup
    .number()
    .typeError("Year must be a number")
    .transform((value, originalValue) => {
      // If originalValue is an empty string, return undefined to let .required() handle it
      return originalValue === "" ? undefined : value;
    })
    .required("Year is required")
    .max(new Date().getFullYear(), "Year cannot be in the future"),
});

export default schema;
