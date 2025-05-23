function add7(num) {
  console.log(+num + 7);
}

function multiply(num1, num2) {
  console.log(+num1 * +num2);
}

function capitalize(string) {
  let result = string.slice(0, 1).toUpperCase() + string.slice(1);
  console.log(result);
}

function lastLetter(string) {
  // Remove all non-alphabetical characters from string
  let result = string.replace(/([^A-Z]+)/i, "");

  if (result.length <= 0) {
    return undefined;
  }

  console.log(result[result.length - 1]);
}
