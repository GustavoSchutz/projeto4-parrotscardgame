const cardsAmmount = prompt('Escolha entre 4 a 14 cartas.')

const baralho = [
    {
        "<div class="carta" data-framework="nuvem">
            <span class="material-icons azul cloud">cloud</span>
            <img class="verso" src="./images/verso.png" alt="">
        </div>"
    }
]

const cards = document.querySelectorAll('.carta');

console.log(baralho[0])


let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        // primeiro clique
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // segundo clique
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();
    }

}   


function checkForMatch() {
    // são iguais?
    if (firstCard.dataset.framework ===
        secondCard.dataset.framework) {
        disableCards();
    } else {
        unflipCards();    
    }
}
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

}, 1300);
}

cards.forEach(card => card.addEventListener('click', flipCard))
