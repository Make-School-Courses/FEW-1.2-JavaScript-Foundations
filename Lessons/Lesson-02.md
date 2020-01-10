<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# Class - Lesson 2

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

## Modern JS 

You should be using the most up to date JS in your work. It's what will be expected at job interviews and in the profesional environment. 

<!-- > -->

## Learning Objectives

1. Using consistent syntax
1. Modern JS best practice
1. Linting with a style guide

<!-- > -->

## What is code quality? 

<!-- > -->

- Consistent style 
  - Looks good 
  - Reads well 
  - to everyone on the team
- Uses best practices 
  - e.g. const > let > var

<!-- > -->

# ESLint

Make a New Branch in your Break Out repo. You'll be applying all of the changes for this assignment there. 

**Install eslint in your project**

https://eslint.org/docs/user-guide/getting-started

Setup npm:

```
npm init -y
```

Install ESLint:

```
npm install eslint --save-dev
```

Setup a config file. Use the answers below as you follow the setup process. 

```
npx eslint --init
```

Choose these options: 

- To check syntax, find problems, and enforce code style
- None of these
- None of these
- TypeScript No
- Browser
- Use a popular style guide 
- Airbnb: https://github.com/airbnb/javascript 
- JavaScript
- Would you like to install them now with npm? Yes

**Install ESLint in your code editor**

You'll need to install ESLint in your code editor. Go to Packages/Plugins/Extensions and search for ESLint and install. 

<!-- v -->

## Lint your code

**Move your code into a JS file**

The linter will only lint files with the `.js` file extension. Move your code into it a separate JS file `index.js`. 

Then link that to your project. In index.html use: 

`<script src="index.js"></script>`

**Start Linting**

Take a look at `index.js`. There should be some red lines hihglighting sections of your code. These are linting errors. 

Move the cursor over these and you'll see notes from the linter telling your how your code doesn't meet the requirements of the style guide. 

Your job id to figure these out and solve the problems. Your deeper and more important goal job is do your best to understand why profesionals would ask for these changes. 

Take a look at the errors you see and answer these questions: 

- What changes is the linter asking for? 
- Why these changes?

<!-- v -->

## Modern JS 

Here is a list of common changes required by the AirBnB style guide. You can read thheir guide here: 

https://github.com/airbnb/javascript#types

Take a look at the style guide. Pair and discuss.

<!-- > -->

### JS - Const, Let and Var

Best practice: const > let > var. 

Why? const and let are block scoped and are not hoisted. This makes there use more predictable. 

const defines a value that can not be reassigned. Knowing a value will not be reassigned allows the JavaScript engine to operate more efficiently. It also adds safety to your program. 

## JS - Template Strings 

Best Pratice use template literals over the + for concatenation. 

```JS
const name = 'joe'
console.log(`hello ${name}`) // concatenate with template literal
```

## JS - Functions and Hoisting

JavaScript is processed in two steps. The first step the JavaScript engine examines code and processes it. In the second step the code is executed. 

One of the processed that happens in the first step is Hoisting. Hoisting effectively moves some elements to the top of their scope. Things that are effected by hoisting are:

- variables decalred with var
- functions declarations

https://repl.it/classroom/invite/kHcWR5n

<!-- v -->

## Lab

- Solve all of the linter errors
- Consult with your peers if you can't solve an error
- Take notes for unsolved errors
- Try the stretch challenges 

<!-- > -->

<!-- .slide: data-background="#087CB8" -->
## [**10m**] BREAK

<!-- > -->

## After Lab

List linter suggestions on the board. Split into groupd of 4 to discuss these. Each group decides why these suggestions were inlcuded in the style guide. 

- What changes did the linter ask for? 
- Why do you think these changes? 
- What were the problems that couldn't be solved?

<!-- > -->

## Homework

- [Assignment 2 ESLint.md](Assignments/Assignment-2-EsLint.md)

<!-- > -->

## Additional Resources

1. https://eslint.org/docs/user-guide/getting-started
1. https://www.youtube.com/watch?v=SydnKbGc7W8
1. [Assignment 2 ESLint.md](Assignments/Assignment-2-EsLint.md)

<!-- > -->

## Minute-by-Minute 2:45

| **Elapsed** | **Time**  | **Activity**              |
| ----------- | --------- | ------------------------- |
| 0:05        | 0:05      | Admin                     |
| 0:15        | 0:10      | Objectives                |
| 0:35        | 0:20      | Overview: Code Quality    |
| 0:55        | 0:30      | ESLint                    |
| 1:55        | 0:60      | Lab                       |
| 2:05        | 0:10      | BREAK                     |
| 2:35        | 0:30      | Industry best practice    |
| 2:45        | 0:10      | Wrap up review objectives |
| TOTAL       | 2:45      | -                         |

