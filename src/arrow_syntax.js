let val = " world";

hello1 = function () {
  return "hello world";
};

hello2 = () => {
  return "hello world";
};

hello3 = () => "hello world";

hello4 = (val) => "hello" + val;

hello5 = (val) => "hello" + val;

console.log(hello1());
console.log(hello2());
console.log(hello3());
console.log(hello4(val));
console.log(hello5(val));
