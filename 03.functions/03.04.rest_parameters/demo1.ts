// The compiler will build an array of the arguments 
// passed in with the name given after the ellipsis (...), 
// allowing you to use it in your function.
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

console.log(employeeName);