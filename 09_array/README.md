# Array Data Type in TypeScript

## 1. What is Array Data Type
An **array** is a data structure used to store **multiple values** in a single variable.  
In TypeScript:
- Arrays can store values of **the same type** or **different types** (if explicitly allowed).
- Array elements are **ordered** and accessed using their index (starting from `0`).

---

## 2. How to use it
TypeScript syntax for arrays:
```typescript
let arr: type[] = [value1, value2, ...];
let arr: Array<type> = [value1, value2, ...]; // Generic form
````

* You can manipulate arrays using methods like `.push()`, `.pop()`, `.map()`, `.filter()`, `.forEach()`.
* `ReadonlyArray` makes an array immutable (cannot be changed).

---

## 3. Example

```typescript
var user: string[] = ["Prince", "Sam", "Roy"];
var marks: number[] = [23, 45, 67, 78];

var students: Array<string> = ["Sam", "Alt", "Donny"];
students.push("Nolyter");
console.log(students); 
// Output: [ 'Sam', 'Alt', 'Donny', 'Nolyter' ]

var college: ReadonlyArray<string> = ["IET", "JIET", "NIET"];
// college.push("IIT"); // ❌ Error: Cannot modify ReadonlyArray
```

**Note:**

* `string[]` and `Array<string>` are equivalent.
* `ReadonlyArray` prevents modifications.

---

## 4. Where we can use it

* Storing collections of data (names, marks, products, etc.).
* Processing lists using loops and array methods.
* Returning multiple values from a function.
* Maintaining ordered sequences like queues, stacks, or to-do lists.
* Creating immutable arrays for safety (`ReadonlyArray`).

---

## 5. Interview Questions & Answers

### Q1: What is the difference between `string[]` and `Array<string>` in TypeScript?

**Answer:** Both define an array of strings. `string[]` is shorthand syntax, while `Array<string>` uses generic syntax.

---

### Q2: What is a `ReadonlyArray` in TypeScript?

**Answer:** A `ReadonlyArray` is an immutable array — you cannot add, remove, or modify its elements.

---

### Q3: Can arrays in TypeScript store multiple types?

**Answer:** Yes, using a union type:

```typescript
let arr: (string | number)[] = [1, "Two", 3];
```

---

### Q4: How do you iterate over arrays in TypeScript?

**Answer:** Using:

```typescript
for (let i = 0; i < arr.length; i++) { }
for (const item of arr) { }
arr.forEach(item => { });
```

---

### Q5: What happens if you try to modify a `ReadonlyArray`?

**Answer:** The TypeScript compiler will throw an error at compile time.

