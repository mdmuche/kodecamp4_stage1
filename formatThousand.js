function formatThousand(num) {
  if (typeof num !== "number") {
    console.log("must be a number");
    return;
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(formatThousand("jsjsjsjsj")); //> output 1,000,000
