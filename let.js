/*The let statement declares a block-scoped local variable, optionally initializing it to a value.*/

let x = 1;

if(x===1){
    let x = 2;

    console.log(x);
    //expected output: 2
}

console.log(x);
//expected output: 1