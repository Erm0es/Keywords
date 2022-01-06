//The static import statement is used to import read only live bindings which are exported by another module.


//the module: file.js
function getJSON(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      callback(this.responseText)
    };
    xhr.open('GET', url, true);
    xhr.send();
  }
  
  export function getUsefulContents(url, callback) {
    getJSON(url, data => callback(JSON.parse(data)));
  }




  //the main program: main.js
  import { getUsefulContents } from '/modules/file.js';

getUsefulContents('http://www.example.com',
    data => { doSomethingUseful(data); });