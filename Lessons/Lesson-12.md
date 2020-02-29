<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.2 - Lesson 12 - lesson topic

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

## Hosting your React Projects with GitHub Pages

Hosting React projects on GitHub requires a little bit of extra work. React projects need to be built and bundled before they can be published to the web. 

Using the power of GitHub you can publish to a branch and continue to work/edit on your master branch. This workflow mirrors the work flow used by professionals. 

The process can be accomplished with `gh-pages` package. Install it now: 

`npm install gh-pages --save-dev`

Edit your `package.json` add the following line at the root level of the JSON  object. 

`"homepage": "http://{username}.github.io/{repo-name}",`

**Replace `{username}` with your GitHub user name, and `{repo-name}` with the name of the for this project**

Watch the comma at the end! 

Find the scripts section and add these two lines.

```JSON
"scripts": {
  ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Be aware of the commas! You may need to add a comma on the line before `"predeploy": ...` or add a comma after `"deploy": ...`.

Last, run: 

`npm run deploy`

This should build your React project, compiling your ES6 and JSX into a JS bundle. Then, it creates a gh-pages branch on your GitHub repo and pushes your production code to this branch. 

**Note!** I had an error in the console that read: 

> `Failed to get remote.origin.url (task must either be run in a git repository with a configured origin remote or must be configured with the "repo" option).`

I had to run `xcode-select --install` to fix this. Not sure why, it probably had something to do with a system update. 

**React Router** 

If you are using React Router you must use HashRouter! BrowseRouter will not work with GitHub Pages! 

To make this fix you will probably only have to change a single line of code, most likely in App.js. 

Look for: 

`import { BrowserRouter as Router, Route } from 'react-router-dom'`

Change this to:

`import { HashRouter as Router, Route } from 'react-router-dom'`

<!-- > -->

## Workshop Day

We will use this day to work on completing your final project. 

<!-- > -->

## Learning Objectives (5 min)

1. Idenitfy areas for improvement
1. Idenitfy problems and strategies to solve them

<!-- > -->

<!-- .slide: data-background="#087CB8" -->
## [**10m**] BREAK

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

