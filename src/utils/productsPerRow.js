// Grouping products per row.
export const productsPerRow = (data, cols) => {
  const reducer = (prev, curr) => {
    if (prev[prev.length - 1].length < cols) {
      prev[prev.length - 1].push(curr);
      return prev;
    }

    return [...prev, []];
  };

  return data.reduce(reducer, [[]]);
};
