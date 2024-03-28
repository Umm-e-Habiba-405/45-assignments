let array:number[] = [1,2,3,4,5,6,7,8,9];  ////Store the numbers 1 through 9 in a array.
     //Loop through the array.
for (let numbers of array ){
    let ordinalEnding:string;
    if( numbers==1){
        ordinalEnding= "st" ;
    }
    else if(numbers==2){
        ordinalEnding ="nd";
    }
    else if(numbers==3){
        ordinalEnding="rd";         
    }
    else if(numbers==4){
        ordinalEnding="th";
    }
   else  if(numbers ==5){
        ordinalEnding ="th";
    }
    else if(numbers ==6){
        ordinalEnding ="th";
    }
    else if(numbers ==7){
        ordinalEnding ="th";
    }
    else if(numbers ==8){
        ordinalEnding ="th";
    }
    else{
        ordinalEnding ="th";
    }
console.log(`${numbers}${ordinalEnding}`);
}