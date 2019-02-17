var students = ['Product Owner', 'Scrum Master', 'Development Team'];

var string = students.reduce(function(string, item) {
  return string + '<li>' + item + '</li>' ;
}, '');

var resultString = '<ul>' + string + '</ul>';
console.log(resultString);
