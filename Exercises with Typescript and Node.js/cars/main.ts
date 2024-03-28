interface Car {
    manufacturer: string;
    model: string;
    [key: string]: string; // Allow additional properties with string values
}

function createCar(manufacturer: string, model: string, ...options: [string, string][]): Car {
    const car: Car = {
        manufacturer,
        model
    };

    options.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

const myCar: Car = createCar("Toyota", "Camry", ["color", "blue"], ["year", "2023"]);

console.log(myCar);
