const square = document.querySelectorAll(".square")
const mole = document.querySelectorAll('mole')
const timeLeft = document.querySelector('#Time-left')
let score = document.querySelector('#score')
let result=0
let currentTime=timeLeft.textContent

function randomSquare(){
    square.forEach((className)=>{
        className.classList.remove('mole')

    })
    let randomPosition = square[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id

}

square.forEach(id =>{
    id.addEventListener('mouseup',()=>{
        if (id.id === hitPosition){
            result = result+1
            score.textContent=result
        }
    })
})

function Movemole(){
    let timeId=null
   timeId = setInterval(randomSquare,1000)
}
Movemole()

function countDown(){
    currentTime--
    timeLeft.textContent=currentTime
    
    if(currentTime === 0){
        clearInterval(timeId)
        alert('GAME OVER! Your final result'+ result)
    }
}
let timeId=setInterval(countDown,1000)