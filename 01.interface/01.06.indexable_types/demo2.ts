// The type returned from a numeric indexer 
// must be a subtype of the type returned 
// from the string indexer
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// Error: indexing with a 'string' will sometimes get you an Animal!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}