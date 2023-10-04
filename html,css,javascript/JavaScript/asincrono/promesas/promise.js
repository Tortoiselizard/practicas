function saludar() {
    console.log('hola')
}

function despedir() {
    console.log('adios')
}

function esperarParaSaludar() {
    const promise = new Promise((resolve, reject) => {
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

console.log('empezando el código')
esperarParaSaludar().then(data => console.log(data)) 
console.log('terminando el código')