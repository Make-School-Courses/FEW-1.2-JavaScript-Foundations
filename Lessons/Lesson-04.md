<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# Class - JS OOP part 2

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

## OOP part 2

This class will be an OOP workshop with the goal of reviewing the concepts from the previous class.

<!-- > -->

### Why work with Classes and inheritence?

This is a big topic which reaches deeply into important areas of computer science. Expect to see OOP and inheritence in the libraries you might work with, in interview questions, and on the job as a software engineer. 

<!-- > -->

## Learning Objectives

1. Create base/super classes 
1. Use inheritence with super and extends
1. Create classes that inherit from a super class

<!-- > -->

## What is inheritence? 

Inheritence is when you get something from your ancestors. 

- genes
- money
- property

In software this could be: 

- variables/properties
- methods/functions

Who do you inherit from? 

- Your parents
- Your grandparents

In software who who do you inherit from?

- Your parent/super class

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

Calling super() in a sub class is like calling the constructor function in your super class. 

** You must call super()!**

If a class takes parameters in it's constructor it must pass these to super. 

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

You must pass parameters to super. Notice the contructor takes these parameters, calling super is like calling the constructor of the super class. 

<!-- > -->

# Using Inheritence

Pair with some at the same stage/level and work on the stretch challenges together.

<!-- v -->



<!-- v -->



<!-- > -->

<!-- .slide: data-background="#087CB8" -->
## [**10m**] BREAK

<!-- > -->

# Topic 2

<!-- v -->

## Overview/TT II (optional) (20 min)

<!-- v -->

## In Class Activity II (optional) (30 min)

<!-- > -->

## Wrap Up (5 min)

- Continue working on your current tutorial
- Complete reading
- Complete challenges

<!-- > -->

## Additional Resources

1. Links to additional readings and videos

<!-- > -->

## Minute-by-Minute [OPTIONAL]

| **Elapsed** | **Time**  | **Activity**              |
| ----------- | --------- | ------------------------- |
| 0:05        | 0:05      | admin   |
| 0:15        | 0:10      | Overview  |
| 0:45        | 0:30      | Inheritence  |
| 0:55        | 0:10      | BREAK   |
| 2:25        | 1:30      | Workshop problem solving time |
| 2:45        | 0:20      | Wrap up review objectives |
| TOTAL       | 2:45      | -                         |
