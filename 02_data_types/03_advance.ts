//union 
let value: string | number;
value = "Prince";
value = 23;

//type alias
type ID = string | number;
let userID: ID = "user123";

//function 
let add: (x: number, y: number) => number;
add = (x,y) => x+y;