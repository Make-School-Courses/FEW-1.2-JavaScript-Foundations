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

- DAY_PER_STEP: 0.2
- ENEMY_FIREPOWER_AVG: 5
- ENEMY_GOLD_AVG: 50
- EVENT_PROBABILITY: 0.15
- FINAL_DISTANCE: 1000
- FIREPOWER_WEIGHT: 5
- FOOD_PER_PERSON: 0.02
- FOOD_WEIGHT: 0.6
- FULL_SPEED: 5
- GAME_SPEED: 800
- SLOW_SPEED: 3
- WEIGHT_PER_OX: 20
- WEIGHT_PER_PERSON: 2

The `OregonH` object also holds a couple other objects. These contain systems that manage parts of the game. These are: 

- `Caravan` - Keeps track of the Caravan
- `Event` - Manages events that occur in the game
- `Game` - Manages general game stuff
- `UI` - Handles the User Interface

Each of these has it's own file and the code that generates this object is contained in that file. 

## Challenges 

The game is made up of several Objects each with properties and methods that control and manage game play. 

- **Challenge 1**: Update the Caravan Class
  1. 