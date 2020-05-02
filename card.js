class Card {
    constructor(params) {
        this.name = params.name
        this.image = params.image
        this.domNode = this.domNode()
        this.audioController = new AudioController();
        this.onCreate()
    }

    onCreate() {
        $('#cards').append(this.domNode)
    }

    domNode() {
        return $(`
            <div class="card"> 
                <div class="front"></div> 
                <div class="back">
                    <img src=${this.image} />
                </div>
            </div>
        `).flip()
          .on('click', this.onClick.bind(this))
    }

    onClick() {
        game.incrementClicks()
        this.audioController.flip()
        window.setTimeout(() => {
            game.deal(this)
        }, 500)
    }
}