//any
let data: any = 42;
data = "Now a string";

//unknown
let x: unknown = 10;

//never
function error(): never {
  throw new Error("Something went wrong");
}

//void
function logMessage(): void{
    console.log("This function returns nothing");
}