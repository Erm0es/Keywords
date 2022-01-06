/*Class fields are public by default, but private class members can be created by using a hash # prefix.
 The privacy encapsulation of these class features is enforced by JavaScript itself.*/

 class ClassWithPrivateField {
    #privateField;
  }
  
  class ClassWithPrivateMethod {
    #privateMethod() {
      return 'hello world';
    }
  }
  
  class ClassWithPrivateStaticField {
    static #PRIVATE_STATIC_FIELD;
  }
  
  class ClassWithPrivateStaticMethod {
    static #privateStaticMethod() {
      return 'hello world';
    }
  }