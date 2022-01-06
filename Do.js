/* The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false.*/

let result = '';
let i = 0;

do{
    i = i + 1;
    result = result + i;
}while(i < 5);

console.log(result);
//expected output: "12345"
