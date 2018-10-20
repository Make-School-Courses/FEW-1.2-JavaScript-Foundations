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

- **Challenge 1**
  - Change the colors. 
    - The colors appear as strings in the drawBall(), drawPaddle(), and drawBricks() functions. 
    - Find these, and choose your own colors. 
    - Make all the colors different.
    - Change the background color. 

The new colors are good but someone had the brilliant idea, and it might really be brilliant, to make make the bricks alternate in color. 

<figure>
    <img src='images/Break-Out-Bricks.png' />
    <figcaption> 
      Bricks Default Color 
    </figcaption>
</figure> 

To do this you will need to use some conditional logic within the function that draws the bricks. The `drawBricks()` function uses two loops to draw bricks along columns and rows. 

There are a couple variables here that could be useful you in your quest for colors!

`c` is the column number. It's used to set the x or horizontal position of a brick. This variable counts from 0 to `brickColumnCount`. 

`r` is the row number. It's used to set the y or vertical position of the brick. This variable counts from 0 to `brickRowCount`. 

To determine the colors you'll need to have a plan. First you'll need to decide on the colors you want to use. The colors are stored as strings but the value can be any color that you could use with CSS. Here are a few options: 

**Color Types:**

- [Named Color](https://www.w3schools.com/tags/ref_colornames.asp): 
  - `'red'`, `'green'`, `'brown'`, `'orange'`, `'cadetblue'`
- [Hex Color](https://www.w3schools.com/colors/colors_hexadecimal.asp): 
  - `'#ff0000'`, `'#ff00ff'`, `'#ddd'`, `'#12ddaa77'`
- [RGB Color](https://www.w3schools.com/colors/colors_rgb.asp):
  - `'rgb(255, 0, 0)'`, `'rgb(123, 87, 255)'`
- [RGBA Color](https://www.w3schools.com/css/css3_colors.asp):
  - `'rgba(255, 0, 0, 0.5)'`, `'rgba(123, 87, 255, 0.76)'`
- [HSL Color](https://www.w3schools.com/colors/colors_hsl.asp):
  - `'hsl(205, 100%, 50%)', 'hsl(115, 59%, 50%)'`
- [HSLA Color](https://www.w3schools.com/css/css3_colors.asp):
  - `'hsla(0, 100%, 30%, 0.3)', 'hsla(115, 59%, 50%, 0.83)'`

**Tip!** HSL colors separate the Hue from the other color components. Because of this use HSL can easily create rainbows, that is a sequence of colors that change hue, or tints and shades of a color, colors that get lighter or darker but stay in the same hue. Using HSL it's easier to programatically transform one color into another or create a sequence.  

Hue has a range of 0 to 360. Think of color as a circle and hue moves around the circle starting with red, moving through all of the colors of the rainbow and ending on red. 

**Strategies**

Since the color values used are strings you can generate a string with variables. 

```JavaScript
for (let hue = 0; hue < 360; hue += 20) {
  const hslStr = `hsl(${hue}, 100%, 50%)`;
}
```

You could also store a list of colors in an array. This would be good if you decide on the colors you want to use in advance. 

`['red', 'green', 'blue']` or `['#f0f', '#ff0', '#0ff']`

- **Challenge 2**
  - Make the bricks different colors
    1. Make each row of bricks a different
    2. Make each column s different color
    3. Make the bricks alternate in color
    4. Make each brick a different random color
    
    
<figure>
    <img src='images/Break-Out-Bricks-Colors-Rows.png' />
    <figcaption> 
      Challenge 1.1: Bricks colored by row 
    </figcaption>
</figure>

<figure>
    <img src='images/Break-Out-Bricks-Colors-Columns.png' />
    <figcaption> 
      Challenge 1.2: Bricks colored by column
    </figcaption>
</figure>

<figure>
    <img src='images/Break-Out-Bricks-Colors-Alternate.png' />
    <figcaption> 
      Challenge 1.3: Bricks Alternate color
    </figcaption>
</figure>

<figure>
    <img src='images/Break-Out-Bricks-Random.png' />
    <figcaption> 
      Challenge 1.4: Bricks random colors
    </figcaption>
</figure>

You're doing well. So well you've been assigned to the _experimental squad_. You've been given the go ahead to implement new and experimental features. These are are dangerous and often have deeper implicatoins that leave regular people scratching their heads asking "but, why would you want to do that?"

- **Stretch Challenges**
  1. Make the bricks different sizes
  2. Stagger the rows so that the first row is a little further to the left and the next row is a little further to the right. 
  3. Make each row use different sized bricks
  
<figure>
  <img src='images/Break-Out-Bricks-sizes.png' />
  <figcaption> 
    Stretch 1.1: Bricks resized
  </figcaption>
</figure>

<figure>
  <img src='images/Break-Out-Bricks-sizes-2.png' />
  <figcaption> 
    Stretch 1.2: Bricks staggered
  </figcaption>
</figure>

<figure>
  <img src='images/Break-Out-Bricks-sizes-3.png' />
  <figcaption> 
    Stretch 1.2: Bricks staggered
  </figcaption>
</figure>

