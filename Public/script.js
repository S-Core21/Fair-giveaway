let connectWallet = document.querySelectorAll('.wallet')
let walletOptions = document.querySelector('#connectWallet')
let mainPagge = document.querySelector('.mainPage')
let footer = document.querySelector('footer')
let metamaskLogin = document.querySelector('#metamask')
let toLogMetamask = document.querySelector('#logMetamask')
let walletOpen = false
walletOptions.style.display = 'none'
metamaskLogin.style.display = 'none'


for(i = 0; i <connectWallet.length; i++){
    connectWallet[i].addEventListener('click', ()=>{
        walletOptions.style.display = 'block'
        mainPagge.style.opacity = '0.3'
        footer.style.opacity = '0.6'
        metamaskLogin.style.display = 'none'
        console.log('food')
    })
}

mainPagge.addEventListener('click', ()=>{
    walletOptions.style.display = 'none'
    metamaskLogin.style.display = 'none'
    mainPagge.style.opacity = '1'
    footer.style.opacity = '1'
    walletOpen = false
})


toLogMetamask.addEventListener('click', ()=>{
    walletOptions.style.display = 'none'
    metamaskLogin.style.display = 'flex'
})