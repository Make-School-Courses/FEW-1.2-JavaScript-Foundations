<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.2 - Lesson 7 - Single Page Applications Part 2

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

# Overview

This class you will explore React a little more in-depth. We will learn about the virtual DOM and how React handles collections. 

<!-- > -->

## Why

Single-page applications are how many web applications are built today. Expect to see this in the workplace. React is the most popular tool used today for building single-page applications. You should know how to use it. 

<!-- > -->

## Learning Objectives

1. Describe use cases for props
1. Build applications from components 
1. Design components 
1. Use Component collections and keys

<!-- > -->

# React Concepts

React concepts you should know

<!-- > -->

## Virtual DOM 

React uses a virtual DOM. Rather than manipulating the DOM directly by modifying, creating, and removing DOM elements React keeps track of DOM elements created by Components in JavaScript and updated the actual DOM from what it holds in this virtual DOM. 

Take a moment to read one of these articles: 

https://www.codecademy.com/articles/react-virtual-dom

https://reactjs.org/docs/faq-internals.html

Discuss: the virtual DOM

<!-- v -->

## Important things you should know about the Virtual DOM

- It's a React thing, it's not part of the default JS API
- You shouldn't: 
 - use jQuery or other non-react JS libs with React
 - manipulate DOM elements directly, for example: 
 - getElementById() is not reliable since elements might be added and removed by the virtual DOM system
 - innerHTML is not reliable since the virtual DOM system will not be aware of your changes and overwrite them
 - etc.

How do you get around this? 

**Make all of your changes via components within React's systems**

There are a couple of special cases that need to be looked at closely. We will be covering these later. 

- Forms and inputs - if the virtual DOM replaces input you'd lose what was typed into that input. There is a special pattern for this. 
- Animation - animation of components can have problems when the virtual DOM updates. You can use a ref or a React specific animation lib. 
- Canvas - if the virtual DOM was to update your canvas you'd lose anything that was drawn on the canvas. React has a special feature called a ref which prevents virtual DOM from updating a referenced node. 

<!-- v -->

# React Collections

Collections groups of things you keep together. In programming terms, a collection is an array, an object, or a dictionary. 

React is a library for building user interfaces. Often user interfaces are made up of collections. Give me some examples of situations where you have used an Array of Objects to display elements in a user interface? 

<!-- > -->

What kind of code did you write to use an array to display something on the screen? 

<!-- > -->

You probably used a loop. Loops are common an allow us to display none or many things. Or perform none, one, or many actions. 

You might show a list of products in a shopping cart, an array of images in a slide show, create a list of users, or posts, or comments. The possibilities are endless. 

When you have an Array and you want to look at each item in the array you have used a loop. 

<!-- > -->

React handles collections in an elegant way. If React sees an Array of JSX elements it will automatically display them all no need for a loop. What would this look like? 

```JS
const headings = [
 <Heading str='Hello World' />,
 <Heading str='Foo Bar' />,
 <Heading str='Foo World' />,
 <Heading str='Hello Bar' />,
 <Heading str='Hello foo' />,
 <Heading str='Foo Hello' />
]

function App() {
 return (
 <div className="App">
 <header className="App-header">
 {headings}
 </header>
 </div>
 );
}
```

Hey, there's no loop! 

Where would the loop have been here?

## Keys 

When you use a collection to display JSX elements in this way you'll get a warning: 

> Warning: Each child in a list should have a unique "key" prop.

This warning is related to the virtual DOM. For the virtual DOM to track elements in collections each element needs to have a unique key prop. 

The Virtual can't tell if an element in a collection has changed unless that element has a unique way to identify it. 

You can see the warning in the console. 

Add a key by giving each element a unique key prop. The value can be anything you like but keys in a collection should unique. 

```JS
const headings = [
 <Heading key='Hello World' str='Hello World' />,
 <Heading key='Foo Bar' str='Foo Bar' />,
 <Heading key='Foo World' str='Foo World' />,
 <Heading key='Hello Bar' str='Hello Bar' />,
 <Heading key='Hello foo' str='Hello foo' />,
 <Heading key='Foo Hello' str='Foo Hello' />
]

...
```

Try this. The error should go away. 

<!-- .slide: data-background="#087CB8" -->
## BREAK

Take a ten-minute break and think of your favorite lists. 

<!-- > -->

# Lab

Continue working on the React Fundamentals tutorial. This needs to be done before the next class. Use the lab time to work, ask questions, solve problems. 

<!-- v -->

# After Lab

- What questions came up while working on the tutorial? 
- How did you solve problems? 
- What do you think about React? 

Discuss

<!-- v -->

## Wrap Up

- Review learning Objectives
- Clarify homework expectations

<!-- > -->

## Additional Resources

1. https://www.codecademy.com/articles/react-virtual-dom
1. https://reactjs.org/docs/faq-internals.html


<!-- > -->

## Minute-by-Minute [OPTIONAL]

| **Elapsed** | **Time** | **Activity** |
| ----------- | --------- | ------------ |
| 0:05 | 0:05 | Admin |
| 0:20 | 0:15 | [Overview](#overview) |
| 0:50 | 0:30 | [React Collections](#react-collection) |
| 1:00 | 0:10 | [BREAK](#break) |
| 2:00 | 1:00 | [Lab](#lab) |
| 1:00 | 0:30 | [After Lab](#after-lab) |
| 2:45 | 0:15 | [Wrap up review objectives](#wrap-up) |

