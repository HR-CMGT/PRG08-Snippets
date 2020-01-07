# Working with types

Workshop Typescript 7 January 2020 by Giuseppe Maggiore at HR CMGT.

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

In this example we create a box that can have different kinds of content. The type of the content is type-checked.

```typescript

```
