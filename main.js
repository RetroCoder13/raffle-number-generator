document.addEventListener('mousedown',function(){
    newNumber(prevNumbers,highestNumber)
})

function newNumber(prevNumbers,highestNumber){
    number = Math.round(Math.random() * highestNumber)
    document.getElementById('number').innerHTML = number
}

prevNumbers = []
highestNumber = parseInt(prompt("How many numbers?"))
newNumber(prevNumbers,highestNumber)