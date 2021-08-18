document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name:'eagle',
            img: 'images/eagle-img.jpeg'
        },
        {
            name:'eagle',
            img: 'images/eagle-img.jpeg'
        },
        {
            name:'elephant',
            img: 'images/elephant-img.jpeg'
        },
        {
            name:'elephant',
            img: 'images/elephant-img.jpeg'
        },
        {
            name:'lion',
            img: 'images/lion-img.jpeg'
        },
        {
            name:'lion',
            img: 'images/lion-img.jpeg'
        },
        {
            name:'monkey',
            img: 'images/monkey-img.jpeg'
        },
        {
            name:'monkey',
            img: 'images/monkey-img.jpeg'
        },
        {
            name:'toucan',
            img: 'images/toucan-img.jpeg'
        },
        {
            name:'toucan',
            img: 'images/toucan-img.jpeg'
        },
        {
            name:'whales',
            img: 'images/whales-img.jpeg'
        },
        {
            name:'whales',
            img: 'images/whales-img.jpeg'
        },
    ]
    //Randomize cards in grid
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src','images/wallpaper.jpeg')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/blank.jpeg')
            cards[optionTwoId].setAttribute('src', 'images/blank.jpeg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/wallpaper.jpeg')
            cards[optionTwoId].setAttribute('src', 'images/wallpaper.jpeg')
            alert('Sorry, try again.')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }




    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})