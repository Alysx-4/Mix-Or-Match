class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/Audio/bgmusic.mp3')
        this.flipSound=  new Audio('assets/Audio/flip.wav');
        this.matchSound= new Audio('assets/Audio/match.wav');
        this.victorySound = new Audio('assets/Audio/victory.wav');
        this.gameOverSound = new Audio('assets/Audio/gameover.wav');
        this.bgMusic.volumn = 0.5;
        this.bgMusic.loop = true;
    }
    startMusic () {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currenTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victory.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

