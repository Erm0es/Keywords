//The in operator returns true if the specified property is in the specified object or its prototype chain.

const car = {make: 'Honda',model: 'Accord',year: 1998};

console.log('make' in car);
//Expected output: true.

delete car.make;
if('make' in car === false){
    car.make = 'Suzuki';
}

console.log(car.make);
