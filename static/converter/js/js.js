let dollar = document.getElementById('dlr')
    rub = document.getElementById('rub')
    inputDlr = document.querySelector('.converter__wrapper')
    inputRub = document.querySelector('.converter__wrapper1')

rub.addEventListener('click', function() {
    dollar.classList.remove('converter__tabs-item_acrive')
    rub.classList.add('converter__tabs-item_acrive')
    inputRub.classList.add('converter__wrapper1_active')
    inputDlr.classList.remove('converter__wrapper_active')
})

dollar.addEventListener('click', function() {
    rub.classList.remove('converter__tabs-item_acrive')
    dollar.classList.add('converter__tabs-item_acrive')
    inputDlr.classList.add('converter__wrapper_active')
    inputRub.classList.remove('converter__wrapper1_active')
})

fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(function(res) {
    return res.json()
}).then(function(data) {
    
    
    courses.USD = data.Valute.USD.Value
    
   

    elementUSD.textContent = 'Сейчас   1$   равен: '  + courses.USD.toFixed(2) + " руб"
    
})

let courses = {};

let elementUSD = document.querySelector('[data-value="USD"]')


let rubInput = document.querySelector('.rub'),
    rubResult = document.querySelector('.converter__result_2'),
    dlrInput = document.querySelector('.dlr'),
    dlrResult = document.querySelector('.converter__result_1');



rubInput.addEventListener('input', function() {
    if(rubInput.value.replace(/\s/g, '').length === 0 || isNaN(rubInput.value)){
        rubResult.textContent = 'Введите число'
    } else {
        rubResult.textContent = (rubInput.value / courses.USD).toFixed(2) +'$'
    }
})

dlrInput.addEventListener('input', function() {
    if(dlrInput.value.replace(/\s/g, '').length === 0 || isNaN(dlrInput.value)){
        dlrResult.textContent = 'Введите число'
    } else {
        dlrResult.textContent = (dlrInput.value * courses.USD).toFixed(2) +' руб'
    }
})









