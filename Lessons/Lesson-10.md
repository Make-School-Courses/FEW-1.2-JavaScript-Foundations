<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.2 - Lesson 10

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

## Minute-by-Minute

| **Elapsed** | **Time** | **Activity** |
| ----------- | -------- | ------------ |
| 0:00 | 0:05 | [Learning Objectives](#learning-objectives) |
| 0:05 | 0:15 | [Why you should know this](#why-you-should-know-this)] |
| 0:20 | 0:30 | In Class Activity I |
| 0:50 | 0:10 | BREAK |
| 1:00 | 0:45 | In Class Activity II |
| 1:45 | 0:05 | Wrap up review objectives |

<!-- > -->

## Why you should know this?

**State** is a key part of components. To fully understand React you have to undestand props and state. 

<!-- > -->

## Learning Objectives

1. Describe State
1. Compare Props and State
1. Use State in components

<!-- > -->

## Class Based components 

Components can also be written/Created from a class. In the previouse examples you used functions to make components. 

```JSX
import React, { Component } from 'react'

class Clicker extends Component {
  constructor(props) {
    super(props)
    ...
  }
  render() {
    return (
      <div>
        <h1>0</h1>
        <button>Click</button>
      </div>
    )
  }
}
```

<!-- > -->

Class based components: 

- Written as a class
- Must Extend React.Component
- Must include a render method 
- Must pass props to super

Pick these things out of the code sample above.

<!-- > -->

## Why use a Class based Component? 

Class based components have access to `state`. State is an important part of components. 

Props are values that are injected into a component from outside and cause a component to render when they are updated. 

State is a value held internally by a component. When state changes the component renders. 

<!-- > -->

### Defining state 

Define state in the constructor. State is always an object. 

```JSX
import React, { Component } from 'react'
class Clicker extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  ...
}
```

<!-- > -->

- State is always an object
- State is always an instance property on this
- Values are stored as properties

<!-- > -->

### Changing State

You **must** change state by calling `this.setState()` with the new value for state. 

```JSX
import React, { Component } from 'react'
class Clicker extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    ...
  }
}
```

<!-- > -->

- You should always change state by calling `this.setState()`
- With the new value of state `this.setState({ value: newValue })`
- Always access state with `this.state.someProperty`

<!-- > -->

### Handling Click events

Adding events in React is done through props. In vanilla JS you might add an event listener: 

```JS
button.addEventListener('click', (e) => { ... })
```

This same type of event would be created in React like this: 

```JSX
<button onClick={(e) => { ... }}>Click</button>
```

<!-- > -->

```JSX
import React, { Component } from 'react'
class Clicker extends Component {
  constructor(props) {
    super(props)

    this.state = { count: 0 }
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <h1>0</h1>
        <button onClick={(e) => {
          this.increment()
        }}>Click</button>
      </div>
    )
  }
}
```

<!-- > -->

- Events receive an event object
- Arrow functions are good here

<!-- > -->

## Lab

Try these challenges during lab: 

### Challenge 1

Create a counter component. It should have a button that increases the count and display the count. Each time you click the displayed count should update and show the new value. 

Use state to track the count. 

### Challenge 2

Make an instance of your counter in the root component App. test it and make sure it's working. 

### Challenge 3 

Make three instances of the Counter Component in the root component. Test these. They should each track a separate value. 

This is state. Each component can keep their own state. State is held inside each component that defines it. 

### Challenge 4

Modify the counter component so that it can count in any increment. For example each click adds 1, 3, or 5. Then **make three counters using the same component**. The first counter shouls count in 1, the second by 3, and the third by 50!

You'll be making a single counter component. Then making three instances of this component. 

To make this work you'll be passing the step amount (the amount to add with each click) to each instance of the component as a prop. For example: 

```js
<Counter step={1} />
<Counter step={3} />
<Counter step={50} />
```

### Challenge 5

Add some styles to your component. 

### Challenge 6

You want to show the total count of all counters. To do this you'll need to **move state out of the counters** and into the parent component! 

This is called lifting state. Lifting state is the idea of moving state out of a child and into the parent. You can think of components as a tree.

The Counter parent component will need to define state which is passes down to each of Counter components which are it's children.

Do this by defining state in the parent and passing the value to the children. 

To handle clicks you'll need those clicks to execute in the parent. To do this pass the click handler down to the child components with a prop. 

<!-- > -->

<!-- .slide: data-background="#087CB8" -->
## [**10m**] BREAK

Take a break. 

<!-- > -->

## Wrap Up (5 min)

- Review State
- Compare Props and State
- Update tracker and answer questions about homework

<!-- > -->

## Additional Resources

1. https://reactjs.org/docs/faq-state.html
