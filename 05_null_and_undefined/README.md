# Null and Undefined in TypeScript

## 1. What is Null Data Type
- `null` is a special value that represents an intentional absence of any object value.
- In TypeScript, `null` can be assigned to a variable only if its type allows it (e.g., `string | null`).

## 2. How to Use It
- You must explicitly include `null` in the type if you want to allow it.
```ts
var userName: null | string = null;
````

* Here, `userName` can hold either a string or `null`.

## 3. What is Undefined Data Type

* `undefined` means a variable has been declared but has not been assigned any value.
* It’s the default value of variables that are not initialized.

## 4. How to Use Undefined

* You can explicitly type a variable as `undefined` or a union type that includes it.

```ts
var item: undefined | string = undefined;
```

## 5. Possible Values

* For `null | string`, possible values: `"Any string"` or `null`.
* For `undefined | string`, possible values: `"Any string"` or `undefined`.

## 6. Run with HTML File

You can run this TypeScript code in the browser by:

1. Writing `.ts` file.
2. Compiling with:

   ```bash
   tsc file.ts
   ```
3. Linking the generated `.js` in an HTML file:

   ```html
   <script src="file.js"></script>
   ```

## 7. Interview Question

**Q:** What’s the difference between `null` and `undefined`?
**A:**

* `null` → Explicitly set to “no value”.
* `undefined` → Variable declared but not assigned a value.

---

## 8. Comparison Table

| Feature             | null                                                     | undefined                                                  |
| ------------------- | -------------------------------------------------------- | ---------------------------------------------------------- |
| Meaning             | Intentional absence of value                             | Variable declared but not yet assigned a value             |
| Type (`typeof`)     | `object` (quirk in JS)                                   | `undefined`                                                |
| Default value       | Not by default, must be assigned                         | Default for uninitialized variables                        |
| Explicit assignment | Yes                                                      | Optional                                                   |
| Common use case     | Resetting a variable or indicating "no value" on purpose | Representing uninitialized variables or missing parameters |

---

## Full Example:

```ts
var userName: null | string = null;

var login: boolean = true;

if (login) {
    userName = "Prince";
}

console.log(userName);          // Prince
console.log(typeof(null));      // object

var item: undefined | string = undefined;
console.log(item);              // undefined

item = "Prince Kumar";
console.log(item);              // Prince Kumar

