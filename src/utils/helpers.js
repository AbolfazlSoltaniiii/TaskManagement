export const formatDate = (fullDate) => {
  let { date, month, year } = fullDate;

  if (date === -1 || month === -1 || year === -1) {
    return "";
  }

  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;

  return `${year}-${month}-${date}`;
};
