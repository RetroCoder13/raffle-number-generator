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

function update(){
    document.bgColor = "#" + RGBToHex(red,green,blue)

    if(red == 255){
        if(blue == 0){
            green++
        } else {
            blue--
        }
    }
    if(green == 255){
        if(red == 0){
            blue++
        } else {
            red--
        }
    }
    if(blue == 255){
        if(green == 0){
            red++
        } else {
            green--
        }
    }
    red = map(255,0,red)
    green = map(255,0,green)
    blue = map(255,0,blue)

    console.log(red,green,blue)

    requestAnimationFrame(update)
}

function map(highest,lowest,value){
    if(value > highest){
        value = highest
    } else if(value < lowest){
        value = lowest
    }
    return value
}

const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

var red = 255
var green = 0
var blue = 0
var prevNumbers = []
var highestNumber = parseInt(prompt("How many numbers?"))
requestAnimationFrame(update)
newNumber(prevNumbers,highestNumber)