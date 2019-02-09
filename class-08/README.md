# FEW 1.2 Class - 8 

## Phaser

Phaser is a library for making games in JS. Phaser is pretty sophisticated it takes all of the objects you might have created in the Breakout game and abstracts them into a set of classes you might use to make many different games.

Phaser renders everything to a canvas or WebGL Object with JS. Phaser supports many advanced game concepts like physics, spritesheets, tweens, particle systems and more. 

Phaser is free and available on [GitHub](https://github.com/photonstorm/phaser), you can contribute! version 1 was released in 2013. Currently Phaser is up to version 3.

## Why Learn Phaser JS?

Currently there are more libraries and frameworks written for JS than any other language. Learning to use and implement a library is an important skill. 

The Phaser 3 library is very complex. Implementing a project in Phaser isn't about learning Phaser. Instead it's about learning how to read documentation, apply methods and classes from a library _that you didn't write_. This is an important skill every developer has to learn. 

Also, learning Phaser gives you a chance to see the same problems you solved earlier with vanilla JS and how they would be solved with a high a degree of abstraction. If you kept evolving your previous games you would end up with a library like phaser, after some years of developement! Seriously. 

## Getting started

Phaser loads assets through the file system. For this reason you will need to run Phaser projects from a server. 

**You can not run Phaser projects directly from your desktop.**

The common solution is to create a local file server to serve your Phaser Project while testing locally.  

Read more about this [here](https://phaser.io/tutorials/getting-started-phaser3). 

### Phaser 3

Phaser is a game library written in JS. The latest version is 3. There is a lot of documentation written for version 2. For this assignment you must use version 3! When you check the notes, tutorials, and documentation part of your job will be to 
verify that the information you are researching applies to 
version 3. 

If not you'll need convert the infromation, code snippets, 
examples, tutorials, etc. to Phaser version 3. 

### Phaser Tutorial

You've decided to make another game. Rather than write it all from scratch you've decided to use a library! This will allow you to implement complex features without having to invent them on your own from scratch. You heard [Phaser JS](https://phaser.io) is pretty good, and they just came out with version 3, time to code! 

Everyone is talking about libraries. They seem to be the big thing in web development. Anything bigger than the smallest projects could use a library to save time and make it easier to implement sophisticated features. 

You really need to learn some Phaser! Start with a tutorial. This tutorial creates a simple [platform game](https://en.wikipedia.org/wiki/Platform_game). 

- [Phaser 3 Tutorial](https://phaser.io/tutorials/making-your-first-phaser-3-game/)

Your goal is to complete the tutorial before the next class.

#### Alternate Tutorials

Here are a few alternate tutorials you can try instead of the 
tutorial above. It's strictly up to you which you choose. 

- [Flappy Bird](http://www.lessmilk.com/tutorial/flappy-bird-phaser-1)
- [Breakout](http://www.lessmilk.com/tutorial/breakout-phaser)
- [2D Platformer](http://www.lessmilk.com/tutorial/2d-platformer-phaser)

## Webpack

[Webpack](https://webpack.js.org) is a Module Bundler. It's main purpose is to bundle JavaScript files for use in the browser. Webpack can also run tasks. You can use Webpack to process files, bundle them, then start a local web server and serve your project. 

Phaser 3 has a Webpack starter you can use to for building your projects. 
Follow these steps: 

1. Down load the start project [here](https://github.com/photonstorm/phaser3-project-template)
1. Open terminal and `cd` to the directory with the starter template. 
1. Run `npm install` in the terminal

From here you can start a local server and edit your project and see live updates in your browser by running: `npm start`

Files that are part of your "build" will go in the `src` directory. Webpack looks here and creates the bundle from files in src.

Images, sounds, and other file resources should stored in the assets directory. 

> Note: Astute observers will have noticed the message: "... found 1 high severity vulnerability" in the terminal. This is telling us there is a security vulnerability in one of the packages. Ignore this for now since 
the fix is a breaking change.

We won't fix this for now. (**Challenge**: Fork the repo, fix this dependancy, and submit a pull request)

## Challenges 

**Challenge 1**: Get the Phaser 3 Starter project running with Webpack. 

**Challenge 2**: Complete the tutorial. 

This tutorial is involved and has a lot new ideas. Take notes along the way. There are lot of new concepts here. you'll want to revisit these ideas after you have completed the tutorial. 

## Stretch Challenges 

**Stretch Challenge 1**: If you have completed the tutorial try changing the artwork. This is a good start to learning how the system works. Check out these resources or make your own. 

- https://opengameart.org
- https://itch.io/game-assets/free
- https://www.gameart2d.com/freebies.html
- http://untamed.wild-refuge.net/rpgxp.php
- https://opengamegraphics.com
- https://www.glitchthegame.com/public-domain-game-art/

**Stretch Challenge 2**: Modify the tutorial project by changing the art and 'numbers'. Lookup some art on OpenGameArt.org ormake your own. 

The numbers determine how the game plays., Numbers control everything including the speed, position, and size of objects. Read the code carefully and find some numbers and chnage them. Observe the reuslts. 

**Stretch Challenge 3**: If you completed the first tutorial and have some time before the next class try one of the other tutorials. 

Build these alternate tutorials with the Webpack Starter.


