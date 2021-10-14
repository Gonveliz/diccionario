const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'



const form = document.getElementById('form')
const definicion = document.getElementById('definition')

form.addEventListener('submit', async (event) => {

    event.preventDefault()

    const ul = document.createElement('ul')
    const input = document.getElementById('search').value.toLowerCase()
    const palabraEscritura = document.getElementById('search').value.toUpperCase()

    let data = []

    if(input){
        let response = await fetch(`${URL}${input}`)
        let names = await response.json()
        data = names[0].meanings[0].definitions[0].definition
    }

    definition.innerHTML += `<li>${palabraEscritura} : ${data}</li>`
    
})

