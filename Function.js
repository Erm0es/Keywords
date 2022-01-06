/*A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function,
it should take some input and return an output where there is some obvious relationship between the input and the output.*/

function myFunc(theObject){
    theObject.make = 'Toyota';
}

var mycar = {make: 'Honda',model: 'Accord',year: 1998};
var x,y;

x = mycar.make; //x gets the value "Honda"

myFunc(mycar);
y = mycar.make; //y gets the value "Toyota" (the make property was changed by the funtion)

