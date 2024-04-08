const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
  it(`returns ["LightHouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it(`returns ["For", "Now", "Lighthouse", "Labs"] for ["Bye", "For", "Now", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Bye", "For", "Now", "Lighthouse", "Labs"]), ["For", "Now", "Lighthouse", "Labs"]);
  });

  it(`returns empty array for ["Hello"]`, () => {
    assert.deepEqual(tail(["Hello"]), []);
  });

  it(`returns empty array for []`, () => {
    assert.deepEqual(tail([]), []);
  });

});
