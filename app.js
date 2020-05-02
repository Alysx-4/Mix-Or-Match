const game = new MixOrMatch(100);

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startMusic();
            game.startGame();
        });
    });

    duplicatedCards = cards.slice()
    cardsArray = cards.concat(duplicatedCards)

    shuffle(cardsArray).forEach((card) => new Card(card))
}

window.onload = () => {
    console.log('DOM loaded');
    ready();
}

 function shuffle (array) {
	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

