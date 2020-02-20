<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.2 - Lesson 10 - State

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

## Why you should know this?

State is a key part of components. To fully understand React you have to undestand props and state. 

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

## Why use a Class based Componet? 

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

 

<!-- > -->

<!-- .slide: data-background="#087CB8" -->
## [**10m**] BREAK

Take a break. 

<!-- > -->

## Wrap Up (5 min)

- 

<!-- > -->

## Additional Resources

1. 

<!-- > -->

## Minute-by-Minute [OPTIONAL]

| **Elapsed** | **Time**  | **Activity**              |
| ----------- | --------- | ------------------------- |
| 0:00        | 0:05      | Objectives                |
| 0:05        | 0:15      | Overview                  |
| 0:20        | 0:30      | In Class Activity I       |
| 0:50        | 0:10      | BREAK                     |
| 1:00        | 0:45      | In Class Activity II      |
| 1:45        | 0:05      | Wrap up review objectives |
| TOTAL       | 1:50      | -                         |

