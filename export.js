/*The export statement is used when creating JavaScript modules to export live bindings to functions, objects, 
or primitive values from the module so they can be used by other programs with the import statement. */


// export features declared earlier
export { myFunction, myVariable };

// export individual features (can export var, let,
// const, function, class)
export let myVariable = Math.sqrt(2);
export function myFunction() { /* ... */ };


// export feature declared earlier as default
export { myFunction as default };

// export individual features as default
export default function () { /* ... */ }
export default class {}

// each export overwrites the previous one
