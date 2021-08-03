const tabs = document.querySelectorAll('.tabs')
const quizPickers = document.querySelectorAll('.quizPicker')

let specificTabs = [
    htmlTab = document.querySelector('#htmlTab'),
    cssTab = document.querySelector('#cssTab'),
    jsTab = document.querySelector('#jsTab'),
    gitTab = document.querySelector('#gitTab'),
    miscTab = document.querySelector('#miscTab')
]

let qzs = [
    htmlQ = document.querySelector('#htmlQ'),
    cssQ = document.querySelector('#cssQ'),
    jsQ = document.querySelector('#jsQ'),
    gitQ = document.querySelector('#gitQ'),
    miscQ = document.querySelector('#miscQ')
]

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

const hideQzs = function () {
    for (let quiz of quizPickers) {
        quiz.classList.add('hidden')
    }
}

const showQz = function (selector) {
    if (selector.classList.contains('hidden')) {
        selector.classList.remove('hidden')
    }
}

for (let i = 0; i < specificTabs.length; i++) {
    specificTabs[i].addEventListener('click', function () {
        hideQzs();
        showQz(qzs[i])
    })
}

// Populating Quiz
const quizContainer = document.querySelector('#quizContainer')
const quiz = document.querySelector('#quiz')
let currentQuiz = document.querySelector('.quizSelect')
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
const populateQuiz = function (arr) {
    quiz.innerHTML = ''
    i = 1;
    shuffleArray(arr);
    for (let q of arr) {
        let qContain = document.createElement('div')
        qContain.classList.add('qcontain')
        let question = document.createElement('p')
        let number = document.createElement('span')
        number.innerText = `${i}. `
        question.innerText = number.innerText + q;
        qContain.append(question);
        question.classList.add('question')
        let answer = document.createElement('textarea')
        answer.setAttribute('rows', '5')
        qContain.append(answer)
        answer.classList.add('answer')
        quiz.append(qContain)
        i++;
    }
    let checkQuiz = document.createElement('button')
    checkQuiz.innerText = 'Check Answers'
    quiz.append(checkQuiz)
}

getQuiz.addEventListener('click', function () {
    populateQuiz(LoopsQuiz)
})

