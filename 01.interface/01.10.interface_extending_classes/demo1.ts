class Control {
    private state: any;
}

// Inherit only declartions , not implementations
// Interfaces inherit even the private and protected members of a base class.

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {

}

// Error: Property 'state' is missing in type 'Image'.
class Picture implements SelectableControl {
    select() { }
}

class GeoLocation {

}

// See why Picture fail to implement SelectableControl
// Button and TextBox are not related except both inherited from Control
// and that's why Button can implements SelectableControl without problem