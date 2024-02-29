console.log("Hello World");
console.log("Hello World2");
//variables
var found = true;
var grade = 25;
var firstname = "Oguz";
var lastname = 'Aslan';
firstname = "Oguz2";
console.log(found);
console.log(firstname + lastname);
//loops
for (var i = 0; i < 5; i++) {
    console.log(i);
}
//reviews
var reviews = [5, 4, 3.5, 2, 1];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
