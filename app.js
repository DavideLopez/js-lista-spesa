// console.log('spesa')

//WHILE

const listEl = document.getElementById('list')

listEl.innerHTML = ''

const listaSpesa = ['guanciale','pecorino romano','bucatini','passata pomodoro',]

let i = 0
while (i < listaSpesa.length) {
    const listItem = listaSpesa[i]
    console.log(listItem)
    listEl.innerHTML += `<li>${listItem}</li>`
    i++
}


console.log(listEl)


//FOR

const list2El = document.getElementById('list2')

list2El.innerHTML = '';

const listaSpesa2 = ['guanciale', 'pecorino romano', 'uovax6', 'spaghetti', 'pepe nero', ]

for (let i = 0; i < listaSpesa2.length; i++ ) {
    const listItem2 = listaSpesa2[i]
    list2El.innerHTML += `<li>${listItem2}</li>`
}