/*Both static and instance public fields are writable, 
enumerable, and configurable properties. As such, unlike their private counterparts, they participate in prototype inheritance.*/

class ClassWithInstanceField{
    instanceField = 'instance field'
}

class ClassWithSTaticField{
    static staticField = 'static field'
}

class ClassWithPublicInstanceMethod{
    publicMethod(){
        return 'hello world'
    }
}
