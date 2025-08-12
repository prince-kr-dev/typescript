# Tuple Data Type in TypeScript

## 1. What is Tuple Data Type
A **tuple** in TypeScript is a fixed-length, ordered list of elements where each position has a specific type.  
It is like an array, but with a predefined structure.

**Example:**
```ts
var employee: [string, number, boolean, number] = ["Prince", 23, true, 50000];
````

* 1st element: `string` → `"Prince"`
* 2nd element: `number` → `23`
* 3rd element: `boolean` → `true`
* 4th element: `number` → `50000`

---

## 2. Tuple vs Array

| Feature                | Tuple                            | Array                                   |
| ---------------------- | -------------------------------- | --------------------------------------- |
| **Type of elements**   | Each position has a defined type | Usually all elements have the same type |
| **Length**             | Fixed length (predefined)        | Dynamic length                          |
| **Access by position** | Types are enforced per position  | Same type for all elements              |
| **Example**            | `["Prince", 23, true]`           | `["Prince", "Avya", "Navya"]`           |

**Code:**

```ts
// Array
var emp: string[] = ["Prince", "Avya", "Navya"];

// Tuple
var employee: [string, number, boolean, number] = ["Prince", 23, true, 50000];
```

---

## 3. Example with Behavior

```ts
var employee: [string, number, boolean, number] = ["Prince", 23, true, 50000];

// It works (but breaks fixed structure)
employee.push("Noida"); 
console.log(employee);

// Read-only tuple
var employee2: readonly [string, number, boolean, number] = ["Prince", 23, true, 50000];
// employee2.push("Noida"); // ❌ Error: cannot modify readonly tuple
```

**Why does `push` work here?**
TypeScript allows `push` on non-readonly tuples due to JavaScript’s underlying flexibility, but this can lead to unexpected structure changes.
Use **`readonly`** to truly enforce immutability.

---

## 4. Where We Can Use Tuples

* **Fixed structure data**

  * Employee: `[Name, Age, IsActive, Salary]`
  * GPS: `[latitude, longitude]`
  * RGB color: `[red, green, blue]`
* **Returning multiple values** from a function with different types
* **Strict API parameter typing**

---

## 5. Interview Questions

**Q1:** What is the main difference between a tuple and an array in TypeScript?
**A:** A tuple has a fixed length and predefined types for each position, whereas an array usually has elements of the same type and can grow/shrink dynamically.

**Q2:** Can you change the length of a tuple in TypeScript?
**A:** Technically yes, using methods like `push` or `pop`, but it breaks the fixed structure. Use `readonly` tuples to prevent changes.

**Q3:** Why might you use a tuple instead of an object?
**A:** Tuples are lighter and enforce positional typing, which is useful when order is meaningful and consistent.

**Q4:** What happens if you try to assign the wrong type to a tuple element?
**A:** TypeScript will throw a compile-time error because each position has a defined type.

**Q5:** How do you make a tuple immutable?
**A:** By declaring it as `readonly`, for example:

```ts
readonly [string, number] = ["Hello", 42];
