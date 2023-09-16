let celciusInput = document.querySelector('#celcius > input')

let fahrenheightInput = document.querySelector('#fahrenheit > input')

let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input', function(){
    let ct = parseFloat(celciusInput.value)
    let ft = (ct*(9/5))+32
    let kt = ct + 273.15

    fahrenheightInput.value = roundNumber(ft)
    kelvinInput.value = roundNumber(kt)
})


fahrenheightInput.addEventListener('input', function(){
    let ft = parseFloat(fahrenheightInput.value)
    let ct = (ft - 32) * (5/9)
    let kt = (ft - 32) * (5/9) + 273.15

    celciusInput.value = roundNumber(ct)
    kelvinInput.value = roundNumber(kt)
})

kelvinInput.addEventListener('input', function(){
    let kt = parseFloat(kelvinInput.value)
    let ct = kt - 273.15
    let ft = (kt - 273.15) * (9/5) +32

    celciusInput.value = roundNumber(ct)
    fahrenheightInput.value = roundNumber(ft)
})

btn.addEventListener('click', ()=>{
    celciusInput.value = ""
    fahrenheightInput.value = ""
    kelvinInput.value = ""
})