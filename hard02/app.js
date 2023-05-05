const num = 266219 
const numArrStr = String(num).split('')
const numArr = numArrStr.map(item => Number(item))
const numSum = numArr.reduce((acc,item) => acc += item ** 3)
const numStr = String(numSum).slice(0,2)
console.log(numStr);



