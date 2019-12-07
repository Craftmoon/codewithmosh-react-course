import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  /**
   * slice the items array starting from startIndex, take the first X numbers (pageSize) and turn it
   * into an array and finally return it
   *  */

  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
