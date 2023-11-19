export const compareDate = (date, step_, setPrevDate) => {
  const start = step_ === 1 && new Date(date);
  const end = step_ === 2 && new Date(date);
  step_ === 1 && setPrevDate(start);
  return {start, end};
};
