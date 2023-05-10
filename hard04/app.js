function changeStr (line){
  if(typeof(line) !== "string") return alert('не строка!')
  const str = line.trim('')
  if(str.length > 30) return str.slice(0,30) + '...'
  return str
}

console.log(changeStr(111));