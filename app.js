console.log('spesa')

//WHILE

const listEl = document.getElementById('list')

listEl.innerHTML = ''

const listaSpesa = ['guanciale','uova x6','pecorino','bucatini','passata pomodoro',]

let i = 0
while (i < listaSpesa.length) {
    const listItem = listaSpesa
    listEl.innerHTML = `<li>${listItem}</li>`
    i++
}

console.log(listaSpesa)
console.log(listEl)