//creating a function with parameters which return a valvues in string 
function cityCountry(city:string, country :string) :string {
    return `${city},${country}`;
}
//calling a function in print the return value

console.log(cityCountry("karachi", "pakistan"));
console.log(cityCountry("Tokyo", "Japan"));
