
# Number Data Type in TypeScript

The `number` data type in TypeScript is used to represent both integer and floating-point numbers. 
TypeScript supports decimal, hexadecimal, binary, and octal literals.

## 1. Apply Number Data Type
You can explicitly declare a variable with the `number` type.

```typescript
let age: number = 25;
console.log(age); // 25
```

## 2. Redeclare Issue
Redeclaring the same variable in the same scope using `let` or `const` will throw an error.

```typescript
let count: number = 5;
// let count: number = 10; // ❌ Error: Cannot redeclare block-scoped variable 'count'
```

## 3. How to Add Number with Data Type
```typescript
let num1: number = 10;
let num2: number = 20;
let sum: number = num1 + num2;
console.log(sum); // 30
```

## 4. How to Use Binary and Hexadecimal Numbers
```typescript
let binary: number = 0b1010; // Binary for decimal 10
let hex: number = 0xA;       // Hexadecimal for decimal 10
console.log(binary, hex);    // 10 10
```

## 5. Convert String to Number
You can convert strings to numbers using `Number()` or unary plus (`+`).

```typescript
let str: string = "42";
let num: number = Number(str);
let num2: number = +str;
console.log(num, num2); // 42 42
```

## 6. Type Inference with Number
TypeScript can automatically infer the type based on the assigned value.

```typescript
let price = 99.99; // inferred as number
// price = "100"; // ❌ Error: Type 'string' is not assignable to type 'number'
```

## 7. Decimal with Number Data Type
```typescript
let pi: number = 3.14159;
console.log(pi); // 3.14159
```
