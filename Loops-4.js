//for-in loop through the properties of an object
//https://www.w3schools.com/jsref/jsref_forin.asp   
var person = {
    fname:"John", 
    lname:"Doe", 
    age:25
}; 
for(let x in person){
    console.log(x+" is "+person[x]);
}