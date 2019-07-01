//for-in loop
/*for...in iterates over property names*/
let arr = [10, 20, 30,43];
for(let i in arr){
    console.log(i);
    //logs 0,1,2,3
}

for(let j of arr){
    console.log(j);
    //logs 10,20,30,43(basically the contents of the array)
}
