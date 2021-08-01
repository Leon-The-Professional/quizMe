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

// 
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

