const circle = document.querySelector('.circle')
const btn = document.querySelector('.btn')
const textArea = document.querySelector('.textarea')


const words = ['Возможно', 'Частично', 'Невозможно','Истина','нет','да','не ясно']
const magic = document.createElement('h2')

function randomWord(){
    const min = 0;
    const max = words.length - 1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return createMagic(words[randomNumber])
}

function createMagic(word){
    circle.append(magic)
    magic.textContent = word
    magic.style.display = 'inline-block'
    magic.style.position = 'relative'
    magic.style.top = circle.clientHeight / 2 + `px`
    magic.style.left =  circle.clientWidth / 2 - magic.clientWidth / 2 + `px`
}


btn.addEventListener('click' , () => {
    const activateInterval = setInterval(randomWord, 200)

    setTimeout(() => {clearInterval(activateInterval)}, 1000)
})

