//Code Already Compiled with Errors

const rapid = (str) => {
  let newString = "";
  let i;
  for (i = 0; i < str.length; i++) {
    if(str.charAt(i) != "o") {
      newString += str.charAt(i);
    }
}
  return newString.toUpperCase();
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));  