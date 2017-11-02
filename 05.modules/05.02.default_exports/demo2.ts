import validator from "./ZipCodeValidator";

let myValidator = new validator();

let strings = ["Hello", "98052", "101"];

strings.forEach(s => {
  console.log(`"${s}" ${myValidator.isAcceptable(s) ? " matches" : " does not match"}`);
});