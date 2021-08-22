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
        hideQzs();
        showQz(quizSections[i])
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
        let answer = document.createElement('textarea')
        answer.setAttribute('rows', '5')
        qContain.append(answer)
        answer.classList.add('answer')
        quiz.append(qContain)
        i++;
    }
}

getQuiz.addEventListener('click', function () {
    populateQuiz(choice)
})

const getAnswers = document.querySelector('#getAnswers')

const answerSheet = function () {
    let answers = document.querySelectorAll('.answer')
}

getAnswers.addEventListener('click', answerSheet)

