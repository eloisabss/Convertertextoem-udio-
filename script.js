let textarea = document.querySelector('#textarea')
let voices = document.querySelector('#voices')
let button = document.querySelector('#button')
let selectedvoice = 0;

window.speechSynthesis.addEventListener('voiceschanged', () => {
    let voiceslist = window.speechSynthesis.getVoices();
    for(let i in voiceslist) {
        let opitionE1 = document.createElement('option');
        opitionE1.setAttribute('value', i);
        opitionE1.innerText = voiceslist[i].name;
        voices.appendChild(opitionE1);

    }
});

button.addEventListener('click', () => {
    if(textarea.value !== '') {
        let ut = new SpeechSynthesisUtterance(textarea.value);
        ut.voice = new SpeechSynthesisUtterance(textarea.value);
        ut.voice = voiceslist[selectedvoice];
        window.speechSynthesis.speak(ut);
    }
});

voices.addEventListener('change', () => {
        selectedvoice = parseInt(voices.value);
});

function updatestatus() {
    if(window.speechSynthesis.speaking) {
        voices.setAttribute('disabled', 'disabled');
        button.setAttribute('disabled', 'disabled');
    } else{
        voices.removeAttribute('disabled');
        button.removeAttribute('disabled');
    }
}
setInterval(updatestatus, 100);