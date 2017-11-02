interface SearchFunc {
    (source: string, subString: string): boolean;
}

// parameters types are checked one by one by its cooresponding position
let mySearch1: SearchFunc = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

// parameter names can be different
let mySearch2: SearchFunc = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}

// parameters types and return type can be inferred
let mySearch3: SearchFunc  = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

let result: boolean;

result = mySearch1("This is TypeScript", "is");
console.log(result);

result = mySearch2("This is TypeScript", "is");
console.log(result);

result = mySearch3("This is TypeScript", "is");
console.log(result);


