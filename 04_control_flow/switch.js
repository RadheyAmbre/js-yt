// Syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// key --> the value we have to check.
// break -->  it stops the execution of code inside that block and jumps out from there.
// If no "break" is given, then whatever written after that will also be executed.
// except default
const month = 3
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log("default case match");
        break;
}