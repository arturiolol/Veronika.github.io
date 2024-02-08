const images = document.querySelectorAll('.slider .slider-line img')
const sliderLine = document.querySelector('.slider-line')

let count = 0
let width

function init(){
    width = document.querySelector('.slider').offsetWidth
    
    sliderLine.style.width = width * images.length +  `px`
    images.forEach( (img) => {
        img.style.width = width + `px`
        img.style.height = 'auto'
    })
    loadSlider()
}

const nextImage = () => {
    count++
    if (count >= images.length) count = 0
    loadSlider()
}

function loadSlider(){
    sliderLine.style.transform = 'translate(-' + count * width + 'px)'
}

window.addEventListener('resize', init)
init()

setInterval(nextImage, 2500)