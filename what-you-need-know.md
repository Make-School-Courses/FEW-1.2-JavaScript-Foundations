# What you Need to Know 

- Write JS Code
	- Define variables
		- const
		- let
		- var
	- Strings
		- Template Strings
	- Loops
		- for loop
	- conditional statements
		- if then else
	- functions
		- parameters
		- arguments
		- return
		- executing a function
	- Scope
		- local scope
		- global scope
		- block scope
		- closure
	- Objects and Classes
		- Object literal
		- Define a class
			- contructor
			- properties
			- methods
			- extends
			- create an instance

# Arrays

## Question 1 - Basics

- Define an Array
	- literal []
	- new Array()
- Add an element to an array
	- push
	- []
- Get the length of an array
- Manipulating an array
	- pop() removes last
	- shift() removes first
	- slice()
	- splice()
- loop through all elements of an array
- Get an element from an array

# Strings

## Basics -

- Define a string
- Get the length of a string
- String methods
	- charAt()
	- charCode()
	- includes()
	- indeOf()
- Escaping
	- \'
	- \n

## Template Strings

- Define a template string and inlcude a variable
- Define a template string use an expression

# Loops and Arrays

## Question 1 - Loops

Write function that prints the contents of an array. Put a space " " between each element. Assume each element is a single string or number. Prin the results to the console.

For example given the the array [33, 12, 74, 8] Your function should print:

<pre>33 12 74 8</pre>

## Question 2 - Loops 2

Modify the previous function to handle one dimensional or two dimensional arrays.

In the case of a one dimensional array the results should be the same as above.

When the array is two dimensional each sub array should print its contents on the same line. For example given
[ [1, 2, 3], [4, 5, 6], [7, 8, 9] ] it should print

<pre>
1 2 3
4 5 6
7 8 9
</pre>

If the given array is: [11, 22, 33] your function should print:

<pre>11 22 33</pre>

## Question 3 - Loops and Arrays

Write a function that generates a two dimensional array of any any height and width filled 0.

Your function given a width of 4 and a height of 6 display:

<pre>
0 0 0 0
0 0 0 0
0 0 0 0
0 0 0 0
0 0 0 0
0 0 0 0
</pre>

Note: if you're using conole.log() you may see: (6) 0 0 0 0. Since each of the 6 lines is the same same string it prints the line once and says how many times it was repeated.

## Question 4 -

Map one array on to another array. Your job is to write a function that takes two arrays and returns an array. The returned array should be the length of the first array with it's values, the values of the second array should be overwritten onto the second array.

For example: function combineArray([0,0,0,0,0,0], [5,4,3]) should return: [5,4,3,0,0,0]

For example: function combineArray([0,0], [5,4,3]) should return: [5,4]

## Question 5 -

Extend the example above to inlcude a third parameter. This will be a number that sets the starting index where the second array will start as it is superimposed over the first array.

For example: function combineArray([0,0,0,0,0,0], [5,4,3], 2) should return: [0,0,5,4,3,0]

For example: function combineArray([0,0,0], [5,4,3], 1) should return: [0,5,4]

## Question 6 -

Write a function that maps a two dimensional array over another two dimensional array.

For example, given the two arrays below:


```JavaScript

// First Array
[
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
]

// Second Array
[
	[1,1,1],
	[1,1,1],
	[1,1,1]
]
```

Write a function that takes two arrays, and "draws" the second array into the first array. Your function should take two extra parameter that set the starting row and column.

For example:

`mapGridOnToGrid(arr1, arr2, 2, 3)`

Returns:

```JavaScript
[
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,1,1,1,0],
	[0,0,1,1,1,0],
	[0,0,1,1,1,0],
]
```

## Question 7 -

Same as above but, array 2 only maps non 0 values to array 1.


```JavaScript

// First Array
[
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
]

// Second Array
[
	[0,0,1],
	[0,1,1],
	[0,1,0]
]
```

`mapGridOnToGrid(arr1, arr2, 2, 3)`

Returns:

```JavaScript
[
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,1,0],
	[0,0,0,1,1,0],
	[0,0,0,1,0,0],
]
```
