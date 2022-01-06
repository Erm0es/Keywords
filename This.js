/*In most cases, the value of this is determined by how a function is called (runtime binding). 
It can't be set by assignment during execution, and it may be different each time the function is called.*/

const test = {
    prop: 42,
    func: function(){
        return this.prop;
    },
};

console.log(test.func());
//expected output: 42