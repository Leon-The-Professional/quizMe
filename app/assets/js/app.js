const tabs = document.querySelectorAll('.tabs')
const htmlTab = document.querySelector('#htmlTab')
const htmlQ = document.querySelector('#htmlQ')
const cssTab = document.querySelector('#cssTab')
const cssQ = document.querySelector('#cssQ')
const jsTab = document.querySelector('#jsTab')
const jsQ = document.querySelector('#jsQ')
const gitTab = document.querySelector('#gitTab')
const gitQ = document.querySelector('#gitQ')
const quizPickers = document.querySelectorAll('.quizPicker')

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

htmlTab.addEventListener('click', function () {
    hideQzs();
    showQz(htmlQ)
})
cssTab.addEventListener('click', function () {
    hideQzs();
    showQz(cssQ);
})
jsTab.addEventListener('click', function () {
    hideQzs();
    showQz(jsQ)
})
gitTab.addEventListener('click', function () {
    hideQzs();
    showQz(gitQ);
})

