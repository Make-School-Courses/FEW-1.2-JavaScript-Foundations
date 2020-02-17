<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.2 - Lesson 9 - Styling Components

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

## Why you should know this?

Components can be styled with CSS. The component architecture and virtual DOM mean styles need to be handled a little differently with React projects.

<!-- > -->

## Learning Objectives (5 min)

1. Use CSS with React
1. Organize CSS with Components 
1. Describe BEM (Block Element Modifer) naming
1. Use BEM

<!-- > -->

## Styling Comoponents

https://reactjs.org/docs/faq-styling.html

**Inline styles**

Any HTML element can uses styles defined in the style sttribute. Generally these are considered not best practice. 

React turns this notion on it's head. Since components are self contained and reusable it's a good idea for them to contain their styles. 

In traditional websites separation of style structure and logic is the standard. 

```JSX
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```

Note the value assigned to the style prop/attribute is an object and all properties should match the JS property names in camelcase.

```JSX
function HelloWorldComponent() {
  return <div style={{ color: 'blue', fontSize: '24px' }}>Hello World!</div>;
}
```

- Pros: 
  - Styles and components are in a single file. You can see the styles and code side by side.
  - Styles are written in JS which allows values to be calculated with JS
  - Styles are very portable with no extra files. 
  - Avoids name space collisions
- Cons: 
  - Inline styles may have performance issue. 
  - Inline styles are add some extra code to your component files.
  - Doesn't leverage the advantages of using a styl`esheet`

**Single Stylesheet**

You can still use a single stylesheet like you have done in the past. This works best when components are not shared across multiple projects. 

This has the advantages of traditional stylesheets in that all of your styles are in one place.

To implement this technique put all of your styles in index.css or App.css.

- Pros: 
  - Having all of your styles in one place is efficient
  - It's way you have worked in the past. 
  - Leverages the advantages of stylesheets
- Cons: 
  - Components are less portable since styles are separate.

**Component StyleSheets**

Since components are reusable from project to project being able to easily include styles with the component is good. 

This technique replies on the configuration of the Create React App project. This project allows styles to be imported into components just like JS files. 

Using this technique you would create a style sheet for each component. Best practice would be to name the style sheet with the same name as the component. You'll see this in the Create React App starter code. 

Create a style sheet with the same name as your component. 

`App.css`

Import that style sheet at the top of the component: 

`import App.css`

- Pros: 
  - Using Style sheets is good
  - Components are very portable
  - Clear which styles belong to which components
- Cons: 
  - Has potential for name clashes
  - Requires careful naming of classes in style sheet

<!-- > -->

## Using Sketch 

Sketch can be a valuable tool for designing websites. I recommend you plan your project with Sketch before starting to code. 

Create an art board for web. 

- Choose insert > Artboard
- Choose Responsive Web
  - Create an artboard at one of the sizes
  - You can choose sizes for desktop, tablet, and mobile
- Draw your wire frame!

Wire frame in components. As you work on your wireframes think of each box you draw as a component. Remember you can reuse components. Elements that are repeated can share the same component.

Use Symbols like components. Symbols in Sketch are reusable elements that also allow some level of configuration. 

**Symbols in Sketch are very similar to React Components**

Try it for yourself. 

- Open Sketch or Adobe XD. 
- Make an artboard for a desktop sized app.
- Wireframe the page page you want to create, or tutorial project. 
- When you find an element that is repeated make a symbol. 
  - Repeated elements might be: 
    - Links
    - Content sections
    - Cards

Do your best to style elements as closely as you can to what you want in your web site. 

- Set the colors
- Set the fonts

Later when you are applying styles right click elements in sketch and choose "Copy CSS Styles". While this will do all of the work it migth help you respolve the style properties needed for various elements. 

<!-- > -->

## Defining your Final Project

Your final project should

- Use react
- Use React Router
- Be worth putting in your portfolio

<!-- > -->

<!-- .slide: data-background="#087CB8" -->
## [**10m**] BREAK

<!-- > -->

## Lab



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
| 0:00        | 0:05      | Objectives                |
| 0:05        | 0:15      | Overview                  |
| 0:20        | 0:30      | In Class Activity I       |
| 0:50        | 0:10      | BREAK                     |
| 1:00        | 0:45      | In Class Activity II      |
| 1:45        | 0:05      | Wrap up review objectives |
| TOTAL       | 1:50      | -                         |

