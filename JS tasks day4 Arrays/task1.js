console.log("1-");
{
  let num = [1, 2, 3, 4, 5];
  console.log(num.length);
}

//################two##################
console.log("2-");
{
  let num = [1, 2, 3, 4, 5];
  for (x of num) {
    console.log(x);
  }
}

//################three################
console.log("3-");
{
  let num = [1, 2, 3, 4, 5];
  for (x in num) {
    console.log(num[x]);
  }
}

//################four################
console.log("4-");
{
  let num = [1, 2, 3, 4, 5];
  let arr = Array.isArray(num);
  console.log(arr);
}

//################five################
console.log("5-");
{
  let num = { 0: "a", 1: "b", 2: "c", length: 3 };
  let arr = Array.from(num);
  console.log(arr);
}

//################six################
console.log("6-");
{
  let num = [1, 2, 3, 4, 5];
  num.forEach(fun);
  function fun(value) {
    console.log(value);
  }
}

//################ mid/ one################
console.log("mid,1-");
{
  let num1 = [1, 2, 3];
  let num2 = [4, 5, 6];
  let newNum = num1.concat(num2);
  console.log(newNum);
}

//################ mid/ two################

console.log("mid,2-");
{
  let num = [1, 2, 3, 4, 5, 6];
  let numIndex = num.indexOf(3);
  console.log(numIndex);
}

//################ mid/ three################
console.log("mid,3-");
{
  let num = [1, 2, 3, 4, 5, 6];
  num.splice(2, 2);
  console.log(num);
}

//################ mid/ four################
console.log("mid,4-");
{
  let num = [1, 2, 3, 4, 5, 6];
  let newNum = num.slice(1, 2);
  console.log(newNum);
}

//################ mid/ five################
console.log("mid,5-");
{
  let num = [1, 2, 3, 4, 5];
  let numString = num.join();
  console.log(numString);
}

//################ mid/ six################
console.log("mid,6-");
{
  let num = "1,2,3,4,5";
  let numArray = num.split();
  console.log(numArray);
}

//################ mid/ seven################
console.log("mid,7-");
{
  let num = Array.of(1, 2, 3);
  console.log(num);
}

//################ mid/ eight################
console.log("mid,8-");
{
  let num = [1, 2, 3, 4, 5];
  console.log(num.fill(0, 0, 3));
}

//################ mid/ nine################
console.log("mid,9-");
{
  let num = [1, 2, 3, 4, 5];
  let newNum = num.copyWithin(1, 0, 1);
  console.log(newNum.copyWithin(2, 0, 1));
}

//################ mid/ ten################
console.log("mid,10-");
{
  let fruits = ["orange", "apple", "cherry", "banana"];
  fruits.sort();
  console.log(fruits);
}

//################ mid/ eleven################

console.log("mid,11-");
{
  let fruits = ["apple", "banana", "cherry"];
  fruits.reverse();
  console.log(fruits);
}

//################ adv/ one################

console.log("adv,1-");
{
  let num = [1, 2, 3, 4, 5];
  let newNum = num.map((value) => value * 2);
  console.log(newNum);
}

//################ adv/ two################
console.log("adv,2-");
{
  let num = [1, 2, 3, 4, 5];
  let newNum = num.filter((value) => value % 2 === 0);
  console.log(newNum);
}

//################ adv/ three################
console.log("adv,3-");
{
  let num = [1, 2, 3, 4, 5];
  let newNum = num.reduce((value, total) => total + value);
  console.log(newNum);
}
