document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        { name: 'A', img: 'A' },
        { name: 'B', img: 'B' },
        { name: 'C', img: 'C' },
        { name: 'D', img: 'D' },
        { name: 'E', img: 'E' },
        { name: 'F', img: 'F' },
        { name: 'G', img: 'G' },
        { name: 'H', img: 'H' },
        { name: 'A', img: 'A' },
        { name: 'B', img: 'B' },
        { name: 'C', img: 'C' },
        { name: 'D', img: 'D' },
        { name: 'E', img: 'E' },
        { name: 'F', img: 'F' },
        { name: 'G', img: 'G' },
        { name: 'H', img: 'H' }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('#memory-game')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('div')
            card.classList.add('card')
            card.dataset.id = i
            card.addEventListener('click', flipCard)

            const cardInner = document.createElement('div')
            cardInner.classList.add('card-inner')

            const cardFront = document.createElement('div')
            cardFront.classList.add('card-front')
            cardFront.textContent = cardArray[i].img

            const cardBack = document.createElement('div')
            cardBack.classList.add('card-back')
            cardBack.textContent = '🂠'

            cardInner.appendChild(cardFront)
            cardInner.appendChild(cardBack)
            card.appendChild(cardInner)
            grid.appendChild(card)
        }
    }

    function flipCard() {
        const cardId = this.dataset.id
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.classList.add('flipped')
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('.card')
        const [optionOneId, optionTwoId] = cardsChosenId
        if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
            cardsWon.push(cardsChosen)
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
        } else {
            cards[optionOneId].classList.remove('flipped')
            cards[optionTwoId].classList.remove('flipped')
        }
        cardsChosen = []
        cardsChosenId = []
    }

    createBoard()
})
