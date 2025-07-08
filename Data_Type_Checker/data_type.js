function checkDataType(value) {
  if (value === null) {
    return "null";
  }
  return typeof value;
}

console.log(checkDataType(42));          // "number"
console.log(checkDataType("Hello"));     // "string"
console.log(checkDataType(true));        // "boolean"
console.log(checkDataType(undefined));   // "undefined"
console.log(checkDataType({ name: "subhi" })); // "object"
console.log(checkDataType([1, 2, 3]));          // "object"
console.log(checkDataType(null));        // "null"
console.log(checkDataType(function() {})); // "function"
console.log(checkDataType(Symbol("sym"))); // "symbol"
console.log(checkDataType(BigInt(12345678901234567890))); // "bigint"
console.log(checkDataType(new Date()));  // "object"
console.log(checkDataType(/regex/));     // "object"
console.log(checkDataType(new Map()));   // "object"
console.log(checkDataType(new Set()));   // "object"
console.log(checkDataType(new WeakMap())); // "object"
console.log(checkDataType(new WeakSet())); // "object"