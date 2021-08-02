let LoopsQuiz = [
    'What is a for loop, and what syntax does it use?',
    'What is a while loop, and what syntax does it use?',
    'What is a labeled statement?',
    'What keyword ends a loop? What does it look like when used with a label?',
    'What is a for of loop? What is the syntax?',
    'Are object literals considered iterable?',
    'What methods can be used to turn keys and values from object literals into new iterable arrays? What method gives you a nested array of key value pairs?'
]

// Populating Quiz
const quizContainer = document.querySelector('#quizContainer')
const quiz = document.querySelector('#quiz')
let currentQuiz = document.querySelector('.quizSelect')
const getQuiz = document.querySelector('#getQuiz')
const populateQuiz = function (array) {
    quiz.innerHTML = ''
    i = 1;
    for (let q of array) {
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