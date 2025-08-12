# BigInt Data Type in JavaScript

## 1. What is `bigint`?
`bigint` is a special JavaScript data type used to store **integers larger than the safe integer limit** of the `number` type.  
The **safe integer limit** in JavaScript is:

```javascript
Number.MAX_SAFE_INTEGER // 9007199254740991
````

Any integer beyond this limit may cause precision loss when using `number`.

---

## 2. When Should We Use It?

Use `bigint` when:

* Working with **very large integers** (e.g., cryptography, blockchain, astronomical data).
* Accuracy is critical and rounding errors are unacceptable.
* Storing large IDs from databases that exceed the safe integer limit.

---

## 3. Example

### ❌ Without `bigint` (Precision Loss Possible)

```javascript
var bignumber = 9007199254740991;
var y = 2;
console.log(bignumber + y); // May give imprecise result
```

### ✅ With `bigint` (Exact Result)

```typescript
var bignumber: bigint = 9007199254740991n; // 'n' suffix makes it a bigint
var x = 1n;
var y = 2n;

console.log(bignumber + y); // 9007199254740993n (exact)
```

---

## 4. Mixing Issue

You **cannot** mix `number` and `bigint` directly:

```javascript
var big = 5n;
var small = 2;
console.log(big + small); // ❌ TypeError
```

You must explicitly convert:

```javascript
console.log(big + BigInt(small)); // ✅ Works
```

---

## 5. Interview Questions

1. What is the difference between `number` and `bigint` in JavaScript?
2. Why do we need `bigint` if JavaScript already has `number`?
3. What is the safe integer limit in JavaScript?
4. How do you convert a `number` to `bigint` and vice versa?
5. Can you use `bigint` with Math functions?
   **Answer:** No, `Math` methods do not work with `bigint`.

---

## 📌 Number vs BigInt Comparison Table

| Feature                 | `number`                             | `bigint`                          |
| ----------------------- | ------------------------------------ | --------------------------------- |
| Safe range              | ± 9,007,199,254,740,991              | No limit (depends on memory)      |
| Suffix                  | None                                 | `n` (e.g., `10n`)                 |
| Precision               | May lose precision beyond safe range | Exact for integers                |
| Mixing with other types | Can mix with other numbers           | Cannot mix with `number` directly |
| Math functions          | ✅ Supported                          | ❌ Not supported                   |

---

**Example Output:**

```typescript
var bignumber: bigint = 9007199254740991n;
var y = 2n;
console.log(bignumber + y); // 9007199254740993n
