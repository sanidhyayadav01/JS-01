//++++++++++++++++++++++++Playing with strings++++++++++++++++++++++++++++++++++

const name = "Sanidhya "
const repoCount = 26

console.log(name + repoCount)
console.log(`Hello ,my name is ${name} and my repoCount is ${repoCount}`)


const gameName = new String('Sanidhya-aaa-aa')
console.log(gameName[0])
console.log(gameName.toUpperCase())
console.log(gameName.charAt(6))
console.log(gameName.length)
console.log(gameName.indexOf('aa'))
console.log(gameName.substring(0,8))
console.log(gameName.__proto__)
console.log(gameName.slice(-15,8))
console.log(gameName.split('-'))

const newStringOne = "   sanidhya    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://sunny5626/downloads%20/yadav"
console.log(url.replace('%20','-'))
console.log(url.includes('yadav'))


