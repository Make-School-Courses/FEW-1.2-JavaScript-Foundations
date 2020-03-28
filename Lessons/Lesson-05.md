<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.2 - Lesson 5 - JS OOP Inheritence

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

## Minute-by-Minute

| **Elapsed** | **Time** | **Activity** |
| ----------- | --------- | ------------ |
| 0:05 | 0:05 | admin |
| 0:05 | 0:10 | [Overview](#overview) |
| 0:05 | 0:15 | [Why learn Classes and inheritance](#why-learn-classes-and-inheritance) |
| 0:20 | 0:05 | [Learning Objectives](#learning-objectives) |
| 0:50 | 0:30 | [Inheritence](#inheritence) |
| 1:00 | 0:10 | [BREAK](#break) |
| 2:25 | 1:30 | Lab |
| 2:45 | 0:20 | [Wrap up](#wrap-up) |

<!-- > -->

# Overview

This class will be an OOP workshop to review the concepts from the previous class and expand your understanding of OOP to include inheritence.

<!-- > -->

## Why learn Classes and Inheritance?

This is a big topic which reaches deeply into important areas of computer science. Expect to see OOP and inheritance in the libraries you might work with, in interview questions, and on the job as a software engineer. 

<!-- > -->

## Learning Objectives

1. Create base/superclasses 
1. Use inheritance with super and extends
1. Create classes that inherit from a superclass

<!-- > -->

# Inheritance 

Inheritance is when you get something from your ancestors. By definition it's the act of passing property from an ancestor to a descendant. Properties can be: 

- genes
- money
- property

<!-- > -->

In software this could be: 

- variables/properties
- methods/functions

<!-- > -->

Who do you inherit from? 

- Your parents
- Your grandparents

<!-- > -->

In software who do you inherit from?

- Your parent/superclass

<!-- > -->

## Inheritence with JS

Any class can inherit from another. You can also think of classes that inherit from another class as extensions of the other class. 

```js
class Sprite {
  constructor() {
    this.x = 0
    this.y = 0
  }
}
class Ball extends Sprite {
  constructor() {
    super()
    this.radius = 10
  }
}
const ball = new Ball() // { x: 0, y: 0, radius: 10 }
```

<!-- > -->

Calling `super()` in a subclass is like calling the constructor function in your superclass. 

** You must call `super()`!**

<!-- > -->

If a class takes parameters in its constructor it **must pass these to super**. 

```js
class Sprite {
  constructor(x, y) {
    this.x = 0
    this.y = 0
  }
}

class Ball extends Sprite {
  constructor(x, y, color, radius) {
    super(x, y) // Must pass parameters to super!
    this.color = color
    this.radius = radius
  }
}

const ball = new Ball(10, 20, 'red', 30) 
// { x: 10, y: 20, color:'red', radius: 30 }
```

You must pass parameters to super. Notice the constructor takes these parameters, calling super is like calling the constructor of the superclass. 

<!-- > -->

# Inheritance Challenges

**Challenge 1**: many of the classes you created for Break Out share some of the sample properties. Moving these to a super class would keep them in one locaiton that could be shared, edited, and make it easier to reason about. This would make your code DRY. 

All of these classes: 

- `Ball`
- `Paddle`
- `Brick`
- `Lives`
- `Score` 

Share these properties: 

- `x`
- `y`

While they may not all use it these could all also share this method: 

- `move()`

Your goal with this challenge is to define a base class, let's call it Sprite. 

Here is some starter code: 

```js
class Sprite {
  constructor(x, y) {
    this.x = 0
    this.y = 0
  }
}

class Ball extends Sprite {
  constructor(x, y, color, radius) {
    super(x, y) // Must pass parameters to super!
    this.color = color
    this.radius = radius
  }
}
```

You may have to modify this to include other properties your classes might support. In this code sample the `Sprite` class supports the `x` and `y` properties and the `Ball` class takes `x`, `y`, `color`, and `radius`.

Notice that Ball passes `x` and `y` through `super(x, y)` to it's super classes `Sprite`. 

All of these classes should extend the new `Sprite` class. 

- `Ball`
- `Paddle`
- `Brick`
- `Lives`
- `Score`

**Challenge 2**: Some of the classes draw themselves with the same code. 

- `Paddle`
- `Brick`

Both of these classes draw as Rectangles willed with a color. You can give the `Sprite` class a `render(ctx)` method. 

Doing this will allow any class that extends `Sprite` to use `render()` this method. 

Classes that draw themselves differently:

- `Ball`
- `Lives`
- `Score`

Will define their own `render()` which will override the render method defined in Sprite.

<!-- > -->

<!-- .slide: data-background="#087CB8" -->
## BREAK

Take a 10-minute break and think about things in the world that share properties. 

<!-- > -->

## Wrap Up

- Review Inheritence

<!-- > -->

## After Class 

- [Assignment 4 Inheritence](../Assignments/Assignment-4-Inheritance.md)

<!-- > -->

## Additional Resources

1. https://javascript.info/classes

