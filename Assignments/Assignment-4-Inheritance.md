# Class - Breakout - Inheritance

## Description 

Digging deeper into OOP we find classes can inherit properties and methods from a super class. This assignment gives you the opportunity to apply this concept to Break Out.

### Why this assignment?

OOP is an important piece of programming and software development. Yout need to practice with this to further your understanding of this subject.

## Project requirements

Conplete the challenges below and commit them to your Break Out project. 

### Challenges 

**Challenge 1:** Create a Sprite Subclass

Notice that many of the game objects share similar properties:

- x
- y
- width
- height

Some of the classes share similar methods: 

- moveTo
- moveBy
- render

The way the code is written you're writing these properties and methods once for each class. 

In some cases the implementation is the same for all classes and in other cases the implementation is unique for that class. 

When classes share the same property or method and the implementation is the same that's a prime candiadate for creating a super class!

In the case of break out these classes all share the x, y, moveTo, and moveBy methods. 

- Ball 
- Brick 
- Paddle
- Lives
- Score

Create a new class Sprite which will implement the properties and methods: 

- x
- y
- moveTo
- moveBy

```JavaScript
class Sprite {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  moveTo(x, y) {
    this.x = x
    this.y = y
  }

  moveBy(dx, dy) {
    this.x += dx
    this.y += dy
  }
}
```

**Challenge 2:** modify classes to extend the Sprite class. 

Your next goal is to modify the existing classes to use the Sprite class as their base class by extending Sprite. 

Clases that should extend Sprite are: 

- Ball
- Brick
- Paddle
- Lives
- Score

Extend this class like this: 

```JavaScript
class Ball extends Sprite {
 constructor(radius, x, y) {
 // Must pass params to super when extending a class! 
 super(x, y) 
 this.radius = radius;
 }

 render() {
 ...
 }
}
```

**You must call `super()` and pass all parameters to the superclass.**

Think about any other properties that are shared across all of the Objects, you can move these properties into `Sprite`. In this way, you will only have to edit or work with these in one place. In this example, all `Sprite`s will have an `x` and `y` property, and a `Ball` will have `x`, `y`, and `radius`. 

If there is a default implementation for a method that is used by most child classes you can implement this in the parent. When a child class implements a method that exists in the parent this is called _overriding_. When you _override_ a method you are using the child's method over (in place of) the parent's method. 

Repeat this process for these classes:

- Ball
- Brick
- Paddle
- Lives
- Score

**Stretch Challenge** 

**Sprite Color**

All of the sprites share color as a property. Most of them also draw as rectangles with a width and height. 

If the Sprite class were to implement a the properties: color, width, and height, it could also implement a default render method that draw itself as a rectangle. 

Sprite: 

- Properties: 
    - color
    - width
    - height
- Method
    - render 

These changes would simplify the Brick and Paddle subclasses. The Ball sub class needs to override the render method and draw itself as a circle.

**Label Class**

The lives and score text objects share some functionality. They both draw text and use a font, color, and font size. 

Create a Label class that draws text. It should subclass/extend Sprite. 

**Label**
- Properties
    - font - String font style: "Helvetica 16px"
    - text - String text to display: "Hello World"
    - align - String alignment: "left"
- Methods 
    - render(ctx) - Should render text to ctx.

**Extend Label to make a GameLabel**

The game renders text in very specific ways. It's always a message followed by a value. For example: "Score: 100" or "Lives: 3". Where "Score: " and "Lives: " are the messages and 100 and 3 are the values. 

This means you can create a sub class of Label that handles this. 

**GameLabel**
- Properties 
    - message - String shown before the value: "Score: "
    - value - Number shown after the message: 100
- methods
    - render(ctx) - Renders the messages and value. 

The render method can set the text proeprty to: `${this.text} ${this.value}` Then call `super.render(ctx)`. In this way you can reuse the render method in your super class. 

### Deliverable

Your GitHub repo with these changes committed and pushed.

### Due date

Class 5 - Thu, April 16

## Assessing the assignment

Use this rubric to measure the success of your work against the expectations of the assignment. You should be striving for an average score of 1 or greater.

| Aspect | Does not meet (0) | Meets (1) | Exceeds (2) |
|:-------------|:--------------|:-----|:---------|
| **Completion** | Did not complete all challenges | Completed all challenges | Completed challenegs and stretch challenges |
| **Code Quality** | Code shows linter errors | Code is profesional quality as confirmed by the linter | Code has comments and uses well named self documenting identifier names |
| **Work Ethic** | Less than 3 commits | 3+ commits | Used a branch for the changes made for these challenges |

## Assessing your knowledge

Use this rubric to assess how your understanding of the learning objectives. You should be striving for an average score of 1 or greater

| Expectations | Does not meet (0) | Meets (1) | Exceeds (2) |
|:-------------|:--------------|:-----|:---------|
| **OOP theory** | Can't explain the OOP in JS | Can explain OOP in JS | Can provide use cases and hypothetical examples for OOP in JS |
| **OOP Practice** | Can't create classes and sub classes without the documentation | Can create classes and sub classes without the documentation | Can use `super()` to call methods ont he super class, or override those methods when needed |