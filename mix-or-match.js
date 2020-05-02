class MixOrMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
        this.totalClicks = 0;
        //this.pictures = ['chichen-itza']
    }
    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        
    }
    
    getPictureSrc(pictureIndex) {
        return `./assets/images/${this.pictures[pictureIndex]}.jpg`
    }

    displayPicture(card, pictureIndex) {
        console.log(pictureIndex, card);
        const picture = (document.createElement('img'))
        picture.src = this.getPictureSrc(pictureIndex)
        console.log(picture);
        card.appendChild(picture)
    }

    incrementClicks() {
        this.totalClicks++;
        this.ticker.innerText = this.totalClicks;
    }

    // flipCard(card) {
    //     //console.log(card)
    //     if(this.canFlipCard(card)) {
    //         this.audioController.flip();

    //         this.displayPicture(card, 0);
    //         //card.classList.add('visible');
    //     }
    // }

    // shuffleCards () {
    //     for(let i = this.cardsArray.length -1; i > 0; i--) {
    //         let randomIndex = Math.floor(Math.random()*(i+1));
    //     }
    // }
    // canFlipCard(card) {
    //     return true;
    // }

    deal(card) {
        if(!this.searchedCard) {
            this.searchedCard = card
        } else {
            if(this.searchedCard.name === card.name) {

            } else {
                card.domNode.flip(false)
                this.searchedCard.domNode.flip(false)
            }
            this.searchedCard = null
        }
     }
}