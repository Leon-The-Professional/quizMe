//Quizzes 

// HTML
let formsInpQz = {
    key: 'Describe what each of the following inputs does/is used for:',
    questions: [
        '1.	text',
        '2.	checkbox',
        '3.	radio',
        '4.	submit',
        '5.	button',
        '6.	image',
        '7.	file',
        '8.	password',
        '9.	reset',
        '10. range',
        '11. hidden',
        '12. email'

    ],
    answers: [
        '1.	The default value. A single-line text field. Line-breaks are automatically removed from the input value.',
        '2.	A check box allowing single values to be selected/deselected.',
        '3.	A radio button, allowing a single value to be selected out of multiple choices with the same name value.',
        '4.	A button that submits the form.',
        '5.	A push button with no default behavior displaying the value of the value attribute, empty by default.',
        '6.	A graphical submit button. Displays an image defined by the src attribute. The alt attribute displays if the image src is missing.',
        '7.	A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select.',
        '8.	A single-line text field whose value is obscured. Will alert user if site is not secure.',
        '9.	A button that resets the contents of the form to default values. Not recommended.',
        '10. A control for entering a number whose exact value is not important. Displays as a range widget defaulting to the middle value. Used in conjunction min and max to define the range of acceptable values.',
        '11. A control that is not displayed but whose value is submitted to the server. There is an example in the next column, but it is hidden!',
        '12. A field for editing an email address. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.',
    ]
}
let formsInpAttQz = {
    key: 'Describe what each attribute does',
    questions: [
        '1. checked',
        '2. disabled',
        '3. readonly',
        '4. max',
        '5. maxlength',
        '6. min',
        '7. autocomplete',
        '8. required',
        '9. size',
        '10. step',
        '11. value',
        '12. placeholder',
        '13. multiple',
        '14. pattern',
        '15. autofocus',
    ],
    answers: [
        '1.	Starts a checkbox as checked on load.',
        '2. Specify that the input cannot be selected or modified and the value will not be sent with a submit action',
        '3. Specifies that an input cannot be modified (however, a user can tab to it, highlight it, and copy the text from it).',
        '4.	Set the max selectable amount of a given range. ',
        '5.	Set the max amount of characters a text input can hold.',
        '6.	Set the min selectable amount of a given range.',
        '7.	Provides autocomplete functionality based on what is provided by the browser.',
        '8.	Requires that a field must not be blank in order to proceed with the submission of a form.',
        '9.	Specifies the size of a given input.',
        '10. Specifies the value jumped at a time, usable with range or number inputs.',
        '11. Specifies an initial value or for option inputs like option, radio and checkbox; specifies what value an option will carry when submitted.',
        '12. Sets what is written in an input before the user selects it.',
        '13. Specifies whether an input can output multiple values.',
        '14. Specifies a pattern that must be followed for an input to submit.',
        '15. Sets which input will be focused on at load.'

    ]
}
let formsGenQz = {
    key: '',
    questions: [
        "1.	 What is the <strong>input</strong> element?",
        "2.	What are the <strong>select</strong> and <strong>option</strong> elements?",
        "3.	What is the <strong>text-area</strong> element?",
        "4.	What is the form attribute <strong>action</strong>?",
        "5.	What is the form attribute <strong>method</strong>?",
        "6.	What is the form attribute <strong>target</strong>?",
        "7.	What is the form attribute <strong>name</strong>?",
        "8.	What are <strong>labels</strong> used for and how do you connect them to an input?",
        "9.	What are the <strong>fieldset</strong> and <strong>legend</strong> elements?",
        "10. What javascript function will prevent a form from submitting to a server?",
    ],
    answers: [
        '1.	The <input> HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.',
        "2.	The <select> HTML element represents a control that provides a menu of options. Each <option> element should have a value attribute containing the data value to submit to the server when that option is selected. If no value attribute is included, the value defaults to the text contained inside the element. ",
        "3.	The <textarea> HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.",
        "4.	The URL that processes the form submission. This value can be overridden by a form action attribute on a <button>, <input type='submit'>, or <input type='image'> element. This attribute is ignored when method='dialog' is set.",
        "5.	The HTTP method to submit the form with. Possible (case insensitive) values: post: The POST method; form data sent as the request body. get: The GET method; form data appended to the action URL with a ? separator. Use this method when the form has no side-effects. dialog: When the form is inside a <dialog>, closes the dialog and throws a submit event on submission without submitting data or clearing the form.",
        "6.	Indicates where to display the response after submitting the form. In HTML 4, this is the name/keyword for a frame. In HTML5, it is a name/keyword for a browsing context (for example, tab, window, or iframe). The following keywords have special meanings: _self (default): Load into the same browsing context as the current one. _blank: Load into a new unnamed browsing context. _parent: Load into the parent browsing context of the current one. If no parent, behaves the same as _self. _top: Load into the top-level browsing context (i.e., the browsing context that is an ancestor of the current one and has no parent). If no parent, behaves the same as _self.",
        "7.	The name of the form. The value must not be the empty string, and must be unique among the form elements in the forms collection that it is in, if any. The name is often used in backend coding.",
        "8.	The <label> HTML element represents a caption for an item in a user interface. It is often connected to input elements, and increases the clickable area to focus on those elements they are tied to. To connect an element to a label, enter the element’s ID as the value in the ‘for’ attribute on a label.",
        "9.	The <fieldset> HTML element is used to group several controls as well as labels (<label>) within a web form. The <legend> element acts as a title for a fieldset, and we’ll appear at the top of a fieldset box.",
        "10. .preventdefault()",

    ]
}
let tablesQuiz = {
    questions: [
        '1. What are the proper semantic element names used to organize the layout of a table?',
        '2. What are colspan and rowspan?',
        '3. What are the four key tags used in creating a table, and what do they all refer to?',
    ],
    answers: [
        '1. thead, tfoot, tbody',
        '2. Table attributes that adjust the size of cells in a table by how many columns and/or rows a cell should take up',
        '3. &lt;table&gt;, &lt;thead&gt; table head, &lt;td&gt; table data, &lt;tr&gt; table row'
    ]
}
//CSS
let flexboxQuiz = {
    questions: [
        '1.	What is <strong>flexbox</strong>?',
        '2.	How do you create a flex container?',
        '3.	What is the <strong>flex-direction</strong> property, what values can the property be set to, and what value is the default?',
        '4.	What is the <strong>flex-wrap</strong> property, what values can the property be set to, and what value is the default?',
        '5.	What is the <strong>flex-grow</strong> property, what values can the property be set to?',
        '6.	What is the <strong>flex-shrink</strong> property, what values can the property be set to?',
        '7.	What is the <strong>flex-basis</strong> property, what values can the property be set to?',
        '8.	What is the <strong>justify-content</strong> property? What is the default value of justify-content? ',
        '9.	What is the <strong>align-items</strong> property? What is the default value of align-items?',
        '10. What is the <strong>align-content</strong> property? What is the default value of align-content?',
        '11. What are the differences between align-items and align-content?',
        '12. What values can be specified for justify-content?',
        '13. What is <strong>align-self</strong>?',
        '14. What is the <strong>flex-flow</strong> property?',
        '15. What is the <strong>flex</strong> property? Describe the different shorthand options.',
        '16. What does the <strong>order</strong> property do in flexbox?',
    ],
    answers: [
        "1.	Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex (expand) to fill additional space or shrink to fit into smaller spaces. ",
        "2.	Set display: flex on a parent container. Child elements within that container become flex items.",
        "3.	The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed). Row is the default direction, and the other three directional options are row-reverse, column, column-reverse.",
        "4.	The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked. nowrap is the default quality, the other two options are wrap or wrap-reverse.",
        "5.	The flex-grow CSS property sets the flex grow factor of a flex item's main size. This property specifies how much of the remaining space in the flex container should be assigned to the item (the flex grow factor). Unitless values (numbers) are used.",
        "6.	The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink. In use, flex-shrink is used alongside the other flex properties flex-grow and flex-basis. Unitless values (numbers) are used.",
        "7.	The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing. Values with unit measurements to set width (or height if direction is set to column) or auto.",
        "8.	The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container. In a row the main axis runs horizontal, in a column the main axis vertical. The justify-content property applies along the main axis when used with flexbox, but since stretching in the main axis is controlled by flex, stretch behaves as flex-start.",
        "9.	The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In a row the cross axis runs vertical, in a column the cross axis runs horizontal. The default value of align-items is stretch.",
        "10. The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis. In a row the cross axis runs vertical, in a column the cross axis runs horizontal. The default value of align-content is stretch.",
        "11. align-content This property works only when the 'flex-wrap:' property is set to wrap and will have no effect when the number of flex-lines is 1, where align-items will work regardless of the 'flex-wrap:' property setting and does not depend on the number of flex-lines. align-content aligns flex-lines where align-items aligns flex-items. align-content can take 6 values (flex-start, flex-end, center, space-between, space-around, stretch) and align-items can take 5 (flex-start, flex-end, center, baseline, stretch. Answer credit: <a href:'https://www.geeksforgeeks.org/difference-between-align-content-and-align-items/'>https://www.geeksforgeeks.org/difference-between-align-content-and-align-items/.</a>",
        "12. start, end, flex-start, center, left, right, normal, baseline (first baseline last baseline), space-between, space-around, space-evenly, stretch, safe, unsafe",
        "13. The align-self CSS property overrides a flex item's (the child of a parent with display set to flex) align-items value. In Flexbox, it aligns the item on the cross axis.",
        "14. A shorthand CSS property can be used to set both the flex - direction and flex - wrap(in that order).",
        "15. The flex CSS shorthand property sets how a flex item(specified on the flex - item) will grow or shrink to fit the space available in its flex container.A single unitless value(number) will denote flex - grow and flex - basis is then equal to 0. A single value with specified width/ height will dente flex-basis.If there is ever a second unitless value, it will denote flex shrink.When writing shorthand for all three properties, it must go in the order of flex - grow, flex - shrink, flex - basis.",
        "16. The order property can be set on flex - items to change the layout order without affecting the source material.",

    ]
}

let mediaQueryQuiz = {
    questions: [
        '1. How do you attach a media query to a style sheet?',
        '2. What is the basic syntax layout for setting up a media query?',
        '3. How do you call a media query to set a screen width that is 500px or more?',
        '4. How do you call a media query to set a screen width that is 500px or less?',
        '5.How do you call a media query to set landscape or portrait orientation?',
        '6. How do you call a media query to set more than one sizes where the multiple sizes are not immediately related?',
        '7. What do <em>not, only</em> and <em>and</em> in media query syntax do?',
        '8. What value would be used instead of screen to affect the css of a page that is being printed?'
    ],
    answers: [

    ]
}
// JAVASCRIPT
let ArraysQuiz = {
    key: "APM = Array Prototype Method",
    questions: [
        '1.	What is the syntax used to express an array and how do you separate items in an array?',
        '2.	What syntax is used to access a specific item in an array based on their index number?',
        '3.	What APM adds one or more elements to the end of an array (and returns the new length of the array)?',
        '4.	What APM removes the last element from an array and returns that removed element? Is this APM destructive?',
        '5.	What APM removes the first element from an array and returns that removed element? Is this APM destructive?',
        '6.	What APM adds one or more elements to the beginning of an array (and returns the new length of the array)? Is this APM destructive?',
        '7.	What is destructuring an array, and what is the syntax used? Can you destructure more than one item from an array at once? Is this destructive?',
        '8.	What APM is used to merge two or more arrays to create a new array, but does not change the existing arrays? Is this APM destructive?',
        '9.	What APM creates and returns a new string by concatenating all of the elements in an array separated by commas or by a specified separator? Is this APM destructive? ',
        '10.	What APM determines whether an array includes a certain value among its entries, returning true or false as appropriate? When searching for numbers that aren’t strings, are quotes necessary in the search parameter? Is this APM destructive?',
        '11.	What APM reverses the order of an array, making the first element the last and the last the first? Is this APM destructive?',
        '12.	What APM returns the first index at which a given element can be found in the array, or -1 if it is not present? Is this APM destructive?',
        '13.	What APM returns a shallow copy of a portion of an array into a new array selected from start to end specified by index numbers? What happens if there is no end index number specified? Is this APM destructive?',
        '14.	What APM changes the contents of an array by removing or replacing existing elements and/or adding new element in place? How many parameters does this APM take and what do they indicate? Is this APM destructive?',
        '15.	Can arrays contain more than one data type?',
        '16.	What is being compared if you use === in relation to arrays?',
        '17.	If an array is stored as a const, what can be changed?',
        '18.	What APM creates a new array populated with the results of calling a provided function on every element in the calling array? What is the syntax for this method? Is this APM destructive?',
        '19.	What APM creates a new array with all elements that pass the test implemented by the provided function? What is the syntax for this method? Is this APM destructive?',
        '20.	What APM tests whether at least one element in the array passes the test implemented by the provided function, and if even one element in the array passes the return is true, otherwise the return is false? Provide an example of the syntax. Is this APM destructive?',
        '21.	What APM tests whether all elements in the array passes the test implemented by the provided function, and if even one element fails the return is false? Provide an example of the syntax. Is this APM destructive?',
        '22.	What APM sorts the elements of an array in place and returns the sorted array, what is the default return of this array when given no compare function, and if given a compare function provide an example of the syntax and the logic behind it. Is this APM destructive?',
        '23.	What APM executes a function (that you provide) on each element of the array, resulting in a single output value? This APM uses an accumulator, what is the default value of the initial value if none is provided. Provide an example of the syntax. Is this APM destructive?'
    ],
    answers: [
        '1.	Arrays are kept inside square brackets [ ] and separated by commas. a.let array = [‘thing’, ‘thing2’, 5, 6]',
        '2.	Array[0] index number inside of the square brackets.',
        '3. .push() Yes it is destructive.',
        '4. .pop() Yes it is destructive.',
        '5. .shift() Yes it is destructive.',
        '6. .unshift() Yes it is destructive.',
        '7.	Destructuring an array is a JavaScript expression that makes it possible to unpack values from arrays(or properties from obejects) into distinct variables.You can destructure more than one array at once, the syntax is square brackets containing the new names of the array items as variables, followed by an equal sign and then either the name of the array or an actual array. a.	[a, b] = [10, 20] which would make a = 10 and b = 20. If let Arr = [10, 20] then[a, b] = Arr would have the same outcome.',
        '8. .concat() No it is not destructive.',
        '9. .join() defaults to commas.To specify a different separator, include the separator surround by quotes as the argument in .join().This is not destructive examples: .join(‘’).join(‘-‘).join(‘ ‘)',
        '10. .includes() strings would be searched for with ‘’ and numbers can be searched for without them. No it is not destructive.',
        '11. .reverse() Yes it is destructive.',
        '12. .indexOf() No it is not destructive.',
        '13. .slice() If no second number is listed then only the items up to the specified first parameter are removed and the rest remain.No it is not destructive.example.slice(2).slice(5, 9)',
        '14. .splice() There are 3 possible parameters in this array.The first refers to the index location to start, the second argument refers to the number of array objects to be removed, and the third is optionally what can be inserted instead.Yes it is destructive.',
        '15. Yes',
        '16. The reference.If they are referencing the same array they are true, but if they are two different arrays containing the same values, they would return false.',
        '17. The contents of the array can be changed and manipulated freely but completely redefining the array is not allowed.',
        '18. .map() example .map(x => x * 2).No it is not destructive.',
        '19. .filter() example .filter(word => word.length > 6).No it is not destructive.',
        '20. .some() example .some((element) => element % 2 === 0) No it is not destructive.',
        '21. .every() example .every((element) => element % 2 === 0) No it is not destructive.',
        '22. .sort() if no compare function is provided sort will convert all elements into strings then compare them by their UTF- 16 Codes.Yes it is destructive.To implement a compare function there must be two parameters provided in the function (a, b).If using values other than numbers there must be logical operators inside the function being called that return 1, -1, or 0 to sort the elements.If using numbers the following conditions will sort the elements a.If compareFunction(a, b) returns a value > than 0, sort be before a b.if compareFunction(a, b) returns a value < or = to 0 leave a and b in the same order.',
        '23. .reduce() The initial value is optional and will default to the first value of the array if not included.example.reduce((accumulator, currentValue) => { function to execute.Include return }, initial value).No it is not destructive.'
    ]
}

let LoopsQuiz = {
    key: '',
    questions: [
        '1.	What is a for loop, and what syntax does it use?',
        '2.	What is a while loop, and what syntax does it use?',
        '3.	What is a labeled statement?',
        '4.	What keyword ends a loop? What does it look like when used with a label?',
        '5.	What is a for of loop? What is the syntax?',
        '6.	Are object literals considered iterable?',
        '7.	What methods can be used to turn keys and values from object literals into new iterable arrays? What method gives you a nested array of key value pairs?'
    ],
    answers: [
        '1.	A for loop repeats until a specified condition evaluates to false. for([initialExpression]; [conditionExpression]; [incrementExpressin]. example for (let i = 0; i < 10; i++) The loop will repeat 9 times.',
        '2.	A while loop executes its statements as long as a specified condition evaluates to true. while (condition) {statement} example let i = 0 while(i < 100){console.log(i) The loop will print i in increments of 1 up to 99.',
        '3.	A labeled statement is a label used to identify a loop. label: loopHere. example: myLoop: while(toddIsAnAss === true){doSomething()}',
        '4.	break; and with a label it would be break label;',
        '5.	A for of loops over iterable objects(including array, map, set, arguments, and so on), invoking a custom interation hook with statements to be executed for the value of each distinct property. for(variable of objectToIterateOver) {statement} example with an array named animals, for(let animal of animals){console.log(animal)}',
        '6.	No',
        '7.	Object.keys(object) Object.values(object) Object.entries(object)'
    ]
}

let StringsQuiz = {
    key: 'let animal = tiger',
    questions: [
        '1.	What syntax is used to access a character in a string by its index?',
        '2.	What property can be chained on to a variable (or a string in quotes) to tell you how many characters it has?',
        '3.	What method can be used to check the type of a variable? Give an example of using this method while console logging a string',
        '4.	Other than looking up the docs on MDN or W3, what’s a way to check what string methods exist?',
        '5.	Concerning syntax, what’s a good way to tell if you are accessing a property vs executing a method?',
        '6.	What method will take a string and create a new version of it in all caps?',
        '7.	What method will take a string and change all characters to lower case? ',
        '8.	What method removes all empty space at the beginning and end of a string?',
        '9.	How do you chain together multiple string methods?',
        '10.	What method lets you search for the index location of an argument within a string? What value is returned if the searched for argument does not exist? If there are multiple instances of searched argument, which index is presented?',
        '11.	What method can be used to extract part of a string (and create a new string), given that you know the index start and end points of what you want to extract? What happens when only one argument is put into the method?',
        '12.	What method can be used to replace part of a string, but only in the first instance? What method can be used to replace every instance listed in the arguments?',
        '13.	What method will repeat a string?',
        '14.	What is the syntax for a string template literal?',
    ],
    answers: [
        '1.	varName[indexNumber] animal[2] = g.',
        '2.	variable.length “string”.length',
        '3.	typeof console.log(typeof “string”)',
        '4.	In the dev tools console on chrome (and probably other browsers, type in a string followed by a dot and a list of string methods will appear. “hello”.',
        '5.	Whether or not there are parenthesis at the end. example.trim() vs example.length',
        '6.	.toUpperCase()',
        '7.	.toLowerCase()',
        '8.	.trim()',
        '9.	By chaining together the methods one after the other. Variable.trim().toUpperCase()',
        '10.	.indexOf(‘searchItemHere’) animal.indexOf(‘er’) = 3 and animal.indexOf(‘z’) = -1. The first instance of a searched argument’s index is returned. ',
        '11.	.slice(startPoint, endPoint) animal.slice(0,2) = tig. If there is no second argrument, the remainder of the string will be removed.',
        '12.	.replace(‘string to be replaced’, ‘string to replace with’) animal.replace(‘t’, ‘l’) = liger .replaceAll(‘’,’’).',
        '13.	.repeat(number of repetitions) animal.repeat(2) = animalanimal',
        '14.	`${}` `My favorite animal is the ${animal}` = My favorite animal is the tiger.',

    ]
}
let OperatorsQuiz = {
    key: '(use x and y when writing out examples of operators) AO = Assignment Operator CO = Comparison Operator ArO = Arithmetic Operator LO = Logical Operator',
    questions: [
        '1.	What is an AO (Assignment Operator)?',
        '2.	What is the simplest AO?',
        '3.	What is the shorthand AO for x = x + y?',
        '4.	What is the shorthand AO for x = x - y?',
        '5.	What is the shorthand AO for x = x * y?',
        '6.	What is the shorthand AO for x = x / y?',
        '7.	 What is the shorthand AO for x = x % y? ',
        '8.	What is the shorthand AO for x = x ** y? ',
        '9.	What is a CO (Comparison Operator)?',
        '10. What CO returns true if the operands are equal (this CO will attempt to convert two different operand types numerically if they are not the same, so ‘1’ and 1 would return true)?',
        '11. What CO returns true if the operands are NOT equal (this CO will attempt to convert two different operand types numerically if they are not the same, so ‘1’ and 1 would return false)?',
        '12. What CO returns true if the operands are of the same type and equal?',
        '13. Returns true if the operands are of the same type but NOT equal?',
        '14. What CO returns true if the left operand is greater than the right operand?',
        '15. What CO returns true if the left operand is greater than or equal to the right operand?',
        '16. What CO returns true if the left operand is less than the right operand?',
        '17. What CO returns true if the left operand is less than or equal to the right operand?',
        '18. What is the ArO used to find the remainder (aka mod)?',
        '19. What is the ArO used to find the exponentiation (aka squared, cubed, etc)?',
        '20. What is the ArO used to increment a value by one? What difference does it make if this operator is before or after a number?',
        '21. What is the ArO used to decrement a value by one? What difference does it make if this operator is before or after a number?',
        '22. What ArO will attempt to conver the operand to a number if it is not already?',
        '23. What is a Logical Operator?',
        '24. What LO means BOTH expressions must return true for the overall output to be true?',
        '25. What LO means ONE OF THE TWO expressions must return true for the overall output to be true?',
        '26. What is the LO for NOT? ',
        '27. What is a conditional operator and how is it written?'
    ],
    answers: [
        '1.	An assignment operator assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal, which assigns the value of its right operand to its left operand, for example, x = y assigns the value of y to x.',
        '2.	x = y',
        '3.	x += y',
        '4.	x -= y',
        '5.	x *= y',
        '6.	x /= y',
        '7.	x %= y. ',
        '8.	X **= y. ',
        '9.	A comparison operator compares its operands and returns a logical value based on whether the comparison is true. Operands can be numerical, string, logical or object values. If two operands are of a different type Javascript will try to compare them numerically unless the strict equality operators are used.',
        '10. ==',
        '11. !=',
        '12. ===',
        '13. !==',
        '14. >',
        '15. >=',
        '16. <',
        '17. <=',
        '18. %',
        '19. **',
        '20. ++ If the operator is before a number it will add 1 before returning the value, if it is after the operator it will return the value before adding 1.',
        '21. -- If the operator is before a number it will subtract 1 before returning the value, if it is after the operator it will return the value before subtracting 1.',
        '22. + before an operand. +’1’ would be 1.',
        '23. Logical Operators are typically used to return a Boolean value based on the outcome of the expressions used in the logical operators.',
        '24. &&',
        '25. ||',
        '26. !',
        '27. A conditional operator has three operands, the first is the condition followed by two values, the first value is the output if the conditional is true, the second value is the output if the conditional is not met. condition ? val1 : val2  example: age >=18 ? ‘adult’: ‘minor”'
    ]
}
// GIT AND GITHUB
let GitQuiz1 = {
    questions: [
        '1.	What is the command to initialize a repository?',
        '2.	What is the command for setting your username?',
        '3.	What is the command for setting your email?',
        '4.	What command do you use to check whether a repository exists, and if it does will give you information on where the head is etc?',
        '5.	What is the command for adding a file to the staging area? Using this method, how can the user add more than one file at once?',
        '6.	What is the command for adding all changed files to the staging area?',
        '7.	What is the command to commit all staged changes and add a descriptive message at the same time?',
        '8.	What is the command to remove a specific file from the git repository?',
        '9.	What command will show you what commits have been made, their date, who did it, and the message tied to it? What flag can be added to that command to view it as shorthand?',
        '10. What command will remove all staged files from the staging area?',
        '11. What command will let you fix the message on the most recent commit? If you missed adding a file to the staging area that you wanted in the last commit, in what order would you use the command relative to adding the file to the staging area?',
        '12. What does HEAD refer to?',
        '13. What command will show you a list of all existing branches, and what signifies the currently active branch?',
        '14. What is the command for creating a new branch, but not switching to it?',
        '15. What is the newer command for switching between branches?',
        '16. What is the older command that can be used to switch between branches?',
        '17. What is the newer command for creating and switching to a new branch?',
        '18. What is an older command for creating and switching to a new branch?',
        '19. What is the command to add all changes to the staging area and commit them at the same time (with a message)?',
        '20. What is the command to delete a branch? What branch should you be located in when deleting branch?',
        '21. What is the command to force delete a branch that has not been merged?',
        '22. What is the command to rename a branch, and under what conditions will you be able to do so?',
        '23. What is the process for telling git not to track files?'

    ],
    answers: [
        '1.	git init',
        '2.	git config --global user.name “Name Here”',
        '3.	git config --g user.email email@gmail.com',
        '4.	git status',
        '5.	git add filename.ext Multiple files can be added if there is a space between each one.',
        '6.	git add .',
        '7.	git commit -m “message here”',
        '8.	git rm filename.ext',
        '9.	git log, git log --oneline',
        '10. git reset',
        '11. git commit --amend If a file was missed being added in the commit, add the file to the staging area before using the git commit --amend command.',
        '12. HEAD is referring to the current branch the user is working in. Unless in detached head state, the HEAD is also pointing to the tip of the branch.',
        '13. git branch, an *',
        '14. git branch newBranchName',
        '15. git switch branchName',
        '16. git checkout branchName',
        '17. git switch -c newBranchName',
        '18. git checkout -b newBranchName',
        '19. git commit -am “message here”',
        '20. git branch -d branchName The user cannot delete a branch while they are inside it.',
        '21. git branch -D branchName',
        '22. While inside the branch being renamed, git branch -m newBranchName',
        '23. Creating a .gitignore file in the root repository, and in that file listing specific files, file types, or directories. Lists should be one instance per line.'

    ]
}

let GitQuiz2 = {
    questions: [
        '1. What is the command for viewing all created branches?',
        '2. When merging branches, relative to the branch you are in, which branch is merged into which?',
        '3. What is the command for merging branches?',
        '4. What is a fast-forward merge?',
        '5. What is the command to view extra information on all created branches?',
        '6. What is the command for comparing the staging area and the working directory?',
        '7. What is the command for comparing all changes in the working tree since the last commit?',
        '8. What descriptive text in the terminal means a file is new so there is nothing to compare?',
        '9. What command will list the changes between only the staging area and the last commit?',
        '10. What command let’s view the changes specific to a file.',
        '11. What is the command to compare the changes between two branches?',
        '12. What is the command to compare the changes between two commits?',
        '13. What is the command for putting away all uncommitted change, reverting the working directory to how it was before those changes were made? ',
        '14. What is the command to remove the most recent stashed changes from the stash stack and apply them to the working directory?',
        '15. What command will apply the stashed changes, but not remove them from the stash?',
        '16. What command will show all stashed changes in the stash?',
        '17. What command can apply stashed changes relative to the current head?',
        '18. What command can drop specific stashed changes relative to the head?',
        '19. What command will empty out everything from the stash?',
        '20. What is the command to enter detached head state and view past commits?',
        '21. How would you start a new branch relative to an old commit?',
        '22. What command will let you enter detached head state relative to the current head?',
        '23. What is the command to switch to the last commit/branch you were on?',
        '24. What command will let you remove all the changes done to a file or files? What is another command that will discard changes to a file?',
        '25. What is the command used to revert file changes back to a commit relative to the current head?',
        '26. What command can be used to unstage specific changed files?',
        '27. What is a command to reset a repo back to a specific commit, so that changes are still present in the working directory but they have been uncommited?',
        '28. What command can reset a repo back to a specific commit that completely removes the changes as well?',
        '29. What command is used to create a new commit that undoes the changes from a past commit, but keeps the commit history intact?'
    ],
    answers: [
        '1.	git branch',
        '2.	The active branch (where the head is) that git merge is called on is the branch that absorbs the merge.',
        '3.	git merge branchName',
        '4.	A fast-forward merge is when there are no conflicts between the two branches being merged, one branch is simply catching up to the other.',
        '5.	git branch -v',
        '6.	git diff',
        '7.	git diff HEAD',
        '8.	/dev/null',
        '9.	git diff --staged',
        '10. git diff filename.ext',
        '11. git diff branchName..branch2Name',
        '12. git diff commitHash..commitHash',
        '13. git stash',
        '14. git stash pop',
        '15. git stash apply',
        '16. git stash list',
        '17. git stash apply stash@{2}',
        '18. git stash drop stash@{1}',
        '19. git stash clear',
        '20. git checkout commitHash ',
        '21. Go to the old commit in detached head state then create a branch from there.',
        '22. git checkout HEAD~1',
        '23. git switch',
        '24. git restore filename.ext git checkout -- filename.ext ',
        '25. git restore --source HEAD~1 filename.ext',
        '26. git restore --staged filename.ext',
        '27. git reset commitHash',
        '28. git reset --hard commitHash',
        '29. git revert commitHash'

    ]
}

let GitQuiz3 = {
    questions: [
        '1.	What is the command for configuring local username?',
        '2.	What git folder holds a heads directory that contains the hash commit for each branch tip?',
        '3.	What does the HEAD folder contain in the git config folder?',
        '4.	What are the 4 types of Git Objects stored in the objects folder?',
        '5.	What cryptographic hash function does git use to create hashes?',
        '6.	What are a blob and tree in git?',
        '7.	What is the command that lets the user view and update reference logs?',
        '8.	What command lets the user see a specific reflog? What does it default to if no branch is specified?',
        '9.	How can a user use reflogs to reinstate a commit that was removed from the regular log or through a rebase?',
        '10. How does a user set up aliases in git using the config folder?',
        '11. What is the command for setting up a global alias?',
        '12. How do arguments interact with alias commands?'
    ],
    answers: [
        '1.	git config --local user.name “newname:',
        '2.	refs folder',
        '3.	The location of the current HEAD or a hash if the user is in detached HEAD state.',
        '4.	Trees, Commits, Blobs, Annotated Tags',
        '5.	Sha 1',
        '6.	A blob is hash that holds the information of a file, a tree is a hash that refers to a collection of blobs and their names.',
        '7.	gir reflog',
        '8.	git reflog show branchName and if no branch name is specified it defaults to the main branch.',
        '9.	Use git reflog to find the hashes for the commit that was removed, then do a hard reset',
        '10.	By using git reflog HEAD~1',
        '11.	In the global git config file, under the alias section type the alias = known git command, such as c = commit.',
        '12.	git alias --g alas.alasName commandBeingreplaced example: git config --global alias.br branch',
        '13.	The same way they do with original command syntax, type them after the alias and a space.'
    ]
}

let GitHubQuiz1 = {
    questions: [
        '1. What is the command for copying a remote github repository to your local machine?',
        '2. What is the command to view any existing remotes? What additional flag can be added for more information about the remotes?',
        '3. What is the command for adding a remote?',
        '4. What is the command to rename a remote?',
        '5. What is the command used to remove a remote?',
        '6. What command is used to push changes from your local repository to the github repository?',
        '7. What is the command for pushing up a local branch to a differently named branch on github?',
        '8. What flag is used when pushing to create an upstream connection?',
        '9. When a repository is started on github and then cloned to a local machine, how do you set up the remote?',
        '10. What command shows where the remote branch head is located?',
        '11. What command lets you view (in detached head mode) the remote head as it was the last time it was updated?',
        '12. Which command will create a local branch based off the name of a remote branch?',
        '13. What command updates and see changes from the remote repo, without affecting the local repository? What happens with this command is used without specifying the remote?',
        '14. What command lets you update and see changes from a specific repo branch to a specific local branch?',
        '15. When using git status, what is the comparison between your local head and the remote head referring to?',
        '16. What command UPDATES a local repo branch with the changes of the remote repo branch? ',
        '17. When using the command that updates the local repo with changes from the remote repo, what is the default behavior if no branch is specified? What if no remote is specified?',
        '18. What is the difference between a private and public repository?',
        '19. What are the key purposes of a README file?',
        '20. What is markdown?',
        '21. What is a Github Gist?',
        '22. Using Github pages, what is the difference between a Project page and a Personal page?'
    ],
    answers: [
        '1.	git clone repositorylink',
        '2.	git remote, git remote -v',
        '3.	git add remote remoteName repositoryLink',
        '4.	git remote rename remoteName newRemoteName',
        '5.	git remote remove remoteName',
        '6.	git push remoteName branchName (if upstream is set up then just git push)',
        '7.	git push remoteName localBranchName:remoteBranchName',
        '8.	-u',
        '9.	You don’t, the remote is set up for you.',
        '10. git branch -r',
        '11. git checkout remoteName/branchName',
        '12. git switch remoteBranchName',
        '13. git fetch. It will default to pull from origin.',
        '14. git fetch remote branch',
        '15. It is referring to the number of commits away the local repository is from the remote repository, based on the last time the remote repository was fetched/updated.',
        '16. git pull remote branchName. ',
        '17. No specified branch will result in all branches being updated. No specified remote will default to the origin (or depending on the branch you are pulling from, the connected upstream branch).',
        '18. A private repository can only be seen by the person that created it and by people that have been specifically invited/approved to be collaborators. A public repository may be viewed and cloned by anyone but that does not mean anyone can push changes. They would still have to be approved as collaborator and potentially have git pull requests approved.',
        '19. Four key purposes: Describe what a project does. How to run the project. Why the project is noteworthy. Who maintains the project.',
        '20. Markdown is a quick syntax used to write html without writing html.',
        '21. A Gist is a small snippet of code that can be shared on github. They are smaller than repositories and do not have all the same functionalities.',
        '22. A project page can be made for any repository as a quick way to showcase that project. A personal page is meant to be specific to the user such as a portfolio and there is a limit of one per github user.'

    ]
}

let GitHubQuiz2 = {
    questions: [
        'What are the strengths and weaknesses of a Centralized Workflow?',
        'What are the strengths and weaknesses of a Feature Branch Workflow?',
        'What is a Pull Request?',
        'What is Forking?',
        'What are some of the strengths and weaknesses of the Fork and Clone workflow?',
        'What command will rewrite commit history so that all commits related to a feature branch begin at the tip of the master branch? How would this command be executed to make sure the master branch is not being messed with?',
        'When would you NOT want to use the rebase command?',
        'What is the base command for entering interactive rebase mode?',
        'What are 5 commonly used commands in the interactive rebase mode and what do they do?',
        'What is the system for Semantic Versioning, what does each number represent?',
        'What is a tag, and what is it commonly used for?',
        'What is the command used for viewing a list of all tags?',
        'What is the command used to search tags?',
        'When searching for tags how do you denote what characters before or after the key search term can be?',
        'What is the command for creating a lightweight tag?',
        'What is the command for creating an annotated tag?',
        'What is the command used to see more details about a tag?',
        'What is the command for adding a tag name to a previous commit?',
        'What is the command for moving a tag name to a different commit?',
        'What is the command for deleting a tag?',
        'What is the command used to transfer all tags to the remote server that are not already there?',

    ]
}

// Backend

let nodeQz = {
    key: '',
    questions: [
        '1. What is Node?',
        '2. What is a REPL?',
        '3. What are seven basic commands used in node, and what do they do?',
        '4. What key combination will exit Node?',
        '5. When using a browser global scope is referred to as window, what is global scope referred to in Node?',
        '6. What command is used to run a JavaScript file using Node? Does it matter what directory the user is located in when running a file this way? ',
        '7. In Node, what is the process object?',
        '8. What is process.argv? How can arguments be passed through to the argv array (provide an example?',
        '9. What is the node ‘fs’ module? What is the syntax necessary to use it?',
        '10. What is the syntax for using a file rather than a built-in module?',
        '11. What are three ways to export specific objects or functions from a file, to be used in another file? Provide an example using const add = (x, y) => x + y; as the variable being exported.',
        '12. What is the syntax for destructurinng one or more objects from a different file, assuming it has been exported in its original file?',
        '13. What is the process for exporting an entire directory?',
        '14. What does NPM stand for and what is it?',
        '15. What is the command for NPM to install packages?',
        '16. What is the syntax for requiring an NPM package on a page',
        '17. What is the command for creating a new package.json, and what information does a package.json contain?',
        '18. When packages are installed what folder will they be found in (and created if none exist already)?',
        '19. If you are in a directory that has a package.json with dependencies listed, what command will download all dependencies?',
        '20. What flag can be added when installing packages, to install them globally? What is the command to use a global package?'

    ],
    answers: [
        '1.	A JavaScript runtime that executes code outside of the browser. It enables the user to write server-side code using javaScript.',
        '2.	Read Evaluate Print Loop. A REPL continues to listen for something to evaluate and return where a browser essentially listens and executes only once.',
        '3.	.help Prints a list of these basic commands as a reminder. .break Helps you get out if you’re stuck. .clear is an alias for .break. .editor Enter the editor mode. .exit Exit the repl. .load Load JS from a file into the REPL session. .save Save all evaluated commands in this REPL session to a file.',
        '4.	Ctrl + C twice will exit node.',
        '5.	global',
        '6.	node filename.ext . Yes, the user must be in the directory of the file being run, or specify the path based on where the user is located.',
        '7.	process is a global object that provides information about and control over the current node.js process. It is always available to Node.js applications without using require(), but, it can also be explicitly accessed using require().',
        '8.	process.argv Lists the executable path (aka the process.execPath, where node is located) and then the path to the file being executed (the file that is being executed). Argv is an array so remembering the order is important. To add arguments to the argv array from the cmd, the arguments must be entered after the name of the file being executed. example: node file.js puppies chickens monke',
        '9.	The node ‘fs’ module is a series of methods for creating and manipulating files and folders. const fs = require(‘fs’);',
        '10. const file = require(‘./filename’)',
        '11. Declaring the const first then referencing it afterward with module.exports.add = add. Declaring the const in the same line exporting it, module.exports.add = (x, y) => x + y; After declaring the variable, exporting an object that references it (good way to export multiple variables at once module.exports.math = { add: add} ',
        '12. const {objName, diffObjName} = require(‘./fileName’)',
        '13. When exporting an entire directory, there must be a file named index.js (node will look for that file name) to represent the directory and all desired exports must be referenced there. When requiring the directory use const varName = require(‘./dirName’)',
        '14. Node Package Manager. It is two things, first a library of thousands of packages published by other developers that can be used for free. Second, a command line tool to easily install and manage those packages in our Node projects.',
        '15. npm install packageName OR npm I packageName',
        '16. Assuming the package is installed, const varName = require(‘packageName’) the ./ are not required, nor is specifying the node modules folder.',
        '17. npm init A package.json file contains things like description, licence, author and dependencies.',
        '18. node_modules',
        '19. npm install',
        '20. -g , npm link packageName'


    ]
}

let expressQz = {
    questions: [
        '1.	What is express?',
        '2.	What is common practice for setting up and requiring express?',
        '3.	What method starts a server? Give an example using that method to set up a local host server.',
        '4.	What method will run every time there is an incoming request, regardless of the path? Give an example of this method indicating what arguments are used.',
        '5.	What are req and res?',
        '6.	What res method returns an HTTP response? In your own words briefly describe what this means. Finally, can multiple responses be sent while dealing with this method?',
        '7.	What res methods returns the rendered view of an html file? Describe the mandatory argument.',
        '8.	What express method is used to respond to a specific path request? What arguments does this method expect?',
        '9.	In express, what directory holds the files that will be used with res.render?',
        '10. Can a .get request respond to a .post request, or vice versa?',
        '11. What can be used in place of a path, to answer all route requests? Where should this be placed and why?',
        '12. How do you write a variable path name? Add a reddit subreddit as an example.',
        '13. What request object lets you pull out a variable path name as an object using destructuring? Give an example using a subreddit.',
        '14. What is a query string? Where are they stored? What usually follows a query string (provide an example)?',
        '15. What symbol is used to chain together multiple key value pairs after a query string? Provide an example.',
        '16. How do you add one or more arguments after a res.render file name, to be used on the respective page?',
        '17. What express method is used to configure settings? How would a setup the ability to use ejs files?',
        '18. What does __dirname represent? What is the __ called?',
        '19. How would a user setup the views folder to be referenced regardless of where the user is located while executing an index file?',
        '20. How does a user serve static files from a directory named public, like css and javascript, or other files referenced in an html/ejs document? Where would the directory being served be located? How would a user serve the statis files from a directory while also setting up the absolute path for that directory?'
    ],
    answers: [
        '1.	Express is a node.js framework, it is an npm package.',
        '2.	const express = require(‘express’) const app = express()',
        '3.	app.listen - example: app.listen(3000, () => {console.log(“listening on port 3000)}) the console.log part is not required, but useful to add.',
        '4.	app.use - example: app.use((req, res) => {console.log(‘sploosh’)}',
        '5.	Request and Response. Request is an object that refers to an incoming request, while Response is an object that refers to what will be sent back. Both contain methods related to their duties. ',
        '6.	res.send(‘’) The .send method can respond with a Buffer object, a string, an object, Boolean, or an array. res.send renders a response. It will render written html, print strings, or return objects as .json. No, once a res.send has been sent, no more res.send or res.renders can be sent.',
        '7.	res.render The mandatory argument is the view argument, or rather the file to be rendered. This can be an absolute path, or a path relative to the views setting.',
        '8.	 app.get - It expects first the requested path, then a req, res function to run when the path has been requested. app.get(‘/path’, (req, res) => {res.render(‘index’)}',
        '9.	views',
        '10. No.',
        '11. An asterisk, *. This should be at the bottom of a document, or it will override all other route setups.',
        '12. Using : lets you use a variable path name. Subreddit example /r/:subreddit, in the example, r is consistent but anything after the : can change. ',
        '13. req.params - Example const {subreddit} = req.params;',
        '14. The portion of a url that comes after a question mark (?) and is stored in the req.query object. www.site.com/comments?sort=new',
        '15. & can separate multiple key value pairs in a query string. www.site.com/comments?sort=new&sort=popular',
        '16. After stating the file to be rendered, using key value pairs inside of curly brackets you can add arguments that set variables to be used in the rendered page.',
        '17. app.set To use ejs files, first the ejs npm would need to be installed, and then required on the index page. Then app.set(‘view engine’, ‘ejs’)',
        '18. __dirname refers to the absolute path to the file that is being executed. A dunder.',
        '19. First, require the paths module at the top of the page, then use app.set(‘views’, path.join(__dirname, ‘/views’)',
        '20. app.use(express.static(‘public’) In the root folder, alongside node_modules, views and the index.js file. app.use(express.static(path.join(__dirname, ‘public’)))',
    ]
}

let expressRestQz = {
    questions: [
        '1.	What are four defining features of a GET request?',
        '2.	What are four defining features of a POST request?',
        '3.	What request object lets a user access data from a POST request?',
        '4.	What are two middleware options for parsing information from the req.body object? What do they do, and which method is used to set them up?',
        '5.	What do REST and RESTful mean?',
        '6.	Using blogs as the key url resource, list the 7 Route Names, the urls that would match them, the HTTP verbs that would go with them, and finally the description of what they do. Route- URL- HTTP- Description-.',
        '7.	What response method is used to send a user to another route after servicing a request route? What kind of HTTP verb does it default to?',
        '8.	When using links on an html page, how would the dev fill in the href attribute to access specific routes?',
        '9.	What package lets you use other http verbs inside your html form, such as DELETE or PATCH?',

    ],
    answers: [
        '1.	Used to retrieve or get information. Data sent via query string. Information is plainly visible in the URL. Limited amount of data can be sent.',
        '2.	Used to post data to the server. Used to write/create/update. Data is sent via request body, not a query string. Can send any sort of data (json)',
        '3.	req.body',
        '4.	express.json() and express.urlencoded({extended:true}) json will parse json information and urlencoded will parse the information as objects with key value pairs. The method .use is used to set them up, because it will run every time a request is made.',
        '5.	Representational state transfer. A set of guidelines for how a client + server should communicate and perform CRUD operations on a given resource. Restful implies a system that complies with REST',
        '6.	Route- Index URL- /blogs HTTP- GET Description- Display a list of all blogs, Route- New URL- /blog/new HTTP- GET Description- Show form to make new blogs, Route- Create URL- /blogs HTTP- POST Description- Add a new blog to database, then redirect, Route- Show URL- /blogs/:id HTTP- GET Description- Show info about one blog, Route- Edit URL- /blogs/:id/edit HTTP- GET Description- Show edit form of one blog, Route- Update URL- /blogs/:id  HTTP- PUT or PATCH Description- Update a particular blog, then redirect, Route- Destroy URL- /blogs/:id HTTP- DELETE Description- Delete a particular blog, then redirect.',
        '7.	res.redirect([status optional], path) Defaults as a GET request.',
        '8.	Using the relative path, such as /comments or /newPost etc.',
        '9.	Method Override'

    ]
}

let mongoQz = {
    questions: [
        '1.	What is a database?',
        '2.	What is a SQL database?',
        '3.	What is a NoSQL database?',
        '4.	How does a user start a mongo database, and how does a user open the mongo shell?',
        '5.	What command will list useful mongo command prompts?',
        '6.	What command lets a user view all the databases available in mongo?',
        '7.	What command can either select which database to use or create a new one if the specified database does not yet exist?',
        '8.	What is the command insert() used for?',
        '9.	What does the command find() do? What does findOne() do differently?',
        '10. What does the command update() do?',
        '11. What does the command remove() do, and what does the addition of .limit() on the end do?',
        '12. What command will update the first thing that matches specified criteria? Which command will update multiple matches?',
        '13. What are the operators for greater than, greater than or equal too, less than, and less than or equal to?',
        '14. What are the operators for includes, does NOT include and at least ONE is included?',
        '15. How does a user search for nested cosntent? Provide an example.',
        '16. What are the most common ways Mongo stores data?',
        '17. What is the command for inserting a new object into a collection? ',
        '18. What operator replaces the value of a field with a ne specified value (or creates a new one if no current value exists? Provide an example of adding an age of 5 to a dog named Charlie in a dogs collection.',
        '19. What operator will update the lastModified descriptor of an object to the current date?',
    ],
    answers: [
        '1.	A collection of information/data that has an interface a user can write code to interact with.',
        '2.	Structured Query Language. A relational database that is tabular and flat. Tables are used to define everything. Not particularly flexible but have been around longer.',
        '3.	Not a Structured Query Language, non-relational. Can store different types of data including documents, key-value pairs, and graph stores. Can be nested. Document oriented database.',
        '4.	In a terminal, mongod will run the database, keep this terminal separate. In a different terminal mongo will open the mongo shell.',
        '5.	help',
        '6.	show dbs',
        '7.	use dbName',
        '8.	Is used to create something inside of a database. Use {} to create objects inside the parenthesis.',
        '9.	Inside the parenthesis use {} to describe what you’re looking for. If you don’t pass anything into the {} specifically, it lists everything inside. Case sensitive. Returns a cursor (reference) to the objects searched for. Using commas you can include multiple search parameters. Using findONE() will return a single document.',
        '10. First you set an identifier, then you set what you want to update. NOTE: if you don’t want to erase all of the object’s information you must include $set: {and put the update here}. Remember the set addition is added after the first { is written.',
        '11. Delete objects. Use {} to identify what you’re deleting. If you add .limit() to the end, you can choose how many of that thing to delete, putting the number in the parenthesis. ',
        '12. updateOne(<filter>, <update>, <options>) – Will update the first thing that matches the criteria. updateMany(<filter>, <update>, <options>) – Will update all',
        '13. {$gt: ##}, {$gte: ##}, {$lt: ##}, {$gte: ##}',
        '14. { $in: [‘identifier’, ‘identifier’]}, { $nin: [‘identifier’, ‘identifier’]}, {$or: [{identifier: }, {identifier: }}',
        '15. Use quotes and list the name of the nested content’s parent with a . then the value you’re looking for: db.dogs.find({‘personality.childFriendly’: true})',
        '16. JSON and BSON. BSON is a binary version of JSON that takes up less space.',
        '17. db.collectionName.insert()',
        '18. $set db.dogs.updateOne({name: "Charlie"}, {$set: {age: 5, }})',
        '19. $currentDate'
    ]
}

let mongooseQz = {
    key: 'Amadeus, 1986, 9.2, R. Amelie, 2001, 8.3, R. Moonrise Kingdom, 2012, 7.3, pg- 13.',
    questions: [
        '1.	What does ODM stand for, what does it do?',
        '2.	What is Mongoose?',
        '3.	How does a user setup mongoose and connect to a mongo database?',
        '4.	What are Mongoose Models?',
        '5.	What two rules should be followed when turning a schema into a model in regards to naming?',
        '6.	Provide an example of setting up a movie schema(3 key code segments) and provide an example of creating an Amadeus model according to that schema(a 4th code segment).',
        '7.	After defining a new class according to a Model, what method must be called on it to actually save the new class to the database? Use the movie model and Amadeus as the class for an example.',
        '8.	What method can be used to create multiple different instances of a model at one time and add them to a db without using the .save method? Provide an example that includes Amelie and Moonrise Kingdom being added as Movie models.',
        '9.	What method can be used to search a model collection for a specific instance based on parameters or to list all instances in a selection? How is the data retrieved? What similarly named method will only return the first matched result?',
        '10. What method is used to update one(or the first matching) object in a model? ',
        '11. What method can update one(or the first matching) object and return the data of the object pre update? What can be added on to show the updated version instead?',
        '12. What method can remove an object? What method can remove an object and return data on what was removed?',
        '13. When schema option indicates that a value be required? Provide an example.',
        '14. What method can be set up for handling errors?',
        '15. When updating how does the user tell Mongoose to check validators again? ',
        '16. How does the user setup custom error messages to go along with validation properties such as min or max?',
        '17. How do you define a schema instance method? What does the keyword ‘this’ refer to in one of these methods?',
        '18. How do you define a model static method? What does the keyword ‘this’ refer to in one of these methods?',
    ],
    answers: [
        '1.	Object Data Mapper. ODMs map documents coming from a database into usable JavaScript objects.',
        '2.	Mongoose is an ODM for MongoDB that provides ways to model out application data and define a schema. It offers easy ways to validate data and build complex queries from the comfort of JavaScript.',
        '3.	Download the mongoose npm. Then, const mongoose = require(‘mongoose’) and mongoose.connect(‘mongodb://localhost:27017/databaseName’, {useNewUrlParser: true, useUnifiedTopology: true});',
        '4.	Models are javaScript classes that we make with the assistance of mongoose that represent information in a mongo database, or specifically in a collection.',
        '5.	The name of the model should be singular and the first letter should be uppercase.',
        '6.	const { Schema } = mongoose; const movieSchema = new Schema({title: String, year: Number, score: Number, rating: String }); const Movie = mongoose.model(‘Movie’, movieSchema); const Amadeus = new Movie({title:’Amadeus’, year: 1986, score: 9.2, rating: ‘R’})',
        '7.	.save() i.e. Amadeus.save()',
        '8.	.insertMany([]) Movie.insertMany([ { title: ‘Amelie’, year: 2001, score: 8.3, rating: ‘R’}, { title: ‘Moonrise Kingdom’, year: 2012, score: 7.3, rating: ‘PG-13} ])',
        '9.	.find({searchkey: searchvalue}).then(data => {console.log(data)} The .then is used to pull out and use the data from the search. If no parameters are included in the curly brackets (the {searchkey: searchvalue} data will include all instances of the model. The .findOne({}) method will either return the first matched result or if no search params are included, the first model instance.',
        '10. .updateOne({searchquery: value}, {valueToUpdate: value})',
        '11. .findOneAndUpdate({searchquery: value}. {valueToUpdate: value}, {new: true}).then(data => {})',
        '12. .delete({searchquery: value}) .findOneAndDelete({searchquery: value}.then(data => {})',
        '13. name: { type: String, required: true}',
        '14. .catch(err => {})',
        '15. In the options section of the update method (the third set of curly brackets), include runValidators: true',
        '16. Enter the min or max values inside of an array, where the first item in the array is the ‘check’ and the second item in the array is the custom error message for if that validation fails.',
        '17. schemaName.methods.customMethodName = function() {} ‘This’ refers to the model instance the method is being called on.',
        '18. schemaName.static.customMethodName = function() {} ‘This’ refers to the model itself.'
    ]
}