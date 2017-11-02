interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = function (start: number) { } as Counter;
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

console.log(c);

// When interacting with 3rd-party JavaScript, 
// you may need to use patterns like the above 
// to fully describe the shape of the type.