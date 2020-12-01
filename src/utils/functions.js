import _ from 'lodash'

function dynamicSort(property, order) {
  let sortOrder = 1;
  if (order === "desc") {
    sortOrder = -1;
  }
  return function (a, b) {
    if (property === "price") {
      let result =
        a.price["value"] < b.price["value"]
          ? -1
          : a.price["value"] > b.price["value"]
          ? 1
          : 0;
      return result * sortOrder;
    } else {
      let result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    }
  };
}

export const sortBy = (sort_by, order, products) => {
  return products.sort(dynamicSort(sort_by, order));
};

export const groupBy = (group, array) => {
  const sortArray = sortBy(group, 'asc', array);
  const groupedArray=_.groupBy(sortArray, group);
  
  return groupedArray;
}

