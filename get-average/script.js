let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 29};

let arr = [ pete, john, mary];

function getAverageAge (arr) {
  let totalAge =  arr.reduce((sum, user) => {
    return sum + user.age
  }, 0);
  let result = totalAge / arr.length
return result
}
getAverageAge(arr)
alert (getAverageAge(arr));

