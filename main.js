document.addEventListener('mousedown',function(){
    newNumber(prevNumbers,highestNumber)
})

function newNumber(prevNumbers,highestNumber){
    number = Math.round(Math.random() * highestNumber)
    if(prevNumbers[number]){
        newNumber(prevNumbers,highestNumber)
    } else {
        document.getElementById('number').innerHTML = number
        prevNumbers[number] = true
    }
}

prevNumbers = []
highestNumber = parseInt(prompt("How many numbers?"))
newNumber(prevNumbers,highestNumber)