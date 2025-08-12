## **1. What is Symbol Data Type**

* **Definition:** In JavaScript, a `Symbol` is a primitive data type introduced in **ES6 (ECMAScript 2015)**.
* **Purpose:** It represents a **unique and immutable value**.
* **Uniqueness:** Even if two symbols have the same description, they are **not equal**.
* **Usage:** Often used as object property keys to avoid name clashes.

---

## **2. How to use it**

You create a symbol using the `Symbol()` function:

```javascript
let sym = Symbol();
let symWithDesc = Symbol('description');
```

* **No `new` keyword:** `new Symbol()` throws an error.
* Optional **description** helps debugging, but does **not** affect equality.

---

## **3. Example (Your Code Explained)**

```javascript
var sym1 = Symbol();
var sym2 = Symbol();
console.log(sym1);          // Symbol()
console.log(sym2);          // Symbol()
console.log(sym1 == sym2);  // false (unique values)

var sym3 = Symbol('abc');
var sym4 = Symbol('abc');
console.log(sym3);          // Symbol(abc)
console.log(sym4);          // Symbol(abc)
console.log(sym3 == sym4);  // false (still unique)
```

**Why false?**
Even though `sym3` and `sym4` share the same description `"abc"`, each `Symbol()` call creates a **brand new unique value**.

---

## **4. Where we can use it**

* **Unique Object Keys**
  Prevents accidental overwriting:

  ```javascript
  const id = Symbol('id');
  const user = {
    name: "Alice",
    [id]: 123
  };
  console.log(user[id]); // 123
  ```
* **Hiding object properties** from `for...in` loops or `Object.keys()`.
* **Defining constants** that never clash with other code.
* **Implementing private-like fields** in objects.

---

## **5. Interview Questions**

Here are common ones:

1. **What is the purpose of Symbol in JavaScript?**
2. **How is Symbol different from string keys in objects?**
3. **Can two symbols with the same description be equal?** (No)
4. **Are symbols enumerable?** (No, they don’t appear in normal loops)
5. **How can you get all symbol keys from an object?** (`Object.getOwnPropertySymbols(obj)`)

