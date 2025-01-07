const pannels = document.querySelector('main .content-section .list').dataset.total - 1
let current = 0

// Side Pannel
const sPBtn = document.querySelector('#sideBtn')
const sP = document.querySelector('.side-pannel')
const sPCBtn = document.querySelector('.side-pannel .close')

sPBtn.onclick = () => { sP.classList.add('active') }
sPCBtn.onclick = () => { sP.classList.remove('active') }

// View Changer
const view = document.querySelector('main')
const vC = document.querySelector('#View')

vC.onchange = (e) => { view.setAttribute('class', e.target.value); viewCheck()  }

// Font Changer
const font = document.getElementById('font')
const content = document.querySelectorAll('.content-section')

font.onchange = (e) => { 
    content.forEach(section => {
        section.style = `--f:${e.target.value}`;
    })
}

// Page Changer in View 1
const pCP = document.querySelectorAll('.changePage#prev')
const pCN = document.querySelectorAll('.changePage#next')
const dP = document.querySelectorAll('.content-section .list')

pCP.forEach(element => {
    element.addEventListener('click', () => {
        if (current >= 1) {
            current--;
            dP.forEach(hold => {
                hold.style = `--s:${current}`
            })
        }
    })
})

pCN.forEach(element => {
    element.addEventListener('click', () => {
        if (current < pannels) {
            current++;
            dP.forEach(hold => {
                hold.style = `--s:${current}`
            }) 
        }
    })
})

const mainContents = document.querySelectorAll('main .content-section .list .content')

function viewCheck() {
    mainContents.forEach(button => {
        button.removeEventListener('click', addE)
    })
    if (view.classList.contains('view3')) {
        mainContents.forEach(button => {
            button.addEventListener('click', addE)
        })
    }
}

const selectScreenClose = document.querySelector('.select-screen .close')
selectScreenClose.onclick = () => {
    document.querySelector('.select-screen').classList.remove('active')
}

function addE() {
    current = this.id
    dP.forEach(hold => {
        hold.style = `--s:${current}`
    })
    document.querySelector('.select-screen').classList.add('active')
}