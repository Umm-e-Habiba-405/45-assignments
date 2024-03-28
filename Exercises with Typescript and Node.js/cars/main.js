"use strict";
function createCar(manufacturer, model, ...options) {
    const car = {
        manufacturer,
        model
    };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", "2023"]);
console.log(myCar);
