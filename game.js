// Create our only scene called mainScene, in the game.js file
class mainScene {
    // The three methods currently empty
  
  preload() {
    // This method is called once at the beginning
    // It will load all the assets, like sprites and sounds  
    this.load.image('player', 'player.png');
    this.load.image('coin', 'coin.png');
    // Parameters: x position, y position, name of the sprite
  }
  create() {
    this.arrow = this.input.keyboard.createCursorKeys();
    // Store the score in a variable, initialized at 0
    // The style of the text 
    this.score = -10;
    // A lot of options are available, these are the most important ones
    let style = { font: '20px Arial', fill: '#fff' };
    // Display the score in the top left corner
    // Parameters: x position, y position, text, style
    this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style);
    // This method is called once, just after preload()
    // It will initialize our scene, like the positions of the sprites
    this.player = this.physics.add.sprite(100, 100, 'coin');
    this.coin = this.physics.add.sprite(30, 60, 'player');
    // Store the score in a variable, initialized at 0
    
    // Добавление столкновений с границами мира
    this.physics.world.collide(this.player, this.physics.world.bounds, this.restartGame, null, this);

  }
  hit() {
    // Change the position x and y of the coin randomly
    this.coin.x = Phaser.Math.Between(0, 1850);
    this.coin.y = Phaser.Math.Between(0, 900);   
    // Increment the score by 10
    this.score += 10;  
    // Create a new tween 
    this.tweens.add({
      targets: this.player, // on the player 
      duration: 200, // for 200ms 
      scaleX: 1.2, // that scale vertically by 20% 
      scaleY: 1.2, // and scale horizontally by 20% 
      yoyo: true, // at the end, go back to original scale 
    });
    // Display the updated score on the screen
    this.scoreText.setText('score: ' + this.score);
  }
  restartGame() 
  {
  // Сброс позиции игрока
  this.player.x = 100;
  this.player.y = 100;
  // Сброс счета
  this.score = 0;
  // Обновление текста счета
  this.scoreText.setText('score: ' + this.score);
  // Перезапуск игры
  this.scene.restart();
  }
  update()
  {
    // If the player is overlapping with the coin
    if (this.physics.overlap(this.player, this.coin)) {
      // Call the new hit() method
      this.hit();
    }
    // Handle horizontal movements
    if (this.arrow.right.isDown) {
      // If the right arrow is pressed, move to the right
      this.player.x += 3;
      this.player.angle = 350;
    }else if (this.arrow.left.isDown) {
      // If the left arrow is pressed, move to the left
      this.player.x -= 3;
      this.player.angle = 10;
    } 
    // Do the same for vertical movements
    if (this.arrow.down.isDown) {
      this.player.y += 3;
      this.player.angle = 180;
    }else if (this.arrow.up.isDown) {
      this.player.y -= 3;
      this.player.angle = 0;
    }     
    // This method is called 60 times per second after create() 
    // It will handle all the game's logic, like movements
  }
}
  new Phaser.Game({
    width: 1920, // Ширина игры теперь занимает всю доступную ширину экрана
    height: 935, // Высота игры теперь занимает всю доступную высоту экрана
    backgroundColor: '#3498db', // Цвет фона
    scene: mainScene, // Сцена
    physics: { default: 'arcade' }, // Физическая система
    parent: 'game', // Элемент, в котором создается игра
   });



