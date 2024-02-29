//Hello World

console.log("Hello World");

//Variables

let found: boolean =true;
let grade: number= 25;
let firstname: string="Oguz";
let lastname: string='Aslan';

firstname="Oguz2";

console.log(found);
console.log(firstname + lastname);

//Loops

for (let i=0; i<5; i++){
    console.log(i);
}

//Reviews 

let reviews: number[]=[5,4,3.5,2,1];

let total: number=0;

for (let i=0; i<reviews.length; i++){
    console.log(reviews[i]);
    total += reviews[i];
}

let average: number = total/reviews.length;

console.log("Review average = " + average);

//Sports -- Arrays

let sportsOne: string[]=["Golf", "Cricket", "Tennis", "Swimming"];

sportsOne.push("Baseball");
sportsOne.push("Football");

for (let i=0; i<sportsOne.length; i++){
    console.log(sportsOne[i]);
}

for (let tempSport of sportsOne){
    if (tempSport == "Golf"){
        console.log(tempSport + " << My Favorite");
    }else{
        console.log(tempSport);
    }
}
