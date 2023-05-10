
const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}
function asking (screenPrice){
while(!isNumber(screenPrice)){
     screenPrice = prompt('Сколько это будет стоить')
    
}
}
asking()