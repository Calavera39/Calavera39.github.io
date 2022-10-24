let buttonImg = document.getElementById('img'),
    buttonFact = document.getElementById('fact'),
    image = document.querySelector('img'),
    fact = document.querySelector('.random__fact-text'),
    urlImg = 'https://random.dog/woof.json';
    urlFact = 'https://uselessfacts.jsph.pl/random.json?language=en'


async function fetchHandler() {
    try { 
        let response = await fetch(urlImg);
        let data = await response.json();
        console.log(data)
        image.src = data.url
    } catch(error) {
        console.log(error);
    }
}

buttonImg.addEventListener('click', function() {
    if(image.src != /(\.mp4)$/i) {
        fetchHandler();
    } 
})


async function fetchHandlerFact() {
    try { 
        let response = await fetch(urlFact);
        let data = await response.json();
        
        fact.innerHTML = data.text
    } catch(error) {
        console.log(error);
    }
}

buttonFact.addEventListener('click', function() {
    fetchHandlerFact();
})