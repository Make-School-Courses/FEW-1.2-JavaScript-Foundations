# FEW 1.2 - Canvas

Canvas draws things into an image made of pixels. 

## Canvas 

Study up on canvas

- https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
- https://eloquentjavascript.net/17_canvas.html

## Break Out canvas challenges 

This game is looking really good. But, marketing thinks it could look even better, have they even played it yet? Doesn't matter they have the ear of the investors, and they want some fancy graphics, but that's okay because so do you!

Use a function or functions to colve these challenges. Take a hint from the starting tutorial code. Notice that the tutorial uses a function to handle drawing each the, bricks, ball, paddle, score, and lives. 

Your goals are to make the game look super fancy by drawing more than just solid colors. 

Gradients

At the moment you're clearing the canvas then drawing bricks, ball, and paddle over the cleared cavnas. Clearing the canvas happens on the first line of the `draw()` function. 

If you want the background to look like something you'll need to fill it before drawing all of the other things on top of it.

- Challenge 1 
  - Fill the background with a gradient
  - https://www.w3schools.com/graphics/canvas_gradients.asp
  - Use a gradient fill for each brick
  
![Break-Bricks-gradient.png](Break-Bricks-gradient.png)

Graphical embelishment is the next big thing. Everyone thinks this could crack the product hunt top ten with a little "graphical embelishment". No one else knows how to do this so it's up to you!

Don't bother looking up "graphical embelishment" it just means draw anything you want, take my word for it. 

The goal is draw stuff on the background then draw the bricks, paddle, and the ball on top.

Sounds pretty random huh? Hey, here's a function that generates random numbers: 

```
function random(n) {
  return Math.floor(Math.random() * n);
}
```

- Challenge 2 
  - Write a function that draws 100 squares positioned at a random x and y positions. 
  - Give each square a random height and width
  - Give each square a random color
    - Tip give the squares a transparent color
  - Draw some columns across the canvas. Follow these steps:
    - Create a function that will draw the background. Call this function on line one of `draw()` function. Be sure to remove the line there that clears the canvas!
    - Decide on a number of columns. 
    - Make for loop that repeats for the number of columns. 
    - Position the current rectangle at column width times the step. 
  
![Break-Bricks-rainbow-1.png](Break-Bricks-rainbow-1.png)
  
You're probably sick of drawing rectangles. Draw a circle! Here is some code. 

```
ctx.fillStyle = '#ff00ff44';
ctx.beginPath();
ctx.arc(x, y, radius, 0, 2 * Math.PI);
ctx.fill();
```

The important line is this one:

`ctx.arc(x, y, radius, 0, 2 * Math.PI);`

The lasy two parameters set the starting and ending angle of the arc. An arc is measured in radians. A comnplete circle is 2 PI Radians. In degrees a complete circle is measured as 360.

- https://www.w3schools.com/tags/canvas_arc.asp

When drawing an arc you'll need to fill it you want to draw it onto the canvas. 

For all of challenges here you'll need to redraw the background before you draw bricks, ball, paddle etc. Best to put this in a function and call it at the top of `draw()`.

- Challenge 3
  - Draw a big circle in the center of the canvas
  - Marketing is cutting a deal with Target you need to draw the Target logo on the canvas. 
    - Draw a big red circle, then draw a medium white circle, last draw a small red circle. 
  - Screw Target and their capitalist schemes, it's Alan's birthday draw a rainbow! Follow this guide:
    - Position the circles in the horizontal center at the bottom edge. This should be x of canvas width / 2, and y of canvas height. 
    - Draw the largest circle first, and concetric circle working inward. 
    - Use hsl color. The hue runs 0 to 360. You want to set it to `360 / totalSteps * step`
  - Draw the rainbow in front of the column pattern. 
    
  ![Break-Bricks-rainbow.png](Break-Bricks-rainbow.png)
  
  ![Break-Bricks-rainbow-2.png](Break-Bricks-rainbow-2.png)
  

    

