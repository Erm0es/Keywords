/*The await operator is used to wait for a Promise. It can only be used inside an async function within regular JavaScript code; 
however it can be used on its own with JavaScript modules.*/


function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
  }
  
  f1();