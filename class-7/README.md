# FEW 1.2 - Class 7

Using Class Objects

The original game was made with Object literals. We can improve on this by using Class Objects. Defining a Class makes the code easier to read and provides more intent on what we are trying to express with code. Using Classes also gives us a better syntax for expressing our code. 

## Update to Class Objects 

Read up on JavaScript Classes [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

## General Structure 

The game is built with a single object `OregonH` this acts as a name space. This name space gives the game a place to store all of it's data and methods. This good because other scripts are unlikely to overwrite names used here. 

At the root of `OregonH` are properties that are global to the game. These are things like `FINAL_DISTANCE` which sets the distance the caravan has to travel, and `WEIGHT_PER_OX` which sets the amount each oxen can carry. 

You can view these properties yourself by openign the game in the browser. Open the console and type: `OregonH`

Here is a list of all of these properties. 

- `DAY_PER_STEP`
- `ENEMY_FIREPOWER_AVG`
- `ENEMY_GOLD_AVG`
- `EVENT_PROBABILITY`
- `FINAL_DISTANCE`
- `FIREPOWER_WEIGHT`
- `FOOD_PER_PERSON`
- `FOOD_WEIGHT`
- `FULL_SPEED`
- `GAME_SPEED`
- `SLOW_SPEED`
- `WEIGHT_PER_OX`
- `WEIGHT_PER_PERSON`

The `OregonH` object also holds a couple other objects. These contain systems that manage parts of the game. These are: 

- `Caravan` - Keeps track of the Caravan
- `Event` - Manages events that occur in the game
- `Game` - Manages general game stuff
- `UI` - Handles the User Interface

Each of these has it's own file and the code that generates this object is contained in that file. 

The original code declares the `OregonH` variabel at the top of each of these files like this: 

`var OregonH = OregonH || {};`

This says assign `OregonH` to itself or assign it an empty object. If the variable is not set then it is set to an emptry object. If it is set it's set to itself. This mechanism is used to share this object across all of the JS files. 

## Challenges 

The game is made up of several Objects each with properties and methods that control and manage game play. 

Your job is to convert these 

- **Challenge 1**: Update the Caravan Class
    1. Convert the Caravan Object into a Class. This Object is defined in `Caravan.js`. The Caravan Object has the following properties and methods. 
      - Properties: 
        - day
        - distance 
        - crew
        - food
        - oxen
        - money
        - firepower
      - Methods 
        - init(stats)
        - updateWeight()
        - updateDistance()
        - consumeFood()
      