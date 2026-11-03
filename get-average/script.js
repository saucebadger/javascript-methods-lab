let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 29};

let arr = [ pete, john, mary];

function getAverageAge (arr) {
  let result =  (arr[0].age + arr[1].age + arr[2].age) / arr.length;
return result
}
getAverageAge(arr)
alert (getAverageAge(arr));

