const tabs = document.querySelectorAll('.tabs')
const quizDivs = document.querySelectorAll('.quizDiv')

let specificTabs = [
    htmlTab = document.querySelector('#htmlTab'),
    cssTab = document.querySelector('#cssTab'),
    jsTab = document.querySelector('#jsTab'),
    gitTab = document.querySelector('#gitTab'),
    backendTab = document.querySelector('#backendTab'),
    miscTab = document.querySelector('#miscTab')
]

let quizSections = [
    htmlQ = document.querySelector('#htmlQ'),
    cssQ = document.querySelector('#cssQ'),
    jsQ = document.querySelector('#jsQ'),
    gitQ = document.querySelector('#gitQ'),
    backendQ = document.querySelector('#backendQ'),
    miscQ = document.querySelector('#miscQ')
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
        tab.classList.toggle('activetab')
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
const populateQuiz = function (obj) {
    quiz.innerHTML = '';
    i = 1;
    shuffleArray(obj.questions);
    for (let q of obj.questions) {
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
        let aContain = document.createElement('div')
        aContain.classList.add('acontain')
        let qRepeat = document.createElement('p')
        qRepeat.innerText = choice.questions[i]
        let userAnswer = document.createElement('p')
        userAnswer.innerText = answerValues[i]
        let answerAnswer = document.createElement('p')
        for (let a of choice.answers) {
            if (a[0] === choice.questions[i][0] && a[1] === choice.questions[i][1]) {
                answerAnswer.innerText = a;
                console.log(a[0])
            }
        }
        aContain.append(qRepeat)
        aContain.append(userAnswer)
        aContain.append(answerAnswer)
        answerContainer.append(aContain)
    }
    getAnswers.classList.add('hidden')
    answerContainer.classList.remove('hidden')
}

getAnswers.addEventListener('click', answerSheet)

