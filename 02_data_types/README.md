# TypeScript Data Types

In **TypeScript**, data types are divided into two main categories: **Primitive types** and **Non-primitive types** (Object types).

---

## 1. Primitive Types
These are the most basic data types.

| Type       | Example              | Description                     |
|------------|----------------------|---------------------------------|
| `string`   | `"Hello"`            | Text values                    |
| `number`   | `42`, `3.14`         | All numbers (integer + float)  |
| `boolean`  | `true`, `false`      | Logical values                 |
| `null`     | `null`               | Explicitly no value            |
| `undefined`| `undefined`          | Variable declared but not assigned |
| `bigint`   | `9007199254740991n`  | Large integers                 |
| `symbol`   | `Symbol('id')`       | Unique and immutable values    |

---

## 2. Special Types
These types have specific purposes.

| Type     | Example | Description |
|----------|---------|-------------|
| `any`    | `let data: any = 5; data = "Hi";` | Turns off type checking |
| `unknown`| `let x: unknown = 10;` | Like `any` but safer, forces type checking before use |
| `never`  | `function error(): never { throw new Error(); }` | Represents a value that never occurs |
| `void`   | `function log(): void { console.log("Hi"); }` | No return value |

---

## 3. Object Types
Everything that is **not primitive** is considered an object type.

| Type       | Example | Description |
|------------|---------|-------------|
| `Object`   | `{ name: "John" }` | General object |
| `Array`    | `number[]`, `string[]` | Collection of values |
| `Tuple`    | `[string, number]` | Fixed-length array with defined types |
| `Function` | `(x: number) => string` | Functions with type annotations |
| `Class`    | `class Person {}` | Blueprint for objects |
| `Interface`| `interface User { name: string; }` | Structure for objects |
| `Enum`     | `enum Colors { Red, Blue }` | Named constant values |

---

## 4. Advanced / Utility Types
TypeScript also provides **type modifiers** and **utility types**.

- **Union** → `string | number`
- **Intersection** → `type A = B & C`
- **Literal Types** → `"success" | "error"`
- **Optional** → `name?: string`
- **Readonly** → `readonly id: number`
- **Record** → `Record<string, number>`
- **Partial**, **Required**, **Pick**, **Omit** (built-in utility types)

---

## Quick Summary Table

| Category   | Examples |
|------------|----------|
| **Primitive** | `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint` |
| **Special**   | `any`, `unknown`, `never`, `void` |
| **Object**    | `Object`, `Array`, `Tuple`, `Function`, `Class`, `Interface`, `Enum` |
| **Advanced**  | `Union`, `Intersection`, `Literal`, `Readonly`, `Optional`, `Record` |
