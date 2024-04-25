const year = new Date();
const month = new Date();
const day = new Date();

console.log(
  year.getFullYear() + '年' +
  (month.getMonth() + 1) + '月' +
  day.getDate() + '日'
);