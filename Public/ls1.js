let title = document.getElementById('title');
let duration = document.getElementById('dur');
let winners = document.getElementById('NOW');
let form = document.querySelector('form');

form.addEventListener('submit', ()=>{
    let titleValue = title.value;
    let durationValue = duration.value;
    let winnerValue = winners.value;

    localStorage.setItem('title', titleValue)
    localStorage.setItem('duration', durationValue)
    localStorage.setItem('winner', winnerValue)
})
