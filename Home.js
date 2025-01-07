const coverPicOpen = document.getElementById('cover-picture')
const coverPicClose = document.querySelector('.cover-pic')

coverPicOpen.onclick = () => { coverPicClose.classList.add('active') }
coverPicClose.onclick = () => { coverPicClose.classList.remove('active') }

const linker = document.querySelector('.linker')

document.querySelectorAll('.chapter').forEach(button => {
    button.addEventListener('click', (e) => {
        linker.innerHTML = `<a href="chapters/chapter${e.target.id}.html" id="clicker"></a>`
        document.getElementById('clicker').click()
    })
})

document.querySelectorAll('main .info-section .btn-section button').forEach(button => {
    button.addEventListener('click', (e) => {
        linker.innerHTML = `<a href="chapters/chapter${e.target.id}.html" id="clicker"></a>`
        document.getElementById('clicker').click()
    })
})

document.querySelector('header h3').addEventListener('click', () => {
    linker.innerHTML = `<a href="Home.html" id="clicker"></a>`
    document.getElementById('clicker').click()
})