const tabs = document.querySelectorAll('.tabs')
const quizDivs = document.querySelectorAll('.quizDiv')

let specificTabs = [
    htmlTab = document.querySelector('#htmlTab'),
    cssTab = document.querySelector('#cssTab'),
    jsTab = document.querySelector('#jsTab'),
    gitTab = document.querySelector('#gitTab'),
    backendTab = document.querySelector('#backendTab'),
    // miscTab = document.querySelector('#miscTab')
]

let quizSections = [
    htmlQ = document.querySelector('#htmlQ'),
    cssQ = document.querySelector('#cssQ'),
    jsQ = document.querySelector('#jsQ'),
    gitQ = document.querySelector('#gitQ'),
    backendQ = document.querySelector('#backendQ'),
    // miscQ = document.querySelector('#miscQ')
]

// Establishing Quiz Selected
let currentQuiz = document.querySelector('.activeQuiz .quizSelect')
let choice = formsGenQz;
function changeChoice() {
    switch (currentQuiz.value) {
        // html quizzes
        case 'inpTyp':
            choice = formsInpQz;
            break;
        case 'inpAtt':
            choice = formsInpAttQz;
            break;
        case 'formGen':
            choice = formsGenQz;
            break;
        case 'tables':
            choice = tablesQuiz;
            break;
        // css quizzes 
        case 'flexbox':
            choice = flexboxQuiz;
            break;
        case 'grid':
            choice = Quiz;
            break;
        case 'mediaQueries':
            choice = mediaQueryQuiz;
            break;
        //  JavaScript quizzes
        case 'strings':
            choice = StringsQuiz;
            break;
        case 'operators':
            choice = OperatorsQuiz;
            break;
        case 'arrays':
            choice = ArraysQuiz;
            break;
        case 'loops':
            choice = LoopsQuiz;
            break;
        //  Backend quizzes
        case 'node':
            choice = nodeQz;
            break;
        case 'express':
            choice = expressQz;
            break;
        case 'expressRest':
            choice = expressRestQz;
            break;
        case 'mongo':
            choice = mongoQz;
            break;
        case 'mongoose':
            choice = mongooseQz;
            break;
        // Git and GitHub quizzes
        case 'git1':
            choice = GitQuiz1;
            break;
        case 'git2':
            choice = GitQuiz2;
            break;
        case 'git3':
            choice = GitQuiz3;
            break;
        case 'github1':
            choice = GitHubQuiz1;
            break;
        case 'github2':
            choice = GitHubQuiz2;
            break;
        default:
    }
}
currentQuiz.addEventListener('change', changeChoice)

// Quiz Selection
for (let tab of tabs) {
    tab.addEventListener('click', () => {
        for (let t of tabs) {
            if (t.classList.contains('activetab')) {
                t.classList.remove('activetab')
            }
        }
        tab.classList.add('activetab')
    })
}

// hide previous quiz options
const hideQzs = function () {
    for (let q of quizDivs) {
        q.classList.add('hidden')
        q.classList.remove('activeQuiz')
        quiz.innerHTML = ''
    }
}

// Show quiz options and functionality for choosing quizzes
const showQz = function (selector) {
    if (selector.classList.contains('hidden')) {
        selector.classList.remove('hidden')
        selector.classList.add('activeQuiz')
        currentQuiz = document.querySelector('.activeQuiz .quizSelect')
        currentQuiz.addEventListener('change', changeChoice)
        changeChoice();
    }
}

for (let i = 0; i < specificTabs.length; i++) {
    specificTabs[i].addEventListener('click', function () {
        quizContainer.classList.remove('hidden')
        if (!getAnswers.classList.contains('hidden')) {
            getAnswers.classList.add('hidden')
        }
        hideQzs();
        showQz(quizSections[i])
        answerContainer.classList.add('hidden')
        answerContainer.innerHTML = '';
    })
}


// Populating Quiz
const quizContainer = document.querySelector('#quizContainer')
const quiz = document.querySelector('#quiz')
const getQuiz = document.querySelector('#getQuiz')
const randomize = document.querySelector('#randomize')
// let randNum = function () { Math.random() * 10 }
// Durstenfeld Shuffle 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

let tempArray = ''

const populateQuiz = function (obj) {
    quiz.innerHTML = '';
    i = 1;
    tempArray = [...obj.questions]
    if (randomize.checked) {
        shuffleArray(tempArray);
    } else {
        tempArray = obj.questions
    }
    if (obj.key) {
        let kContain = document.createElement('div');
        kContain.classList.add('kContain');
        let key = document.createElement('p');
        key.innerHTML = `<strong>Additional Info:</strong> ${obj.key}`;
        kContain.append(key);
        quiz.append(kContain);
    }
    for (let q of tempArray) {
        let qContain = document.createElement('div')
        qContain.classList.add('qcontain')
        let question = document.createElement('p')
        question.innerHTML = q;
        qContain.append(question);
        question.classList.add('question')
        let answerArea = document.createElement('textarea')
        answerArea.setAttribute('rows', '5')
        qContain.append(answerArea)
        answerArea.classList.add('answer')
        quiz.append(qContain)
        i++;
    }
    getAnswers.classList.remove('hidden')
}

getQuiz.addEventListener('click', function () {
    populateQuiz(choice)
})

// Generate Answer Sheet


const scrollTop = function () {
    window.scrollTo(0, 0);
};

const getAnswers = document.querySelector('#getAnswers')
let answers = [];
let answerValues = [];
const answerContainer = document.querySelector('#answerContainer')


const answerSheet = function () {
    quizContainer.classList.add('hidden')
    answers = Array.from(document.querySelectorAll('.answer'))
    answerValues = []
    for (let a of answers) {
        answerValues.push(a.value)
    }
    for (let i = 0; i < choice.questions.length; i++) {
        // create answer container
        let aContain = document.createElement('div')
        aContain.classList.add('acontain')

        // Add initial question
        let qRepeat = document.createElement('p')
        qRepeat.classList.add('aSheetP')
        qRepeat.innerHTML = tempArray[i].slice(3).trim();
        // Add Question key
        const qKey = document.createElement('p')
        qKey.classList.add('answerKey')
        qKey.innerText = 'Question ';
        qRepeat.prepend(qKey)

        // Add user answer
        let userAnswer = document.createElement('p')
        userAnswer.classList.add('answerP')
        userAnswer.classList.add('aSheetP')
        userAnswer.innerText = answerValues[i]
        // Add Answer key
        const uaKey = document.createElement('p')
        uaKey.classList.add('answerKey')
        uaKey.innerText = 'User Answer ';
        userAnswer.prepend(uaKey)

        // Add correct answer
        let answerAnswer = document.createElement('p');
        for (let a of choice.answers) {
            if (a[0] === tempArray[i][0] && a[1] === tempArray[i][1]) {
                answerAnswer.innerHTML = a.slice(3).trim();
            }
        }
        answerAnswer.classList.add('aSheetP')
        // Add Correct Answer key
        const aKey = document.createElement('p')
        aKey.classList.add('answerKey')
        aKey.innerText = 'Correct Answer ';
        answerAnswer.prepend(aKey)

        // Finalize answer sheet
        aContain.append(qRepeat)
        aContain.append(userAnswer)
        aContain.append(answerAnswer)
        answerContainer.append(aContain)
    }
    getAnswers.classList.add('hidden')
    answerContainer.classList.remove('hidden')
    scrollTop();
}


getAnswers.addEventListener('click', answerSheet)

