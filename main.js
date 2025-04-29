let config = {
    type: Phaser.AUTO,
    width: 1720,
    height: 900,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

// VARIABLES
let player, goal, cursors, textScore, score;

function preload() {
    this.load.image('player', 'images/gigi.png');
    this.load.image('goal', 'images/lol.png');
    this.load.image('background', 'images/background.png');
}

function create() {
    // BACKGROUND
    const background = this.add.image(0, 0, "background").setOrigin(0, 0);
    background.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    // PLAYER
    player = this.physics.add.sprite(250, 600, "player");
    player.setBounce(0);
    player.setCollideWorldBounds(true); 
    player.setScale(0.5);

    // GOAL
    goal = this.physics.add.sprite(1500, 700, "goal"); 
    goal.setScale(0.2);

    // SCORE
    score = 0;
    let style = {
        fontFamily: 'Luckiest Guy', 
        fontSize: '60px',            
        color: '#FFD700',            
        stroke: '#000000',           
        strokeThickness: 6           
    };
    textScore = this.add.text(50, 50, "Score: " + score, style);
    textScore.setShadow(2, 2, '#333333', 2, true, true); 

    // INPUT
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (cursors.left.isDown) {
        player.x -= 5;
        player.setFlipX(false);
    }
    if (cursors.right.isDown) {
        player.x += 5;
        player.setFlipX(true);
    }
    if (cursors.up.isDown) {
        player.y -= 5;
    }
    if (cursors.down.isDown) {
        player.y += 5;
    }

    this.physics.add.overlap(player, goal, WinGame);
}

function WinGame() {
    score += 100;
    textScore.setText("Score: " + score);
    goal.disableBody(true, true);
    alert("BOAT GOES BINTED!");
    console.log("GIIIII MURINNN!!");
    console.log("AutoFister TSKR: " + score);
}
