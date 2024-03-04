import { getMonth, getYear } from "./forvatedDate";

export default function groupByYearMonth(data) {
  const groupedByYearMonth = {};
  const totalByYear = {};

  for (const value of data) {
    // console.log(value);
    const { dt } = value;
    const year = getYear(dt);
    const month = getMonth(dt);
    if (!groupedByYearMonth[year]) {
      groupedByYearMonth[year] = {};
    }
    groupedByYearMonth[year][month] =
      (groupedByYearMonth[year][month] || 0) + value.value;

    totalByYear[year] = (totalByYear[year] || 0) + value.value;
  }
  // return groupedByYearMonth;
  return totalByYear;
}
