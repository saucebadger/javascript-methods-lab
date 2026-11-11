let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById (arr) {
  return arr.reduce((result, user) => {
   result[user.id] = user;
    return result;

  }, {});
  
}
let usersById = groupById(users);
alert("Users by ID:\n" + JSON.stringify(usersById, null, 2));