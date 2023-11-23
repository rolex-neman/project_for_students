//HW 1
//check gmail validation
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /[a-z\d{9}]@gmail.com/

gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'RED'
    }
})

const child = document.querySelector('.child_block')
let y = 0
let x = 0
const moveBlock = () => {
    if( x<= 447 && y==0){
        x++
        child.style.left = x + 'px'
        setTimeout( moveBlock, 1)
    }else if(y <= 447 && x>=0){
        y++
        child.style.top = y + 'px'
        setTimeout( moveBlock, 1)
    }else if (x >= 0) {
        x--
        child.style.left = x + 'px'
        setTimeout( moveBlock, 1 )
    }else if (y >= 0) {
        y--
        child.style.top = y + 'px'
        setTimeout( moveBlock, 1 )
    }
    
}
moveBlock()

// HW2
const minutesBlock = document.querySelector('#minutesS')
const second = document.querySelector('#secondsS')
const mlSecond = document.querySelector('#ml-secondsS')
const btnStart = document.querySelector('#start')
const btnStop = document.querySelector('#stop')
const btnReset = document.querySelector('#reset')
let interval;
let secondss = 0;
let minutess = 0;
let milliseconds = 0;
const startTimer = () => {
    milliseconds++
    
    mlSecond.innerHTML = milliseconds;
    if (milliseconds <= 99) {

    }

    if (milliseconds > 99) {
        secondss++
        second.innerHTML = '0' + secondss

        milliseconds = 0
    }
    if (secondss > 9) {
        second.innerHTML = secondss
    }
    if (secondss > 9) {
        minutess++
        minutesBlock.innerHTML = '0' + minutess;
        secondss = 0
        second.innerHTML = '0' + secondss
    }
    if (minutess > 9) {
        minutesBlock.innerHTML = minutess
    }
};


btnStart.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)

})
btnStop.addEventListener('click', () => {
    clearInterval(interval)
})
btnReset.addEventListener('click', () => {
    clearInterval(interval)
      secondss = 0;
    minutess = 0;
     milliseconds = 0;
     minutesBlock.innerHTML = '00'
     second.innerHTML = '00'
     mlSecond.innerHTML = '00'
})



const getBTN = document.querySelector('.btn')




const getBtn = document.querySelector('#get-btn')
const lala = document.querySelector(".lala")
getBtn.onclick = ()  =>{
    reqURL = "../json/person.json"
    const request = new XMLHttpRequest()
    request.open("GET" , reqURL)
    request.onload=()=>{
        let resp =JSON.parse(request.response);
        
        resp.forEach(element => {
            const card = document.createElement("div")
            const name = document.createElement("p")
            const age =document.createElement("span")
            name.innerHTML=element.name
            age.innerHTML=element.age
            
            card.append(name)
            card.append(age)
            lala.append(card)
        });


    }
    request.send()
}

























