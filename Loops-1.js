var i = 0;
for(;i<10;i++){
    //console.log("Hi,"+i);
}
console.log("Labeled Statement");
/*Attach a label to any statement to serve as an identifier so you can refer to it elsewhere 
in your program*/
myLoop:
for(let j=0;j<5;j++){
    //console.log("Hey "+j);
    if(j==3)
        break;
}
//label and break
/*When you use break without a label, it terminates the innermost 
enclosing while, do-while, for, or switch immediately and transfers 
control to the following statement*/
/*When you use break with a label, it terminates the specified labeled statement.*/

myBrkLoop:
for(let x=0;x<10;x++){
    for(let y=0;y<5;y++){
        console.log("At X:"+x+" and Y"+y);
        if(y==3)
            //break;
            break myBrkLoop;
    }
}