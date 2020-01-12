<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# Class - Lesson 5

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

# Overview

Bundling is a common practice used across the JS ecosystem. While JS is not compiled to source code like other languages, JS files are processed heavily in modern applications. 

<!-- > -->

## Why learn bundling

- It's a professional best practice
- Expect this to be used in any software job using JS
- Make more reliable apps
- Make more widely compatible applications

## Learning Objectives

1. Describe bundling
1. Identify the advantages of bundling code
1. Implement a bundling system

<!-- > -->

# Bundling and compiling JS

Has anyone used bundling or JS compiler before? 

What did it do? 

## Bundling JS

Modern JS applications are not just written in code and used. At the professional level, they are compiled/bundled. 

JavaScript is a scripting language. This means it doesn't need to be compiled in a strict sense, processed and turned into machine code. 

While it doesn't need to be turned into machine code we can still do work to make our code more reliable and compatible with the widest array of browsers. 

A bundler is a tool that converts the source JS that you wrote into code that will be used in your published application/web site. 

<!-- > -->

What does bundling do? Processes your sources file and produces new files. What kinds of processes? 

- minify - reduces file size by removing unnecessary characters
- uglify - renames elements to obfuscate code and reduce file size again
- Compile TypeScript - Converts .ts files into .js files
- Compatibility - Convert ES6 JS into JS that compatible with older browsers
- bundling - combining all .js files into a single bundle.js

Try it out:

https://javascript-minifier.com
https://skalman.github.io/UglifyJS-online/
https://blog.logrocket.com/uglify-vs-babel-minify-vs-terser-a-mini-battle-royale/

Paste some code here and see what the output is. 

Expect to use bundlers on any professional project or in a professional environment. 

<!-- > -->

## Why call it bundling? 

Another effect of the bundler is that it combines multiple .js files into a single .js file. This provides an advantage when loading projects by reducing the number of streams your page requires to load itself. 

Each file is a separate stream. A browser has to provide overhead and manage each stream. More streams require more work, memory, and CPU. 

In the end, bundling is the process of processing and combining files into a single file, often called bundle.js. This bundle.js is the "compiled" application. 

## Libraries and npm 

The bundling process will require npm. Let's take a look at npm. 

You've probably used npm before but have you ever thought about what npm is? Here is how npm describes itself: 

> npm is the world’s largest software registry. Open-source developers from every continent use npm to share and borrow packages and many organizations use npm to manage private development as well.

<!-- > -->

npm consists of three distinct components:

- the website
- the Command Line Interface (CLI)
- the registry

<!-- > --> 

npm stores packages in a registry. Packages are programs, snippets of code. 

npm is a library of code, a web site and a command-line tool that allows you to "check out" packages for use in your projects. 

<!-- > -->

# How to bundle code

You should all have npm installed. If not follow their guide here: https://docs.npmjs.com/about-npm-versions

Create a new npm project in your Break Out directory. 

`npm init -y`

Install webpack. This is a bundler. It's the tool that will do the processing and bundling. 

`npm install --save-dev webpack webpack-cli`

<!-- > -->

## Setup directory 

Setup some directories to manage your files. 

Make the following folders: 

- src (holds your source code)
- dist (holds code you will distribute)


Arrange your files. You should already have some of the files. 

- src/index.js (this is your source code for your break out game)
- dist/index.html (this is the HTML file for your break out game)
- package.json (this should have been created in the previous step)
- webpack.config.json (make this file now you will add code to it later)

In the end your directory will look like this:

```
|- package.json
|- webpack.config.js
|- /src
 |- index.js
|- /dist
 |- index.html
```

With this new arrangement, your index.html will now need to load bundle.js. Find the script tag and point it to the bundle.js. 

`<script src="bundle.js"></script>`

Notice we haven't created bundle.js. This file will be created in the next step by webpack. This will be the compiled, minified, uglified file built from your JS code and code you might have imported from other libs. 

## Webpack config 

Webpack is an industry-standard tool. You will see this tool in the future expects to work with it. It does many things. The webpack.config.js file configures webpack, it is written in JavaScript. 

Copy the code below and paste it into your webpack.config.js. 

```
const path = require('path')

module.exports = {
 entry: './src/index.js',
 output: {
 filename: 'bundle.js',
 path: path.resolve(__dirname, 'dist')
 }
}
```

Examine the config file discuss it with another student. What do you think it will tell webpack to do? 

<!-- > -->

- entry - start with src/index.js
- output 
 - filename - create a file named bundle.js
 - path - put bundle.js in the dist/ folder 

<!-- > -->

## Running Scripts

You can run scripts from the command line. You did this earlier when you installed the npm packages. You can also store scripts in your package.json and run them with your project. 

Open packages.json and find the scripts section. 

edit package.json

```
{
 ...
 "scripts": {
 "test": "echo \"Error: no test specified\" && exit 1"
 "develop": "webpack --mode development --watch",
 "build": "webpack --mode production"
 },
 ...
}
 ```

Here you are adding two scripts

- "develop": "webpack --mode development --watch"
- "build": "webpack --mode production"

The first is for development mode. Use this one when you are working on your project as a developer. 

The second is the build script. Use this when you want to create the bundle.js and distribute your project to the world. 

<!-- v -->

### Run your scripts

Test your work. 

`npm run develop`

Running this script should launch Webpack in development mode. It should compile your .js files and create dist.bundle.js. 

This mode uses the--watch flag. The watch flag monitors file changes you make and recompiles each time there is a change.

Try it make some changes, save. Notice the terminal shows output each time you save. Telling us that webpack is working recompiling bundle.js. 

<!-- > -->

<!-- .slide: data-background="#087CB8" -->
# BREAK

Take a 10-minute break

<!-- > -->

# Lab

Use this lab time to: 

- Install webpack and get the bundler working
- Finish up your Break Project
- Write a quality readme describing what happened in the project 
 - Be sure to explain where you began and where you ended 
 - Explain the tools used
 - Include mention of the branches that contain the work in different stages

<!-- v -->

# Wrap Up and review

- What is bundling? 
- Why use it? 
- Your thoughts? 
- Use cases? 
- What problems did you encounter? 
- How did you solve them?

<!-- > -->

## Additional Resources

- https://javascript-minifier.com
- https://skalman.github.io/UglifyJS-online/
- https://blog.logrocket.com/uglify-vs-babel-minify-vs-terser-a-mini-battle-royale/
- https://www.sitepoint.com/beginners-guide-webpack-module-bundling/

<!-- > -->

## Minute-by-Minute [OPTIONAL]

| **Elapsed** | **Time** | **Activity** |
| ----------- | --------- | ------------ |
| 0:05 | 0:05 | admin |
| 0:05 | 0:15 | [Overview: Bundling](#overview) |
| 0:10 | 0:25 | [Bundling and compiling JS](#bundling-and-compiling-js) |
| 0:30 | 0:55 | [How to bundle code](#how-to-bundle-code) |
| 1:05 | 0:10 | [BREAK](#break) |
| 2:05 | 1:00 | [Lab](#lab) |
| 2:35 | 0:30 | [Wrap Up and review](#wrap-up-and-review) |
| 2:45 | 0:10 | admin |

