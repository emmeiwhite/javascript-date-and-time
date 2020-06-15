document.addEventListener('DOMContentLoaded', javscriptCodeLoaded);

function javscriptCodeLoaded(e) {
  let date = new Date();
  console.log(date);
  console.log("getFullYear()", date.getFullYear());
  console.log("getMonth()", date.getMonth());
  console.log("getDay()", date.getDay());
  console.log("getHours()", date.getHours());
  console.log("getMinutes()", date.getMinutes());
  console.log("getSeconds()", date.getSeconds());
  console.log("getDate()", date.getDate());

  //  timestamps
  console.log(Date.now()); // Static Method
  console.log(date.getTime());

  // date strings
  console.log(date.toDateString());
  console.log(date.toTimeString());
  console.log(date.toLocaleString());
}