/*The static keyword defines a static method or property for a class, or a class static initialization block.
Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.*/

class ClassWithStaticMethod {
    static staticProperty = "someValue"
    static staticMethod(){
        return 'static method has been called'
    }
    static {
        console.log('Class static intialization block called');
    }
}

console.log(ClassWithSTaticMethod.staticProperty);
//Output "someValue"
console.log(ClassWithStaticMethod.staticMethod());
//Output: "static method has been called"
