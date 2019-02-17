var myCat = {
  name: 'Super Boss',
  color: 'Gray',
  weight: 3.7
};

var myCatString = JSON.stringify(myCat);
console.log(myCatString);

var string = '{"name": "Sen", "weight": 5.2, "isDead": false}';
var myDog = JSON.parse(string);
console.log(myDog);
