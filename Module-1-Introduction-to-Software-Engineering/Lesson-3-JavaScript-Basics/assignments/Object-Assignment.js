// SUBMIT A LINK TO THE GITHUB REPO FOR THIS ASSIGNMENT
// 1. Create an object for your dream vehicle
// // Give it a minimum of 6 key-value pairs
// // This object should contain many datatypes (string, number, boolean, null, array)
const car = {
    brand: 'MINI Cooper Electric',
    model: 2024,
    color: 'blue',
    horsepower: 134,
    dimensions: ['152.2 in Length', '68 in. Width', '55.7 in. Height'],
    topSpeed: '0-60mph / 0-96kmph'
}

// 2. Using dot-notation Log to the console 3 properties from the previous object
console.log(car.brand, car.dimensions, car.topSpeed)

// 3. Using bracket-notation Log to the console 3 properties from the previous object
console.log(car['model'], car['color'], car['horsepower'])

// 4.Try and log a property that doesn't already exist - what output do we get?
console.log(car['weight'])

// 5. Add a new key-value pair to the vehicle. 
car.weight = '2,711 lbs/1,230 kg'

// 6. Using bracket-notation update a property on the vehicle. 
car['color'] = 'red'

// 7. Using dot-notation update a property on the vehicle. 
car.weight = '2,769 lb/1,255 kg'

// 8. Create a method for turning your vehicle on
function startCar(power){
    if(power === true){
        car.stop = stopCar(false)
        return 'Vroom, vroom!'
    }
    else{
        return 'Please start your engine.'
    }
}

car.start = startCar(false)

// 9. Create a method for turning your vehicle off
function stopCar(power){
    if(power === true){
        car.start = startCar(false)
        return 'SKRRRRR!'
    }
    else{
        return 'Still driving...'
    }
}

car.stop = stopCar(false)

//10.   
// // a. Check if your vehicle is on (it should be off)
console.log(car.start)

// // b. Start your vehicle
car.start = startCar(true)

// // c. Check if your vehicle is on (it should be on)
console.log(car.start)

// // d. Stop your vehicle
car.stop = stopCar(true)
console.log(car.stop)

// // e. Check if your vehicle is on (it should be on)
console.log(car.start)



