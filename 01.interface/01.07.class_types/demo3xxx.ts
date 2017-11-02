/**
 * When working with classes and interfaces, 
 * it helps to keep in mind that a class has two types: 
 * the type of the static side and the type of the instance side. 
 * You may notice that if you create an interface with a construct 
 * signature and try to create a class that implements this 
 * interface you get an error:
 */
interface ClockConstructor {
    new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) { }
}