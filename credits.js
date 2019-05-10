class Credits extends Phaser.Scene {
  constructor() {
    super({ key: 'Credits' })
  }

  preload() {
    //game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    this.load.spritesheet('codey_sled', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Codey+Tundra/codey_sled.png', { frameWidth: 81, frameHeight: 90 });
    this.load.audio("credits_theme", "/sounds/credits_theme.mp3");
  }

  create() {
    // this.input.addDownCallback(function() {
    //
    //     if (game.sound.context.state === 'suspended') {
    //       game.sound.context.resume();
    //     }
    // });
    if (game.sound.context.state === 'suspended') {
      game.sound.context.resume();
    }
    gameState.music = this.sound.add('credits_theme');
    gameState.music.loop = true;
    gameState.music.play();

    gameState.player = this.add.sprite(config.width / 2, config.height / 2, 'codey_sled');

    this.anims.create({
      key: 'sled',
      frames: this.anims.generateFrameNumbers('codey_sled'),
      frameRate: 10,
      repeat: -1
    })
    this.add.text(350, 150, "Thanks for Playing", { font: 'bold 50pt Sofia', fill: '#b39c0e', align: 'center'});
    this.add.text(400, 450, "Click to Restart", { font: 'bold 50pt Sofia', fill: '#b39c0e', align: 'center'});
    gameState.player.angle = 20;

    this.input.on('pointerup', () => {
      this.cameras.main.fade(800, 0, 0, 0, false, function(camera, progress) {
        if (progress > .9) {
          this.scene.stop('Credits');
          this.scene.start('Level1');
          gameState.music.pause();
        }
      });
  	})

  }
  update() {
    gameState.player.anims.play('sled', true);
  }
}
