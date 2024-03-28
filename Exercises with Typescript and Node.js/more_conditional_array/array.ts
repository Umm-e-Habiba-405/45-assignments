//------ Question No:24---------//
  // You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
//Tests using the lower case function
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//Tests using "and" and "or" operators
//Test whether an item is in a array
//Test whether an item is not in a array
  
  //Tests for equality and inequality with string
let string1:string = "It's not a bug";
let string2:string = "Crack the Code, Change the World.";
let string3:string ="It's not a bug";


//check string1 equal to string2//

console.log("Is string1 is equal to string2? I predict false");
console.log(string1==string2);

////check string2 equal to string3//

console.log("Is string2 is equal to string3? I predict False");
console.log(string2!=string3);

//check string1 equal to string3//


console.log("Is string1 is equal to string3? I predict true");
console.log(string3 == "It's not a bug");

         // Tests using the lower case function
       
 let  cases:string =" focus"; 
 //check function uppercase or lowercase//

 console.log("Is string is uppercase to focus? I predict False ");
 console.log(cases.toUpperCase()=="focus");

 ///Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

 let $a=100;
 let _b =50;
 //check the x is equal to 100//

 console.log(" Is x  equal to 100? I predict True");
 console.log($a==100);
 
 //check the y is equal to 100//

 console.log(" Is y  equal to 100? I predict False");
 console.log(_b!=50);

let num1=200;
let num2=150;
//check  num1 is graterthan num2//

console.log("Is num1 is graterthan num2? I prdict true");
console.log(num1>num2);

//check  num1 is lessthan num2//

console.log("Is num1 is lessthan num2? I prdict false");
console.log(num1<num2);


let $number=5;
let number=20;


// check num1 gratherthan equal to num2
console.log("Is num1 multiply by 4 and gratherthan equl to 20?I predict True");
console.log($number*4>=20);

// check num1 gratherthan equal to num2

console.log("Is num1 multiply by 4 and lessthan equl to num2?I predict False");
console.log(number*4<=num1); 


           //  Tests using "and" and "or" operators
let a= 90;
let b=60;

//USING OR OPERTARE//

if(a<70||b>50){
    console.log("I predict True");}
else{
    console.log("Ipredict False");

}

let x=15;
let y=20;

//USING AND OPERATOR//
if(x>10&&y>30){
    console.log("Ipredict True")
}
else{
    console.log("I predict False");
}

