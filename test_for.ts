
// the shape of Array is Object

let a: Object = {a:1,b:2,c:3};
let b: number[] = [1,2,3];
let c: Array<number> = [1,2,3];
let f: () => void = () => console.log("hi");

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof f);
console.log(a instanceof Array);
console.log(a instanceof Object);
console.log(b instanceof Array);
console.log(b instanceof Object);
console.log(c instanceof Array);
console.log(c instanceof Object);

console.log(f instanceof Function);

// loop objects
for ( let i in a ) {
	console.log(i);
}

// Class, Interface
// class A {}
// interface I{}
// class B implements I {}

// let i : I;
// let bx: B = new B();

// console.log("typeof i", typeof i);
// console.log("typeof bx", typeof bx);
// console.log("typeof A:", typeof A);
// console.log("bx instanceof B", bx instanceof B);
// console.log("i instanceof B", i instanceof B);


// Enum
// enum E { X, Y, Z}
// let e: E = E.X;
// console.log(e);
// console.log(E);
// console.log("typeof e", typeof e);
// console.log("typeof E", typeof E);














