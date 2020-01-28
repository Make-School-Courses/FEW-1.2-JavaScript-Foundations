<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.2 - Lesson 3 - JavaScript Language

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

## Why learn JS? 

JavaScript is one of the most important languages in use today. It's ubiquitous, in everything, and used everywhere. The language has also been improved recently. It's a great time to learn JS. 

<!-- > -->

## Learning Objectives

1. Use Loops 
1. Use Arrays
1. Use Objects
1. Conditional statements
1. Solve Problems

<!-- > -->

# Discuss Break tutorial

Discuss these questions with someone else in class:

- How does the break out game work? (general overview)
 - Code flow what happens in what order?
- The application state is the data that describes the state of your application. 
 - How does break out define its application state?
 - The values stored by the game and how are they updated?

<!-- > -->

# loops 

The great thing about computers is they are happy to do things over and over again. A computer will always do something the same way each time. It's one of the reasons we use computers to do things! 

- Where are loops used in Break Out?
- How are the loops used?

<!-- https://repl.it/classroom/invite/k0Yhr38 -->

<!-- > -->

# Arrays

Arrays store collections of related data in a list with each element at an index. 

- How are arrays used by Break Out?
- What do the Arrays store? 

<!-- https://repl.it/classroom/invite/Z6pW6Gv -->

<!-- > -->

# Objects 

Objects are collections of related data. Each value is stored at a key or label. 

- Where are objects used? 
- How are the Objects used? 
- Why not use an array?

<!-- https://repl.it/classroom/invite/STIb5DY -->

<!-- > -->

# Functions

Functions store blocks of code that can be called and executed at any time as often as needed.

- Where are functions used?
- What is the general flow of code?
- Why no parameters?

<!-- > -->

# Conditional Statements

Conditional statements control the flow of your programs. They allow programs to make decisions. What kinds of decisions does the Break Out code make? 

- Where are conditional statements used? 

<!-- > -->

# Name Space and Identifiers

Identifiers are the names of you create that represent: variables, and functions.

Scope sets the rules for where an identifier can be created and accessed. 

The code needs some improvement. Currently, the game creates many identifiers in the global namespace. 

- Is this a problem? 
- What kinds of problems could this cause? 

<!-- > -->

# Scope

Use an IIFE to organize your code. 

- What is an IIFE?
- What is scope? 
 - global
 - local
 - function
 - block

<!-- > -->

<!-- .slide: data-background="#087CB8" -->
## BREAK

Take a 10-minute break.

<!-- > -->

## Expanding the game

How would you solve these problems? Discuss these with someone else in class. 

1. Each brick must display its own color?
2. Each brick is worth different point values?
3. The ball should move faster as the game progresses?
4. The ball needs to start at a random angle?
5. Imagine each time the bricks are cleared a new row of bricks is added?
6. Imagine bricks take more than one hit to remove? 
7. One brick is special when hit it releases a second ball? 

<!-- > -->

### OOP

Many of the problems above require the creation of new variables. This starts to make the game impossible to work with. 

While you could use an array of values this would be hard to understand. 

Object-Oriented Programming gives us style and tools to treat our code like Objects in the real world. Instead of creating new variables and functions to handle new elements and systems we would create new objects that embody those systems and elements. 

<!-- > -->

Objects on software are analogous to objects in the real world. 

Discuss: Name some Objects that you use every day, name their properties, and methods?

<!-- > -->

#### This

When code refers to Objects, their properties, and namespace there are opportunities to infer the which object you are referring to. 

`this`

The keyword `this` is used for that purpose. 

<!-- > -->

Here an object with x and dx properties also has a function move.

```JS
ball = {
 x: 100,
 dx: 2,
 move: function() {
 this.x += this.dx
 }
}
```

Within the move function, the object can refer to its own properties using the `this` keyword.

<!-- > -->

# Challenges

<!-- > -->

**Challenge 1**

Make an Object for the ball. It should have 4 properties: 

- `x`
- `y`
- `dx`
- `dy`

<!-- > -->

**Challenge 2**

Give the ball object a move method. This method should calculate the new x and y position by adding the dx and dy. 

- `move()`

This function should add x + dx, and y + dy of the ball object. 

<!-- > -->

**Challenge 3**

Use the ball object in your game.

Find each of the variables: x, y, dx, dy replace these with ball.x, ball.y, ball.dx, ball.dy.

<!-- > -->

**Challenge 4**

The game has created a lot of global variables it would be good if these were consolidated into a single namespace. Creating only a single object that groups all of these together.

Create an object that owns all of the variables that were originally global. 

<!-- > -->

**Challenge 5** 

Consolidate all of the functions into your game object.

```JS 

{
 bricks: [],
 canvas: document.getElementById("myCanvas"),
 ctx: canvas.getContext("2d"),
 ...
 drawBall: function() {
 ctx.beginPath(),
 ...
 },
 ...
}

```

<!-- > -->

**Challenge 6** 

Create a function that draws something interesting on the background of the game.

This functions needs to be useful outside of the game. You can make this possible by passing ctx and any other values needed into this function as parameters. 

<!-- > -->

## Wrap Up (5 min)

- Review

<!-- > -->

## Additional Resources

1. 

<!-- > -->

## Minute-by-Minute [OPTIONAL]

| **Elapsed** | **Time** | **Activity** |
| ----------- | --------- | ----------- |
| 0:05 | 0:05 | Admin |
| 0:05 | 0:10 | [Objectives](#learning-objectives) |
| 0:05 | 0:15 | [Discuss Break tutorial](#discuss-nreak-tutorial) |
| 0:05 | 0:20 | [Arrays](#arrays) |
| 0:05 | 0:25 | [Loops](#loops) |
| 0:05 | 0:30 | [Functions](#functions) |
| 0:05 | 0:35 | [Objects](#objects) |
| 0:05 | 0:40 | [Conditional](#conditional) |
| 0:05 | 0:45 | [Name Space and Identifiers](#name-space-and-identifiers) |
| 0:05 | 0:50 | [Scope](#scope) |
| 0:10 | 1:00 | BREAK |
| 0:10 | 1:10 | [Expanding the game](#expanding-the-game) |
| 0:10 | 1:20 | [OOP](#oop) |
| 0:60 | 2:20 | [Challenges](#challenges) |
| TOTAL | 1:50 | - |

