var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'gameDiv');

// Add States here
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('frenzy', frenzyState);
game.state.add('play', playState);
game.state.add('gameData', gameData);

// game.state.add('frenzy', frenzyState);
// game.state.add('gameOver', gameOverState);

// Start the game
game.state.start('boot');
