/*Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment
, nd it can't be redeclared.However, if a constant is an object or array its properties or items can be updated or removed.*/

const number = 42;

try{
    number = 99;
} catch (err){
    console.log(err);
    //expected output: TypeError: invalid assignment to const 'number'
}

console.log(number);
//expected output: 42
