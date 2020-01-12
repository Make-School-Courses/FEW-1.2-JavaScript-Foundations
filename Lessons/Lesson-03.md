<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# Class - Lesson 3

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

# Overview

Class Objects and OOP. Use Object Oriented programming techniques to make your code modular and organized. 

You've written lots of code so far you've probably incurred some [technical debt](https://en.wikipedia.org/wiki/Technical_debt). It's time to pay this off by refactoring. 

<!-- > -->

## Learning Objectives

- Use Refactoring to improve code quality
- Build systems with Objects 
- Define classes 
- Use dependency injection

<!-- > -->

## Refactoring Code

The goal of [refactoring code](https://en.wikipedia.org/wiki/Code_refactoring) in short is to improve your existing code base and put it into a shape that will accept future updates. 

Refactoring is not about adding new features. Instead, we want to have the **same functionality** with an **improved codebase** underneath it. 

What should you refactor? In this section, you will be creating Class objects to represent elements used by the game. Along the way you can also do the following: 

- Improve variable declarations. Replace `var` with `const` and `let`
- Add comments
- Improve formatting and indentation
- Making procedural code Object Oriented
- Improve anything else you might think of that needs improvement

(just listen to the linter)

<!-- > -->

# OOP

Whoa, who wrote this tutorial? It's lacking in OOP! It's your job to improve it by increasing OOPiness!

<!-- > -->

Making the code more Object Oriented won't make the code execute faster. It will make the code easier to work with, and easier to expand its systems and add new features in the future.

<!-- > -->

**What is an object?**

Objects are collections and namespaces. An object is a collection of properties (variables) and methods (functions). A namespace gives you one name to access items in the collection.

<!-- > -->

**Why make Objects?** 

It's easier to think of a ball Object than it is to think about: `x`, `y`, `ballRadius`, `dx`, `dy` as the ball.

<!-- > -->

Grouping related variables together in an object will organize and encapsulate these variables. Grouping variables together to create a ball Object.

```JavaScript
const ball = {
    x: 240, 
    y: 290, 
    radius: 10, 
    dx: -2,
    dy: -2 
}
```

With the change above the location of the ball which was previously determined by `x` and `y` is now determined by `ball.x` and `ball.y`. 

**Remove** the variables that are now stored with the ball object: 

```JS
...
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
const ballRadius = 10;
...
```

Find where these variables exist in your code and replce them with 

- `ball.x`
- `ball.y`
- `ball.dx`
- `ball.dy`
- `ball.radius`

For example the `drawBall()` function becomes: 

```JS
const drawBall = () => {
  ctx.beginPath();
  // Notice the changes here
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}
```

<!-- > -->

**Disucssion:** 

- With these changes is the code better? 
- What is different? 
- What possible benefits would these changes have?

<!-- > -->

With this arrangement, there is only a single global variable. Which makes our code safer, there is less chance we might overwrite a variable by accident. 

**Encapsulation**

Properties that effect the ball are stored together. 

<!-- > -->

It also makes the code easier to reason about. We have one ball with some logical properties that be long to it. Rather than a pool of variables some of which control the appearance of the ball. 

<!-- > -->

It also makes the system easier to expand. If you need to make another ball you can make another object with the same properties or even duplicate an existing ball object. If a ball needs a new property this is easy to do. 

<!-- > -->

Objects with the same properties are also interchangeable. This allows for Polymorphism an advanced OOP topics. 

<!-- > -->

### JS Classes

While defining a ball with an object literal works. You can go a step further by making a template for the ball Object called a class.

```JavaScript
class Ball {
    constructor(x, y, radius = 10) {
        this.x = x
        this.y = y
        this.radius = radius
        this.dx = -2
        this.dy = -2
    }

    move() {
      this.x += this.dx
      this.y += this.dy
    }
}

const ball = new Ball(200, 300)
```

An object created from a class is called an instance. 

ES6 style classes have some features that deserve discussion. 

- constructor 
- initialization
- parameters
- default parameters

Vocabulary 

- property - a variable/value stored by a class (x, y, radius, dx, dy)
- method - a function stored in a class (move)


<!-- v -->

### Classes

- [Review Classes in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 

## Creating classes

The engineering team has decided to **OOPify** the whole game. You're in charge of the _refactor_. You need to make this game _Object Oriented_. 

_You're in charge of making a class for each of the game objects._

- Ball
- Brick
- Paddle
- Score
- Lives

These are objects in the game, you can see these objects on the screen and the game manipulates these objects as you play the game. Objects give you an abstract way to think about and visualize your code. 

You'll be making a Class for each of these. Each should hold the variables that describe or control that object as properties within the class.

For example, the Ball class might look like this: 

```JavaScript
 class Ball {
  constructor(radius, color = "#0095DD") {
    this.radius = radius;
    this.color = color;
    this.x = 0;
    this.y = 0;
  }

  ...
}
```

Here `Ball` Class defines instances which will have four properties. Two of the properties, `radius`, and `color` are assigned when the Ball is initialized. `color` has a default value. 

- `color`: the color the ball will render as
- `radius`: the size of the ball measured as it's radius
- `x`: the position of the ball on the x-axis of a canvas
- `y`: the position of the ball on the y-axis of a canvas

## Break 

Take a ten minute break and look at all of the objects in the world and name their properties.

# Lab

Spend the lab time working on solving the challenges here: 

[Assignment 3 OOP](Assignments/Assignment-3-OOP.md)

Take notes as you work for dicussion after the lab. 

## After Lab 

We've removed a lot of global variables and grouped properties into objects. There are a couple variables that are shared across some of the objects. You need a way to handle these situations. 

## Dependency Injection

Many of the game objects need to draw themselves. In order to do this, they need access to the canvas rendering context. This is a _dependency_. These classes should NOT rely on a global variable! The solution is to inject the _dependency_. 

```JavaScript
 class Ball {
  constructor(radius, color = "#0095DD") {
    this.radius = radius;
    this.color = color;
    this.x = 0;
    this.y = 0;
  }
                         
  render(ctx) {
    ...
  }
}
```

Here the render method takes `ctx` as a parameter. This class can now be used anywhere and is not dependent on a global variable. Instead, the value is passed from outside. 

An important technique you can make use of here is [Depedancy Injection](https://en.wikipedia.org/wiki/Dependency_injection). Skim this.

This is a powerful idea that is used often in software development. In a nutshell: 

> A dependency is an object that can be used by another object. Injection is the passing of a dependency to the dependent object that would use it.

Your goal for the current challenges is to create class objects for the Brick, Ball, Paddle, and Background. These classes will need to draw onto the canvas. The canvas context is a _dependancy_ for the Brick, Paddle, Ball etc. These objects are dependent on a canvas context, they can't draw themselves without one!

While you could supply the canvas when you initialized an object that would create a more tightly coupled system. Passing the canvas to the object when it needs to draw itself is a more elegant solution. 

Revisit the `Ball` class. In the code snippet below I've added a `render()` method. This method takes the rendering context as a parameter. You could say the context is 'injected'.

```JavaScript
 class Ball {
  constructor(radius, color = "#0095DD") {
    this.radius = radius;
    this.color = color;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}
``` 

This is Dependency Injection at work! Overall this is a very nice Class package you could make and render as many instances of this class as you might need, and render them on any canvas context. 


<!-- .slide: data-background="#087CB8" -->
## [**10m**] BREAK

<!-- > -->

## Wrap Up 

- Continue working on your current tutorial
- Complete reading
- Complete challenges

<!-- > -->

## Additional Resources

1. Links to additional readings and videos

<!-- > -->

## Minute-by-Minute [OPTIONAL]

| **Elapsed** | **Time**  | **Activity** |
| ----------- | --------- | ----------- |
| 0:05        | 0:05      | Admin |
| 0:10        | 0:05      | [Overview](#overview) |
| 0:15        | 0:05      | [Refactoring](#refactoring-code) |
| 0:30        | 0:15      | [OOP and JS](#oop) |
| 0:45        | 0:15      | [Defining Classes](#js-classes) |
| 0:55        | 0:10      | [BREAK](#break) |
| 1:55        | 0:60      | [Lab - OOP](#lab) |
| 2:10        | 0:15      | [Post Lab Q & A](#after-lab) |
| 2:35        | 0:15      | [Dependency Injection](#dependency-injection) |
| 2:45        | 0:10      | Review Homework |


