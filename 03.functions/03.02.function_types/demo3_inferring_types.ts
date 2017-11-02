// myAdd has the full function type
let myAdd1 = function(x: number, y: number): number { return  x + y; };

// The parameters 'x' and 'y' have the type number
// This is called “contextual typing”
let myAdd2: (baseValue: number, increment: number) => number = function(x, y) { return x + y; };
