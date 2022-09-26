let hCode = document.getElementById('ParticipanID');
let pcode = document.getElementById('GiveawayID');
let form = document.querySelector('form')

form.addEventListener('submit', ()=>{
    let hCodeValue = hCode.value;
    let pcodeValue = pcode.value;

    localStorage.setItem('H-Code', hCodeValue);
    localStorage.setItem('P-Code', pcodeValue);

})