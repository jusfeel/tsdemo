interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
console.log("p1:", p1);
p1.x = 5; // error!

let a: number[] = [1, 2, 3, 4];
console.log("a:", a);

let ro: ReadonlyArray<number> = a;
console.log("ro:", ro);

ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!

// type assertion works
a = ro as number[];
console.log("a:", a);

