import pipe from "lodash/fp/pipe.js";
import compose from "lodash/fp/compose.js";

function sayHello() {
  return function () {
    return "hello world";
  };
}

function greet(fnMessage) {
  console.log(fnMessage());
}

greet(sayHello());

let input = "    Javascript    ";
let output = `<div>${input}</div>`;

const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("span"));
console.log(transform(input));
