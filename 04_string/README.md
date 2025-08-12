# String and Boolean Data Types in TypeScript

The `string` data type in TypeScript is used to represent textual data, and the `boolean` data type is used to represent logical values (`true` or `false`). TypeScript provides multiple ways to define strings and ensures that boolean values remain strictly typed.

## 1. Apply String Data Type
You can explicitly declare a variable with the `string` type.

```typescript
let str: string = "Prince";
console.log(str); // Prince
````

## 2. Ways to Define String

Strings can be defined using double quotes, single quotes, or backticks.

```typescript
let str1: string = "Prince";   // Double quotes
let str2: string = 'Prince';   // Single quotes
let str3: string = `Prince`;   // Backticks (Template literal)
```

## 3. Template Literals with String

Template literals (backticks) allow embedding variables and creating multi-line strings.

```typescript
let age: number = 22;
let userName: string = "Prince";
let info: string = `My name is ${userName} and age is ${age} years`;
console.log(info); // My name is Prince and age is 22 years
```

## 4. Convert to String Data Type

You can convert numbers or other values to strings using `.toString()`.

```typescript
let num: number = 100;
let data: string = num.toString();
console.log(data); // "100"
```

## 5. Apply Boolean Data Type

The `boolean` type holds only two possible values: `true` or `false`.

```typescript
let boolData: boolean = true;
let other: boolean;
other = false;
console.log(boolData, other); // true false
```

## 6. Possible Boolean Values

Valid boolean values are only:

```typescript
true
false
```

❌ Invalid: `0`, `1`, `"yes"`, `"no"` unless explicitly converted.

## 7. Type Inference with String and Boolean

TypeScript can automatically infer the type based on the assigned value.

```typescript
let dt = "Prince"; // inferred as string
let dt2 = 34;      // inferred as number
// dt = 55; // ❌ Error: Type 'number' is not assignable to type 'string'
```

## 8. Run with HTML File

To run TypeScript in a browser:

1. Save the code as `app.ts`.
2. Compile to JavaScript:

   ```bash
   tsc app.ts
   ```
3. Create an HTML file:

```html
<!DOCTYPE html>
<html>
<head>
    <title>TypeScript Example</title>
</head>
<body>
    <script src="app.js"></script>
</body>
</html>
```

4. Open the HTML file in your browser.

## 9. Complete Example

```typescript
let str: string = "Prince";
let str2: string = 'Prince';
let str3: string = `Prince`;

let age: number = 22;
let userName: string = "Prince";
let info: string = `My name is ${userName} and age is ${age} years`;
console.log(info);

let num: number = 100;
let data: string = num.toString();

let boolData: boolean = true;
let other: boolean;
other = false;

let dt = "Prince";
let dt2 = 34;
```

```
