# FEW 1.2 Final Assessment 

## Question 1 - Define Task properties (10pts)

Define a class object that represents a Task. It should have the following properties: 

- `title`: String
- `isComplete`: Boolean
- `date`: Date

The `isComplete` property should have a default value of `false`. 

The `date` property should be assigned a default value of the current Date you can do this by making a new date with `new Date()`.

## Question 2 - Define Task.formattedDate() (10pts)

Add a new method to the Task Class that will format the date to something short and human readable. Call the new method: `formattedDate()`. 

Hint: use `Date.toString()` to easily convert a date to a string.

This new method should return a formatted date. 

## Question 3 - Define Task.completed() (10pts)

Add another method, `completed()` that displays the `isComplete` property, which is a Boolean as a human readable string. It should return "completed" when `isComplete` is true and "not complete" when `isComplete` is false. 

This method should return a string. 

## Question 4 - Define Task.toString() (10pts)

Add a new method to the Task class called `toString()`. The `toString()` method should return a string that describes the Task. The return string should read: 

"<title> | <formattedDate> | <completed>"
	
For example calling `toString()` on a task might return the following string: 

"Feed cat Wed | Jul 28 1993 | not complete"

## Question 5 - Define TaskList (10pts)

Your next job is to write a class that will manage an array of Tasks, call this new class: TaskList. TaskList should define a property: `tasks`, which will hold an array of Tasks. 

- tasks: Array 

## Question 6 - Define TaskList.addTask() (10pts)

Add a method to TaskList that adds tasks to the list. Call the new method: `addTask()`. This method should create a new task and add it to the tasks array. The method must accept the title, date, and isCompleted params. 

## Question 7 - Define TaskList.showTasks() (10pts)

The TaskList needs a method to display the list of tasks. Name this new method `showTasks()`. This method should loop through the array of tasks and call `toString()` on each and print the string returned to the console. 

## Question 8 - Adding some Tasks (10pts)

Use the code below to add some tasks to your TaskList. Copy and paste this into the top your document. 

Notice some of the sample data is missing dates or isCompleted properties. Your code should take of these situations with default values when they occur. 

```JavaScript
const taskData = [
	{ title: 'Feed cat', date: '11/17/19' },
	{ title: 'Call mom' },
	{ title: 'Practice JS', isCompleted: false },
	{ title: 'Bake Cake', date: '3/3/19', isCompleted: true }
]
```

Loop through the array of objects above and add a new task to your TaskList for each item. 

## Question 9 - Display Tasks (10pts)

Call `showTasks()` on your task list to display all of the tasks. The tasks should display in the console something like: 

```
Feed cat | Nov 17 2019 | not complete 
Call mom | Mar 4 2019 | not complete
Practice JS | Mar 4 2019 | not complete
Bake Cake | Mar 3 2019 | completed
```

## Question 10 - Show completed/not completed tasks (10pts)

Add a new method to the TaskList called `showCompleted()`. This method should take a Bool as a parameter. When the 

Add a method `showCompleted(completion)` this method takes a boolean `completion`, when true it displays all of the completed tasks false and it shows the not completed tasks. The method should loop through the list and call `toString()` on each task that matches the completion param. 

# Total 100pts








