const linker = document.querySelector('.linker')

document.querySelector('header h3').addEventListener('click', () => {
    linker.innerHTML = `<a href="../Home.html" id="clicker"></a>`
    document.getElementById('clicker').click()
})

const chapters = document.getElementById('chapters')

chapters.onchange = (e) => {
    linker.innerHTML = `<a href="chapter${e.target.value}.html" id="clicker"></a>`
    document.getElementById('clicker').click()
}

const changeChapBtns = document.querySelectorAll('main .btns button')

changeChapBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        linker.innerHTML = `<a href="chapter${e.target.id}.html" id="clicker"></a>`
        document.getElementById('clicker').click()
    })
})