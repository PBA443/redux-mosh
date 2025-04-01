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

const person = {
  name: "John",
  address: { line1: "homagama", line2: "waligama" },
};
const nperson = { ...person };
const updated = { ...person, name: "Bob", address: { ...person.address } };
//updated.address.line1 = "sinigama";
nperson.address.line1 = "changed";

console.log(person, nperson, updated);

const numbers = [1, 2, 3, 4];

const index = numbers.indexOf(2);

const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

const remove = numbers.filter((n) => n !== 2);

const update = numbers.map((n) => (n == 2 ? 20 : n));

console.log(update);
