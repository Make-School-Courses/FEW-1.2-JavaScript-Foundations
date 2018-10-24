# FEW 1.2 - Class 4

Class Objects

Class Objects and OOP. Use Object Oriented programming techniques to make your code modular and organized. 

You've written lots of code so far you've probably incurred some [technical debt](https://en.wikipedia.org/wiki/Technical_debt). It's time to pay this off by refactoring. 

## Refactoring 

The goal of [refactoring code](https://en.wikipedia.org/wiki/Code_refactoring) in short is to improve your existing code base and put it into a shape that will accept future updates. 

Refactoring is not about adding new features. Instead we want to have same functionality with an improved code base underneath it. 

What should you refactor? In this section you will be creating Class objects to represent elements used by the game. Along the way you can also do the following: 

- Improve variable declarations. Replace `var` with `const` and `let`
- Add comments
- Improve formatting and indentation
- Improve anything else you might think of that needs improvement

## OOPs

Whoa, who wrote this tutorial. It is weak on OOP. It's your job to improve the OOPiness!

Using classes you can organize your code and make modular systems that can be more easily reused in this project and shared with other projects.

**Q:** What's an Object?

**A:** A collection of variables and functions. 

Definition: **Property**, a variable that belongs to an Object. 

Definition: **Method** a function that belongs to an Object. 

In JavaScript everything is an Object and you can create an Object just about anywhere at any time for any reason, in any form you care to. **Classes** are formalized definitions for Objects. You'll use a Class to create Objects. 

An Object created from a class is called an **Instance**.

- [Review Classes in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 

## Creating classes

The engineering team has decided to **OOPify** the whole game. You're in charge of the refactor. 

_You're be in charge of making a class for each of the game objects._

- Ball
- Brick
- Paddle
- Score
- Lives 

You'll be making a Class for each of these. Each of these should hold the variables that describe or control that object as properties within the class.

For example, the Ball class might look like this: 

```JavaScript
 class Ball {
  constructor(radius, color = "#0095DD") {
    this.radius = radius;
    this.color = color;
    this.x = 0;
    this.y = 0;
  }
}
```

Here `Ball` Class defines instances which will have four properties. Two of the properties, `radius`, and `color` are assigned when the Ball is initialized. `color` has a default value. 

- `color`: the color the ball will render as
- `radius`: the size of the ball measured as it's radius
- `x`: the position of the ball on the x axis of a canvas
- `y`: the position of the ball on the y axis of a canvas

## Dependancy Injection

An important technique you can make use of here is [Depedancy Injection](https://en.wikipedia.org/wiki/Dependency_injection). Skim this.

This is a powerful idea that is used often in software development. In a nutshell: 

> A dependency is an object that can be used by another object. An injection is the passing of a dependency to the dependent object that would use it.

Your goal for the current challenges is to create class objects for the Brick, Ball, Paddle, and Background. These classes will need to draw onto the canvas. The _canvas is a dependancy_ for the Brick, Paddle, Ball etc. These objects are dependent on a canvas context, they can't draw themselvse without one!

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

This is dependancy injection at work! Overall this is a very nice Class package you could make and render as many instances of this class as you might need, and render them on any canvas context. 

## OOP Challenges

Your job is to refactor your work. You'll be making class object to replace the existing code. Along the way you should also clean up your code, fixing formatting, indentation, and add comments. 

- **Challenge 1**: Define Classes for Game Objects
  1. Define a class for `Ball`
    - Properties 
      - `radius`
      - `color`
      - `x`
      - `y`
    - Methods
      - `render()`
  2. Define a class for `Brick`
    - Properties 
      - `x`
      - `y` 
      - `status`
      - `color`
      - `width`
      - `height`
    - Methods 
      - `render()`
  3. Define a class for `Paddle`
    - Properties 
      - `x`
      - `y` 
      - `color`
      - `width`
      - `height`
    - Methods 
      - `render()`
  4. Define a class for `Background`
    - Properties (The Background Object is responsible for rendering the background image. The properties are up to you, and might be as simple as a color)
      - ?
    - Methods 
      - `render()`
  5. Define a class for `Score`
    - Properties 
      - `x`
      - `y` 
      - `color`
      - `score`
      - `font`
    - Methods 
      - `render()`
  6. Define a class for `Lives`
    - Properties 
      - `x`
      - `y` 
      - `color`
      - `lives`
      - `font`
    - Methods 
      - `render()`
  7. Replace all `var` with `const` or `let`
  8. Fix formatting and indentation
  9. Add comments
   
The goal is not to add new features. At the end you should have better code that works the same. You're paying off technical debt and refactoring to make a better code base. 
    
## Stretch Challenges 

This OOP thing is fun! I can tell you want more! Here are a few more things you can try. 

1. Make a `Game` Class. The Game itself can be an object that creates and owns all of the other objects. The game can hold all of the global properties, and methods. 
  - Properties
    - `ball`
    - `bricks`
    - `score`
    - `lives`
    - `ctx`
    - `width`
    - `height`
  - Methods
    - `move()`
    - `draw()`
    - `collisionDetection()`
    - `keyDownHandler()`
    - `keyUpHandler()`
    - `mouseMoveHandler()`

## Further Challenges 

Stretch challenge week. The goal this week is to complete as many of the challenges and stratch challenges as you can. 

If you have completed all of the challenges you try the challenges here or can design your own challenges. 

## Challenges

This section has some futher challenges you can try if you need more work. 

**Challenge**: Improve the Alert messages

**Problem**: That Alert box is really annoying. It also stops everything until you click it. The Alert box should not be used by applications unless they issuing system type alerts. 

**Solution**: Make a custom overlay that displays a message. There are two approaches you can take
  
- Use a DOM element
  - Make a div that you will hide and show when you win or lose the game. 
  - Use tricky CSS wizardry (absolute position) to place the div over the canvas.
  - Use JavaScript to handle button clicks. 
- Draw the dialog box on canvas (not for the faint of heart)
  - Make a class that renders a dialog box
  - Listen for clicks on canvas check if a click is within the area of a button

**Challenge**: Improve Ball Movement

**Problem**: Currently the ball moves an amount on the x and and an amount on the y. This means the ball will always move at a similar angle. It also means that the ball will move faster or slower depending on difference between the amount moved on x and y. 

Don't believe me ask [Pythagoras](https://en.wikipedia.org/wiki/Pythagorean_theorem). It's a direct effect of using `dx` and `dy` to control the movement of the ball. 

**Solution**: A better system would be to give the ball a direction and a speed. The ball moves in the direction a number of pixels set by speed. 

Give the ball an `angle` or `direction` property. This will be a number set in radians. Remember radians represent an angle like degrees. This value will determine the direction the ball moves. 

Give the ball a `speed` peoperty. This is a number representing pixels. Used with the angle you'll move the ball this number of pixels _along it's angle_. The snippet below shows how to implement this. 


  
You will need to refactor the code that handles the ball bouncing off other bricks and the sides of the screen. Now the ball uses an angle which will need to be reflected. Here is a sample snippet. 

- https://stackoverflow.com/questions/40472364/moving-object-from-a-to-b-smoothly-across-canvas
- https://www.oreilly.com/library/view/html5-canvas/9781449308032/ch05s02.html

**Challenge**: The collisions are not that great. 

**Problem**: Notice that ball overlaps with a brick as it makes a collision. The the area of the ball is not repsected in the collision detection system. Instead it's center point that is used. The system only sees a collision when the center position of the ball overlaps a brick. 

**Solution**: The solution is to improve the collision. The math of this type of solution can be pretty complex. You can try this if you like, but the better solution is use a 2d Physics library. 

If you want to give it a try look up "Circle Rectangle collisions JavaScript" 

https://stackoverflow.com/questions/21089959/detecting-collision-of-rectangle-with-circle