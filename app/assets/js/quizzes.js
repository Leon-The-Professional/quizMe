//Quizzes 

// HTML
let formsInpQz = {
    key: '',
    questions: [
        '1. What input type lets a user answer with text?',
        '2. What input type lets a user select zero or more options?',
        '3. What input type lets a user select only one from a set of options?',
        '4. What input type submits all the form data?',
        '5. What input type creates a button?',
        '6. What input type replaces a button with a dev chosen picture?',
        '7. What input type allows a user to add a file from their own computer?',
        '8. What input type hides text (but does not encrypt it)?',
        '9. What input type will reset all form entries to default values?',
        '10. What input type gives the user access to a slider?',
        '11. What input type is not visible to a user, allowing the dev to include other information on a form submit?',
    ],
    answer: [
        '1. <input type =”text”>',
        '2. <input type =“checkbox”>',
        '3. <input type =”radio”>',
        '4. <input type =”submit”>',
        '5. <input type =”button”>',
        '6. <input type =”image”>',
        '7. <input type =”file”>',
        '8. <input type =”password”>',
        '9. <input type =”reset”>',
        '10. <input type =”range”>',
        '11. <input type =”hidden”>'
    ]
}
let formsInpAttQz = {
    key: '',
    questions: [
        '1. What does the attribute <em>checked</em> do, provide an example of the syntax',
        '2. What does the attribute <em>disabled</em> do, provide an example of the syntax',
        '3. What does the attribute <em>readonly</em> do, provide an example of the syntax',
        '4. What does the attribute <em>max</em> do, provide an example of the syntax',
        '5. What does the attribute <em>maxlength</em> do, provide an example of the syntax',
        '6. What does the attribute <em>min</em> do, provide an example of the syntax',
        '7. What does the attribute <em>autocomplete</em> do, provide an example of the syntax',
        '8. What does the attribute <em>required</em> do, provide an example of the syntax',
        '9. What does the attribute <em>size</em> do, provide an example of the syntax',
        '10. What does the attribute <em>step</em> do, provide an example of the syntax',
        '11. What does the attribute <em>value</em> do, provide an example of the syntax',
        '12. What does the attribute <em>placeholder</em> do, provide an example of the syntax',
        '13. What does the attribute <em>multiple</em> do, provide an example of the syntax',
        '14. What does the attribute <em>pattern</em> do, provide an example of the syntax',
        '15. What does the attribute <em>autofocus</em> do, provide an example of the syntax',
    ],
    answer: [
        '1.	Starts a checkbox as checked on load. <input type=”checkbox” checked>',
        'Specify that the input cannot be selected or modified and the value will not be sent with a submit action <input type=”text” disabled>',
        '3. Specifies that an input cannot be modified (however, a user can tab to it, highlight it, and copy the text from it)..<input type=”text” readonly>',
        '4.	Set the max selectable amount of a given range. <input type=”range” max=”50”>',
        '5.	Set the max amount of characters a text input can hold. <input type=”text” maxlength=”10”>',
        '6.	Set the min selectable amount of a given range. <input type=”range” min=”0”>',
        '7.	Provides autocomplete functionality based on what is provided by the browser. <input type=”text” autocomplete>',
        '8.	Requires that a field must not be blank in order to proceed with the submission of a form. <input type=”password” required>',
        '9.	Specifies the size of a given input. <input type=”text” size=”50px”>',
        '10. Specifies the amount of numbers jumped at a time, usable with range or number inputs. <input type=”range” step=”10”>',
        '11. Specifies an initial value or for option inputs like option, radio and checkbox; specifies what value an option will carry when submitted.<input type=”radio” value=”boy”>',
        '12. Sets what is written in an input before the user selects it. <input type=”text” placeholder=”username”>',
        '13. Specifies whether an input can output multiple values. <input type=”text” multiple>',
        '14. Specifies a pattern that must be followed for an input to submit. <input type=”text” pattern=”1-3 a:A>',
        '15. Sets which input will be focused on at load. <input type=’text’ autofocus>'

    ]
}
let formsGenQz = {
    key: '',
    questions: [
        '1 What element is used to let a user select from predetermined options in a dropdown list? What tag would be used to create predetermined option?',
        '2. What element gives a larger area for users to write text into, and how do you specify its size?',
        '3. What element also gives a dropdown list of predetermined options but does so as suggestions and still allows the user to type in their own answer?',
        '4. What does the form attribute ‘action’ refer to, what property might it hold?',
        '5. What does the form attribute ‘method’ refer to, what property might it hold?',
        '6. What does the form attribute ‘target’ refer to, what property might it hold?',
        '7. What does the form attribute ‘name’ refer to?',
        '8. What are labels used for and how do you connect them to an input?',
        '9. What are the fieldset and legend elements?',
        '10. What javascript function will prevent a form from submitting to a server?',
        '11. What element is used to specify a field of some type that a user can enter data?'
    ],
    answer: [
        '1.	<select> and <option>',
        '2.	<textarea col=30 row=50>',
        '3.	<predetermined>',
        '4.	action refers to the page the form will interact with. such as /page/server.php',
        '5.	Method refers to the method the data from a from will be submitted using. Such as POST, GET, PATCH. Part of restful routing.',
        '6.	Target refers to where the user will be directed or what the user will be presented with after submitting the form.  _blank would open a new page.',
        '7.	Name is the name of the form being submitted.',
        '8.	Labels are used to clearly indicated what inputs are used for. The for=”” of a label should match the id=”” of an input.',
        '9.	A fieldset is a box surrounding a form, signifying what parts are tied together. The legend is essentially the title displayed on the fieldset.',
        '10. preventdefault',
        '11. The input tag. Make sure to always enter the type attribute to specify what input is being used.'

    ]
}
let tablesQuiz = {
    questions: [
        'What are the proper semantic element names for a table?',
        'What attributes adjust the size of cells in a table?',
        'What are the four key tags used in creating a table, and what do they all refer to?',
    ]
}
//CSS
let flexboxQuiz = {
    questions: [
        'When display elements using a flexbox, which container should have display set to flex, the parent or the children?',
        'What property changes the direction in which a container stacks flex items? What are the 4 directions, and which one is the default?',
        'What property affects the wrapping quality of a flex box? What are the three values this property can use and which one is the default?',
        'What is the shorthand property for setting both the direction and wrap properties in one line?',
        'On what axis does the justify-content property run and in what direction does it flow by default? What are 7 possible values to use in the justify-content property and what do they do?',
        'On what axis does the align-items property run and in what direction does it flow? What is the default value of align-content? What are 7 other common values that align-content can contain?',
        'What is a flex-item property that can override the value of a parent’s align-content setting?',
        'What are the 4 other flex-item properties, and what do they do? What shorthand property can be used to set 3 of those 4 and in what order does the shorthand respond?'
    ]
}

let mediaQueryQuiz = {
    questions: [
        'How do you attach a media query to a style sheet?',
        'What is the basic syntax layout for setting up a media query?',
        'How do you call a media query to set a screen width that is 500px or more?',
        'How do you call a media query to set a screen width that is 500px or less?',
        'How do you call a media query to set landscape or portrait orientation?',
        'How do you call a media query to set more than one sizes where the multiple sizes are not immediately related?',
        'What does using not, only and ‘and’ in media query syntax do?',
        'What value would be used instead of screen to affect the css of a page that is being printed?'
    ]
}
// JAVASCRIPT
let ArraysQuiz = {
    questions: [
        'What is the syntax used to express an array and how do you separate items in an array?',
        'What syntax is used to access a specific item in an array based on their index number?',
        'What APM adds one or more elements to the end of an array (and returns the new length of the array)?',
        'What APM removes the last element from an array and returns that removed element? Is this APM destructive?',
        'What APM removes the first element from an array and returns that removed element? Is this APM destructive?',
        'What APM adds one or more elements to the beginning of an array (and returns the new length of the array)? Is this APM destructive?',
        'What is destructuring an array, and what is the syntax used? Can you destructure more than one item from an array at once? Is this destructive?',
        'What APM is used to merge two or more arrays to create a new array, but does not change the existing arrays? Is this APM destructive?',
        'What APM creates and returns a new string by concatenating all of the elements in an array separated by commas or by a specified separator? Is this APM destructive? ',
        'What APM determines whether an array includes a certain value among its entries, returning true or false as appropriate? When searching for numbers that aren’t strings, are quotes necessary in the search parameter? Is this APM destructive?',
        'What APM reverses the order of an array, making the first element the last and the last the first? Is this APM destructive?',
        'What APM returns the first index at which a given element can be found in the array, or -1 if it is not present? Is this APM destructive?',
        'What APM returns a shallow copy of a portion of an array into a new array selected from start to end specified by index numbers? What happens if there is no end index number specified? Is this APM destructive?',
        'What APM changes the contents of an array by removing or replacing existing elements and/or adding new element in place? How many parameters does this APM take and what do they indicate? Is this APM destructive?',
        'Can arrays contain more than one data type?',
        'What is being compared if you use === in relation to arrays?',
        'If an array is stored as a const, what can be changed?',
        'What APM creates a new array populated with the results of calling a provided function on every element in the calling array? What is the syntax for this method? Is this APM destructive?',
        'What APM creates a new array with all elements that pass the test implemented by the provided function? What is the syntax for this method? Is this APM destructive?',
        'What APM tests whether at least one element in the array passes the test implemented by the provided function, and if even one element in the array passes the return is true, otherwise the return is false? Provide an example of the syntax. Is this APM destructive?',
        'What APM tests whether all elements in the array passes the test implemented by the provided function, and if even one element fails the return is false? Provide an example of the syntax. Is this APM destructive?',
        'What APM sorts the elements of an array in place and returns the sorted array, what is the default return of this array when given no compare function, and if given a compare function provide an example of the syntax and the logic behind it. Is this APM destructive? ',
        'What APM executes a function (that you provide) on each element of the array, resulting in a single output value? This APM uses an accumulator, what is the default value of the initial value if none is provided. Provide an example of the syntax. Is this APM destructive?',
    ]
}

let LoopsQuiz = {
    key: '',
    questions: [
        'What is a for loop, and what syntax does it use?',
        'What is a while loop, and what syntax does it use?',
        'What is a labeled statement?',
        'What keyword ends a loop? What does it look like when used with a label?',
        'What is a for of loop? What is the syntax?',
        'Are object literals considered iterable?',
        'What methods can be used to turn keys and values from object literals into new iterable arrays? What method gives you a nested array of key value pairs?'
    ],
}

let StringsQuiz = {
    questions: [
        'What syntax is used to access a character in a string by its index?',
        'What property can be chained on to a variable (or a string in quotes) to tell you how many characters it has?',
        'What operator can be used to check the type of a variable?',
        'Other than looking up the docs on MDN or W3, what’s a way to check what string methods exist?',
        'Concerning syntax, what’s a good way to tell if you are accessing a property vs executing a method?',
        'What method will take a string and create a new version of it in all caps?',
        'What method will take a string and change all characters to lower case? ',
        'What method removes all empty space at the beginning and end of a string?',
        'How do you chain together multiple string methods?',
        'What method lets you search for the index location of an argument within a string? What value is returned if the searched for argument does not exist? If there are multiple instances of searched argument, which index is presented?',
        'What method can be used to extract part of a string (and create a new string), given that you know the index start and end points of what you want to extract? What happens when only one argument is put into the method?',
        'What method can be used to replace part of a string, but only in the first instance? What method can be used to replace every instance listed in the arguments?',
        'What method will repeat a string?',
        'What is the syntax for a string template literal?',
    ]
}
let OperatorsQuiz = {
    questions: [
        'What is the simplest AO?',
        'What is the shorthand AO for x = x + y?',
        'What is the shorthand AO for x = x - y?',
        'What is the shorthand AO for x = x * y?',
        'What is the shorthand AO for x = x / y?',
        'What is the shorthand AO for x = x % y? ',
        'What is the shorthand AO for x = x ** y? ',
        'What CO returns true if the operands are equal (this CO will attempt to convert two different operand types numerically if they are not the same, so ‘1’ and 1 would return true)?',
        'What CO returns true if the operands are NOT equal (this CO will attempt to convert two different operand types numerically if they are not the same, so ‘1’ and 1 would return false)?',
        'What CO returns true if the operands are of the same type and equal?',
        'Returns true if the operands are of the same type but NOT equal?',
        'What CO returns true if the left operand is greater than the right operand?',
        'What CO returns true if the left operand is greater than or equal to the right operand?',
        'What CO returns true if the left operand is less than the right operand?',
        'What CO returns true if the left operand is less than or equal to the right operand?',
        'What is the ArO used to find the remainder (aka mod)?',
        'What is the ArO used to find the exponentiation (aka squared, cubed, etc)?',
        'What is the ArO used to increment a value by one? What difference does it make if this operator is before or after a number?',
        'What is the ArO used to decrement a value by one? What difference does it make if this operator is before or after a number?',
        'What ArO will attempt to conver the operand to a number if it is not already?',
        'What is a Logical Operator?',
        'What LO means BOTH expressions must return true for the overall output to be true?',
        'What LO means ONE OF THE TWO expressions must return true for the overall output to be true?',
        'What is the LO for NOT? ',
        'What is a conditional operator and how is it written?',
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
        'What is the command for configuring local username?',
        'What git folder holds a heads directory that contains the hash commit for each branch tip?',
        'What does the HEAD folder contain in the git config folder?',
        'What are the 4 types of Git Objects stored in the objects folder?',
        'What cryptographic hash function does git use to create hashes?',
        'What are a blob and tree in git?',
        'What is the command that lets the user view and update reference logs?',
        'What command lets the user see a specific reflog? What does it default to if no branch is specified?',
        'How can a user use reflogs to reinstate a commit that was removed from the regular log?',
        'How can a user use reflogs to reset a branch to a commit before a rebase?',
        'How does a user set up aliases in git using the config folder?',
        'What is the command for setting up a global alias?',
        'How do arguments interact with alias commands?'
    ]
}

let GitHubQuiz1 = {
    questions: [
        'What is the command for copying a github repository to your local machine?',
        'What is the command to view any existing remotes? What additional flag can be added for more information about the remotes?',
        'What is the command for adding a remote?',
        'What is the command to rename a remote?',
        'What is the command used to remove a remote?',
        'What command is used to push changes from your local repository to the github repository?',
        'What is the command for pushing up a local branch to a differently named branch on github?',
        'What flag is used when pushing to create an upstream connection?',
        'When a repository is started on github and then cloned to a local machine, how do you set up the remote?',
        'What command shows where the remote branch head is located?',
        'What command lets you view (in detached head mode) the remote head as it was the last time it was updated?',
        'Which command will create a local branch based off the name of a remote branch?',
        'What command updates and see changes from the remote repo, without affecting the local repository? What happens with this command is used without specifying the remote?',
        'What command lets you update and see changes from a specific repo branch to a specific local branch?',
        'When using git status, what is the comparison between your local head and the remote head referring to?',
        'What command UPDATES a local repo branch with the changes of the remote repo branch? ',
        'When using the command that updates the local repo with changes from the remote repo, what is the default behavior if no branch is specified? What if no remote is specified?',
        'What is the difference between a private and public repository?',
        'What are the key purposes of a README file?',
        'What is markdown?',
        'What is a Github Gist?',
        'Using Github pages, what is the difference between a Project page and a Personal page?'
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