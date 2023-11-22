const peoplesJSON = `
[
    {
        "name": "Nezuko",
        "age": 15,
        "image": "images/nezuko.jpg"
    },
    {
        "name": "Tanjiro",
        "age": 16,
        "image": "images/tanjiro.jpg"
    },
    {
        "name": "Tamioka",
        "age": 19,
        "image": "images/tamioka.jpg"
    },
    {
        "name": "Daki",
        "age": 13,
        "image": "images/daki.jpg"
    },
    {
        "name": "Muzan",
        "age": 20,
        "image": "images/muzan.jpg"
    },
    {
        "name": "Akaza",
        "age": 11,
        "image": "images/akaza.jpg"
    }
]
`;

const peoples = JSON.parse(peoplesJSON)
const peoplesContainer = document.querySelector('.peoples')

peoples.forEach(person => {
    const card = document.createElement('div')
    card.classList.add('card')

    const nameElement = document.createElement('p')
    nameElement.textContent =`Name: ${person.name}`

    const ageElement = document.createElement('p')
    ageElement.textContent = `Age: ${person.age}`

    const imageElement = document.createElement('img')
    imageElement.src = person.image
    imageElement.alt = `${person.name}'s photo`

    card.appendChild(nameElement)
    card.appendChild(ageElement)
    card.appendChild(imageElement)

    peoplesContainer.appendChild(card)
})


document.addEventListener('DOMContentLoaded', function () {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'data.json', true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var peoples = JSON.parse(xhr.responseText)
            console.log(peoples)
        }
    }
    xhr.send()
})