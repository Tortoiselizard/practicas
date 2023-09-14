console.log('Iniciando')

const parrafo = document.querySelector('.text')
const alturaParrafo = parrafo.clientHeight
const alturaLinea = getComputedStyle(parrafo).lineHeight
console.log('alturaLinea:', parseInt(alturaLinea))