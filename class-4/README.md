# FEW 1.2 - Class Objects

Class Objects and OOP. Use Object Oriented programming techniques to make your code modular and organized. 

## OOPs

Whoa, who wrote this tutorial. It is weak on OOP. It's your job to improve the OOPiness.

Using classes to you can organize your code and make modular systems that could be moved into other projects, and you're sure the world will need these classes soon, better get to work! 

## Creating classes

The engineering team has decided to OOPify the whole game. You're in charge of the refactor. 

You'll be in charge of making a class for each of the game objects. 

- Ball
- Brick
- Paddle
- Score
- Lives 

You'll be making a class for each of these. Each of these objects should hold the variables that describe or control that object as properties.

For example, the Ball class might look like this: 



## Dependancy Injection

An important technique you can make use of here is depedancy injection. Skim this: 

https://en.wikipedia.org/wiki/Dependency_injection

This is a powerful idea that is used often in software development. In a nutshell: 

> A dependency is an object that can be used (a service). An injection is the passing of a dependency to a dependent object (a client) that would use it. The service is made part of the client's state.[1] Passing the service to the client, rather than allowing a client to build or find the service, is the fundamental requirement of the pattern.

Your goal for the current challenges is to create class object for the brick, ball, paddle, and background. These classes will need to draw onto the canvas. The canvas is dependancy for the brick, paddle, ball etc. They are dependent, they can draw without the canvas. 

While you could supply the canvas when you initialized objects that used it that would create a more tightly couple system. 

Passing the canvas to the object when it needs to draw itself is a more elegant solution. 

Imagine you have a class that draws a triangle. 

```
class Triangle {

 render(ctx) {
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}
```

In the code snippet above, instances of Triangle implement the `render(ctx)` method which takes in a canvas rendering context. Triangle draws on to this context. 

This is dependancy injection at work!

## OOP Challenges


 
 - Class 4 objects and classes
    - Dependency injection
    - Challenges
      - Make classes for game objects