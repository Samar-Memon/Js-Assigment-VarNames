var $firstName = "Samar";
alert('$firstName = ' + $firstName + '<--- This name is Legal');
document.write('$firstName = ' + $firstName + '<--- This name is Legal' + '<br>' + '<br>');

alert('first$Name = ' + $firstName + '<--- This name is also Legal');
document.write('first$Name = ' + $firstName + '<--- This name is also Legal' + '<br>' + '<br>');

alert('firstName123 = ' + $firstName + '<--- This name is also Legal');
document.write('firstName123 = ' + $firstName + '<--- This name is also Legal' + '<br>' + '<br>');

alert('first_Name = ' + $firstName + '<--- This name is also Legal');
document.write('first_Name = ' + $firstName + '<--- This name is also Legal' + '<br>' + '<br>');

alert('firstName_ = ' + $firstName + '<--- This name is also Legal');
document.write('firstName_ = ' + $firstName + '<--- This name is also Legal' + '<br>' + '<br>');

alert('_firstName = ' + $firstName + '<--- This name is also Legal');
document.write('_firstName = ' + $firstName + '<--- This name is also Legal' + '<br>' + '<br>');


alert('-firstName = ' + $firstName + '<--- This name is Illegal');
document.write('-firstName = ' + $firstName + '<--- This name is Illegal' + '<br>' + '<br>');

alert('first-Name = ' + $firstName + '<--- This name is also Illegal');
document.write('first-Name = ' + $firstName + '<--- This name is also Illegal' + '<br>' + '<br>');

alert('first@Name = ' + $firstName + '<--- This name is also Legal');
document.write('first@Name = ' + $firstName + '<--- This name is also Legal' + '<br>' + '<br>');

alert('first#Name = ' + $firstName + '<--- This name is also Legal');
document.write('first#Name = ' + $firstName + '<--- This name is also Legal' + '<br>' + '<br>');

alert('123firstName = ' + $firstName + '<--- This name is also Legal');
document.write('123firstName = ' + $firstName + '<--- This name is also Legal' + '<br>' + '<br>');