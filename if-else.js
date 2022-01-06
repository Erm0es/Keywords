/*The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.*/

function testNum(a){
    let result;
    if(a > 0){
        result = 'positive';
    } else{
        result = 'NOT positive';
    }
    return result;
}

console.log(testNum(-5));
// expected output: "NOT positive"
console.log(testNum(5));
// expected output: "positive"
