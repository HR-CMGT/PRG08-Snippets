# Working with types

Workshop Typescript 7 January 2020 by [Giuseppe Maggiore](https://www.hoppinger.com/team/giuseppe-maggiore/) at HR CMGT.

## Type definitions 

Use `|` to allow more than one type for a variable. You can even use specific values ("player one") as a type.

```typescript
const a:number = 7                                     // a can be any number
const b:number | string = "Henk"                       // b can be a number or a string
const c:4 = 4                                          // c can only be 4
const d:"Player one" | "Player two" = "Player one"     // d can be "Player one" or "Player two"
const e:1 | 2 | 3 = 3                                  // e can only be 1, 2 or 3
const data:Array<number | string> = ["Henk", 3]        // the data array can contain strings and numbers
```

## Combining types 

Use & and | to combine types. Teacher and Student are both Persons. Use intellisense to get super cool code completion.

```typescript
type Person = { name:string, surname:string, age:number}
type Student = { kind:"Student", studentNumber:string, studyPoints:number} & Person
type Teacher = { kind:"Teacher", scale:number, favoriteSubject:string} & Person

const john:Teacher = {
    age:44, name:"John", surname:"Smith", kind:"Teacher",
    scale:3, favoriteSubject:"Programming"
}

const louis:Student = {
    age:22, name:"Louis", surname:"Jansen", kind:"Student",
    studentNumber:"94928", studyPoints:3
}

// array of students and / or teachers
const people :Array<Student | Teacher> = [john, louis]

// using if statements with intellisense works really well
function showDetails(p:Teacher | Student) {
    if (p.kind == "Teacher") {
        console.log(p.favoriteSubject)
    } else {
        console.log(p.studentNumber)
    }
}
```

## Generic types

Types such as `Array<number>` or `Array<string` allow you to determine the `type` of Array. You can create your own generic types with `<>`, for example: `Box<x>` is a `Box` of type `x`.

In this example we create a Box that can have different `types` of content. The type of the content can be determined when you create a variable of type Box.

```typescript
type Box<x> = {brand:string, content:x}

const box1: Box<number> = {brand:"Amazon", content:4}
const box2: Box<string> = { brand: "Amazon", content: "Hello" }
const box3: Box<string | number> = { brand: "Amazon", content: "Hello" }
```

## Map function and arrow functions

Reminder of how to use `map()` and arrow functions.

```typescript
function createHi() : string {
   return "hi"
}

const createHi = () : string => "hi"             // the same function written in a single line
const hi = createHi()

const x = [1, 2, 3, 4]
const y = x.map(v => v + 1)                      // use map to update each value. y now contains [2, 3, 4, 5]
```

## 😱🤯😱🤯😱🤯 Our own generic map function

Combining generic types and arrow functions to create our own map function for the `Box<x>` type. The `mapBox()` function works just a a normal `map()` function as seen above; you receive a value and return a new value.

This code shows how you can use generic types in advanced ways.
```typescript
type Box<x> = { kind: "empty" } | { kind: "full"; content: x };

const box1: Box<string> = { kind: "full", content: "hello world" };
const box2: Box<number> = { kind: "full", content: 4 };
const box3: Box<string> = { kind: "empty" };

// now we are going to create a mapBox function
// first create the map's callback functions for easier reading
const empty = <x>(): Box<x> => ({ kind: "empty" });
const full = <x>(content: x): Box<x> => ({ kind: "full", content: content });

// mapbox is our variation of map(), altering the content of the box and returning a new box.
const mapBox = <inputContent, outputContent>(box: Box<inputContent>, callBackFn: (content: inputContent) => outputContent
): Box<outputContent> => box.kind === "empty" ? empty() : full(callBackFn(box.content))

// mapbox returned een lege box, of een box met "!!!" toegevoegd aan de content
const testje = mapBox(box1, content => content + "!!!")

console.log(testje.content)                           // "hello world!!!"             
```
