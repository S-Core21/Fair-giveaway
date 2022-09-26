let title = document.getElementById('title');
// let duration = document.getElementById('lapse');
// let winners = document.getElementById('winners');
let titleValue = localStorage.getItem('title');
// let durationValue = localStorage.getItem('duration');
// let winnerValue = localStorage.getItem('winner');
let hostID = Math.random().toString(36).substring(2, 15);
let pID = Math.random().toString(36).substring(2, 15)
let personalID = document.getElementById('PersonalID');
let giveawayID = document.getElementById('GiveawayID');

console.log(hostID)


// title.value = titleValue;
title.textContent = titleValue;
// duration.value = durationValue;
// winners.value = winnerValue;


if(titleValue.length > 0){
    personalID.value = hostID
    giveawayID.value = pID
}
// personalID.value = hostID
// giveawayID.value = pID

// if(durationValue > 0){
//     personalID.value = hostID
//     giveawayID.value = pID
// }



