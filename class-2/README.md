# FEW 1.2 - Loops and Conditionals

Break out loops and conditionals

## Canvas 

Loops are a tool to repeat a task a number of times. 
Use them to automate repetative code. 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
- https://eloquentjavascript.net/02_program_structure.html

## Conditionals 

If else statements, switch statements, and ternary operators allow your programs to make decisions. 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
- https://eloquentjavascript.net/02_program_structure.html

## Break Out Loops and Conditionals challenges 

The game is going over great with investors. The UI/UX teams have been working furiously, they have many ideas for engineering to implement, lucky you!

Feedback from extensive user testing has revealed that people would find the game more interesting and engaging if there were more colors. You have to admit they may have a point, right?

- Challenge 1
  - Change the colors. 
    - The colors appear as strings in the drawBall(), drawPaddle(), and drawBricks() functions. 
    - Find these, and choose your own colors. 
    - Make all the colors different.
    - Change the background color. 

The new colors are good but someone had the brilliant idea, and it might really be brilliant, to make make the bricks alternate in color. 

To do this you will need to use some conditional logic within the function that draws the bricks. The `drawBricks()` function uses two loops to draw bricks along columns and rows. 

There are a couple variables here that could be useful you in your question for colors!

`c` is the column number. It's used to set the x or horizontal position of a brick. This variable counts from 0 to `brickColumnCount`. 

`r` is the row number. It's used to set the y or vertical position of the brick. This variable counts from 0 to `brickRowCount`. 

To determine the colors you'll need to have a plan. First you'll need to decide on the colors you want to use. The colors are stored as strings but the value can be any color that you can use with CSS. Here are a few options: 

Color Types: 

- Color Word: 
  - 'red', 'green', 'brown', 'orange', 'cadetblue'
  - https://www.w3schools.com/tags/ref_colornames.asp
- Hex color: 
  - '#ff0000', '#ff00ff', '#ddd', '#12ddaa77'
  - https://www.w3schools.com/colors/colors_hexadecimal.asp
- RGB Color
  - 'rgb(255, 0, 0)', 'rgb(123, 87, 255)'
  - https://www.w3schools.com/colors/colors_rgb.asp
  - 'rgba(255, 0, 0, 0.5)', 'rgba(123, 87, 255, 0.76)'
  - https://www.w3schools.com/css/css3_colors.asp
- HSL Colors
  - 'hsl(205, 100%, 50%)', 'hsl(115, 59%, 50%)'
  - https://www.w3schools.com/colors/colors_hsl.asp
  - 'hsla(0, 100%, 30%, 0.3)', 'hsla(115, 59%, 50%, 0.83)'
  - https://www.w3schools.com/css/css3_colors.asp

Tip! HSL colors separate the Hue from the other color components. Because of this use HSL you can easily create rainbows, that is a sequence of colors that change hue, or tints and shades, colors that get lighter or darker but stay in the same hue. 

Strategies

Since the color values used are strings you can generate a string with variables. 

`hsl(${hue}, 100%, 50%)`

You could also store a list of colors in an array. 

`['red', 'green', 'blue']` or `['#f0f', '#ff0', '#0ff']`

- Challenge 2 
  - Make the bricks different colors
    - Make each row of bricks a different
    - Make each column s different color
    - Make each brick a different random color
    - Make the bricks alternate in color
    
    
<figure>
    <img src='Break-Bricks-Colors.png' />
    <figcaption> Abb.1: <a href= "http://r-spatial.org//2016/11/29/openeo.html">http://r-spatial.org//2016/11/29/openeo.html </a> 
    </figcaption>
</figure>


![Break-Bricks-Colors.png](Break-Bricks-Colors.png)


![Break-Bricks-Colors-Alternate.png](Break-Bricks-Colors-Alternate.png)
![Break-Bricks-Colors-Columns.png](Break-Bricks-Colors-Columns.png)
![Break-Bricks-Colors-Rows.png](Break-Bricks-Colors-Rows.png)

You're doing well so well you've been assigned to the experimental squad. You've been given the go ahead to implement experimental features. 

- Stretch Challenges 
  - Make the bricks different sizes
  - Stagger the rows so that the first row is a little further to the left and the next row is a little further to the right. 
  - Make each row use different sized bricks
  
![Break-Out-Bricks-sizes.png](Break-Out-Bricks-sizes.png)
![Break-Out-Bricks-sizes-2.png](Break-Out-Bricks-sizes-2.png)
![Break-Out-Bricks-sizes-3.png](Break-Out-Bricks-sizes-3.png)



