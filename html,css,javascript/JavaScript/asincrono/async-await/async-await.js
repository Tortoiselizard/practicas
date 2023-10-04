function saludar() {
    console.log('hola')
}

function despedir() {
    console.log('adios')
}

async function esperarParaSaludar() {
    const promise = await new Promise((resolve, reject) => {
        const exito = true
        if (exito) {
            saludar()
            resolve('promesa completada exitosamente')
        } else {
            despedir()
            reject('promesa rechazada')
        }
    })
    return promise
}

async function esperar() {
    const miPromise = await esperarParaSaludar()
    console.log(miPromise)
}

console.log('empezando el código...')
esperar()
console.log('terminando el código.')