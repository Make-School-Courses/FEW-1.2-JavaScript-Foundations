<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.2 - Lesson 1 - Break Out

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

## Your Goals

Goals - 

There are two goals that will bring you success: building portfolio projects and mastering learning objectives. 

Student goals are to create portfolio projects. You should have two portfolio projects that show off your front end skills at the end of 7 weeks. Building these is your goal. I will present ideas and projects, you need to take them to completion. 

If you have ideas that outside the description of the project talk to the instructor. We will always be willing to work with you. My only request will be the projects include the learning objectives and the scope of the project be reasonable.

What are learning objectives? 

I’ll present ideas in class and give them a descriptor. These are learning objectives, concepts and ideas that you need to know to claim mastery of the subject. Learning Objectives are often skills that are related to success at job interviews and on the job. 

When you understand a learning objective you will be able to explain it and put it into practice. There will be learning objectives for each class. You should test your knowledge by explaining the concepts to someone else. Implement the learning objectives in code when the learning objectives are code. Some objectives are larger overarching concepts, in these cases you should identify the learning objective in your code, your project as a whole, or in the larger software ecosystem or the world at large. 

If you are having trouble understanding a learning objective you need to take action. Discuss the topic with another student, talk with a TA, bring questions to class, talk to an instructor during lab or office hours. 

<!-- > -->

## Projects 

You have two projects your goal is to produce something that shows your skills. 

- Breakout - This is a JavaScript implementation of the arcade game Breakout 
- Custom/Contractor Project with React - This will be web site built with React and is open to your own ideas and input. 

## Class 1 - Breakout tutorial

The Breakout tutorial is a great JS practice project. It makes use of many of the core concepts found in every programming language. 

- Variables 
- Functions
- Flow control 
  - loops 
  - if else statements
- Arrays
- Objects 

These things are core to programming in general. Learn these things here and you can apply them anywhere. 

<!-- > -->

## Learning Objectives

Today's learning Objectives are: 

1. Use the JavaScript language
1. Describe and use canvas
1. Identify functional logic and program flow

<!-- > -->

## Initial Exercise

- What is Breakout
  - Quick history of Breakout
- How does the tutorial game work? 
  - It draws all of the game elements to canvas
  - What are cartesian coordinates? 
- Draw Break game with sketch
  - How big is the desktop: 1440 x 1024
  - How big is the game: 480 x 320
  - Draw game elements
    - bricks: 75 x 20
      - rows: 3
      - columns: 5
    - ball: 10 radius
    - paddle: 75 x 10

Exercise 1: Open sketch and draw Breakout 

<!-- > -->

## Canvas 

Canvas is JS API that allows you to draw bit mapped graphics. Use it to create special effects and games. Bit mapped graphics draw faster and allow for pixel level control of an image.

Canvas is a tag: 

```html
<canvas id="myCanvas"></canvas>
```

Think of canvas as the `<img>` tag with the ability to draw on it. 

Like the `<img>` tag you should give `<canvas>` a width and height. 

```html
<canvas id="myCanvas" width="400" height="300"></canvas>
```

To draw on canvas you need to get a canvas context.

```js
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
```

Draw on your canvas using it's API. The tutorial uses a few of the APIs methods.

Drawing with canvas generally follows these steps: 

- begin a new path
- draw a shape with one of the drawing methods
- set the fill style 
- set the stroke style 
- fill and stroke your path

Here are a few examples...

**Draw a rectangle**

```js 
ctx.beginPath()               // begins a new path
ctx.rect(x, y, width, height) // draws a rectangular path
ctx.fillStyle = "#0095DD"     // sets the fill color
ctx.closePath()               // closes the path
ctx.fill()                    // fills the current path
```

**Draw a circle**

```js
ctx.beginPath()
ctx.arc(x, y, radius, startAngle, endAngle)
ctx.fillStyle = "#0095DD"
ctx.fill()
ctx.closePath()
```

**Clear Rectangle**

```js
ctx.clearRect(x, y, width, height)
```

Million Dollar Homepage! Canvas Practice.

https://github.com/soggybag/canvas-practice

<!-- > --> 

## Lab: Break Out tutorial 

Your goal is to complete the tutorial:

https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript

This tutorial is 10 pages. At the end of every page is the completed source code. If you run into any problems you can check your code against the source. 

**This should take about an hour**

The code in the tutorial is very naive. You will be updating the code to modern standards in the next assignment.

<!-- v -->

## Review Breakout

- Show progress
- Review Objectives
- Questions 

<!-- > -->

## Homework: Breakout Tutorial 

Your job is to complete the tutorial here: 

https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript

- Make a **new repo** for this project (this project should in it's own repo!)
- Follow and complete the tutorial
  - Make a commit for each page of the tutorial there are 10 pages.
  - If you have problems or errors check your code against the source which is provided at the end of each tutorial page. 
- Be able to explain the following: 
  - Describe the flow of the break out game. What steps does the code follow to generate the game? 
  - What variables are used by the game code and what is each variable responsible for? 
  - What are the functions used by the game? What is each of these functions responsible for?
  - What is canvas and how is it used in the tutorial/game?
  - The bricks array
    - How is this used?
    - What does it contain?
  - An object is used to represent bricks in the game, what are it's properties and how does the game use these? 

<!-- > -->

## Additional Resources

1. Variables 
  1. [Types and Values ](https://eloquentjavascript.net/01_values.html)
  1. [Variables](https://eloquentjavascript.net/02_program_structure.html#h_lnOC+GBEtu)
1. Functions 
  1. [Defining functions](https://eloquentjavascript.net/03_functions.html)
  1. [Scope](https://eloquentjavascript.net/03_functions.html#h_XqQR5FlX+8)
1. Data Structures
  1. [Arrays and Objects](https://eloquentjavascript.net/04_data.html)
1. Flow Control 
  1. [If else](https://eloquentjavascript.net/02_program_structure.html#h_wpz5oi2dy7)
  1. [For loops](https://eloquentjavascript.net/02_program_structure.html#h_oupMC+5FKN)
1. [Canvas](https://eloquentjavascript.net/17_canvas.html)


<!-- > -->

## Minute-by-Minute [OPTIONAL]

| **Elapsed** | **Time**  | **Activity** |
| ----------- | --------- | ------------ |
| 0:05        | 0:05      | Intro |
| 0:20        | 0:15      | Objectives |
| 0:35        | 0:15      | Overview |
| 0:50        | 0:15      | Canvas |
| 1:40        | 0:50      | Lab - Breakout Tutorial |
| 1:50        | 0:10      | Break |
| 1:50        | 0:30      | Review progress on Tutorial |
| 2:30        | 0:10      | Review Homework |
| 2:30        | 0:20      | Review objectives |
| TOTAL       | 2:50      | - |

