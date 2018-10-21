# FEW 1.2 - Class 6 

Updating and refactoring 

There is a lot of code here. You need to start digging in and figuring out how it works. 

After playing the game/using the code the next step is reading the code and making small improvements. 

## Updating Syntax

**Template Strings**

The code seems to have been written before template strings. Template Strings are really great, they shorten long string concatenations and are easier to read. They can also be broken up on to multiplt lines.

- [Template Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

**`const`, `let`, and `var`**

The original code was written before `const` and `let` were available. Using `const` and `let` will improve performance, catch errors, make your intent clear. 

Updating variable declarations will require you to look at each variable and examine it's scope and figure out whether the variable should be mutable or immutable.

Remember `const` and `let` are not hoisted! This effects `var OregonH` which appears at the top of each file. This is shared across all files it will need to use the `var` declaration!

- [const, let, and var](https://hackernoon.com/js-var-let-or-const-67e51dbb716f)
- [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

- **Challenge 1**: Updated to Template Strings
  1. Read through your code and find all of the strings. Examine each one. If there is some concatenation involved with the string change it into a template string. For example: 
  
```JavaScript
// Original Source
this.ui.notify('Left ' + droppedGuns + ' guns behind', 'negative');

// Becomes
this.ui.notify(`Left ${droppedGuns} guns behind`, 'negative');
```

- **Challenge 2**: Update `var` to `const` or `let`
  1. Read through each file and examine each variable declaration. Ask yourself if this variable should be a `const`, `let`, or `var`. Here is a guide.
    