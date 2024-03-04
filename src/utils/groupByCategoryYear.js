import { getYear } from "./forvatedDate";

export default function groupByCategoryYear(data) {
  const groupedByCategoryObj = {};
  const totalByYear = {};

  for (const value of data) {
    const { dt, txt } = value;
    const year = getYear(dt);
    if (!groupedByCategoryObj[txt]) {
      groupedByCategoryObj[txt] = {};
    }
      groupedByCategoryObj[txt][year] =
      (groupedByCategoryObj[txt][year] || 0) + value.value;

    totalByYear[txt] = (totalByYear[year] || 0) + value.value;
  }
  return groupedByCategoryObj;
}
