//Array
var emp:string[] = ["Prince", "Avya", "Navya"];

//Tuple
var employee:[string, number, boolean,number] = ["Prince", 23, true,50000];


//it pushes by this but not mannually
employee.push("Noida");

console.log(employee);

var employee2:readonly[string, number, boolean,number] = ["Prince", 23, true,50000];
// employee2.push("Noida"); //error