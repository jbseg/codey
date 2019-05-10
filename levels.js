class Level1 extends Level {
  constructor() {
    super('Level1')
    this.heights = [4, 7, 5, null, 5, 4, null, 4, 4];
    this.weather = 'afternoon';
  }
  load_theme_music(){
    this.load.audio("main_theme", "/sounds/main_theme.mp3");
  }
  play_theme_music(){
    gameState.music = this.sound.add('main_theme');
    gameState.music.play();
  }
}

class Level2 extends Level {
  constructor() {
    super('Level2')
    this.heights = [5, 4, null, 4, 6, 4, 6, 5, 5];
    this.weather = 'twilight';
  }
  load_theme_music(){

  }
  play_theme_music(){
    gameState.music.resume();
  }
}

class Level3 extends Level {
  constructor() {
    super('Level3')
    this.heights = [6, null, 6, 4, 6, 4, 5, null, 4];
    this.weather = 'night';
  }
  load_theme_music(){

  }
  play_theme_music(){
    gameState.music.resume();
  }
}

class Level4 extends Level {
  constructor() {
    super('Level4')
    this.heights = [4, null, 3, 6, null, 6, null, 5, 4];
    this.weather = 'morning';
  }
  load_theme_music(){
    this.load.audio("final_theme", "/sounds/final_theme.mp3");
  }
  play_theme_music(){
    gameState.music = this.sound.add('final_theme');
    gameState.music.play();
  }
}
