const wordGames = {
  availableGames: ['Hangman', 'Word Search', 'Anagrams'],

  startGame: function(gameType, players) {
    if (this.availableGames.includes(gameType)) {
      switch (gameType) {
        case 'Hangman':
          this.startHangmanGame(players);
          break;
        case 'Word Search':
          this.startWordSearchGame(players);
          break;
        case 'Anagrams':
          this.startAnagramsGame(players);
          break;
        default:
          console.log('Invalid game type');
      }
    } else {
      console.log('Game type not available');
    }
  },

  startHangmanGame: function(players) {
    // Logic for starting a Hangman game
  },

  startWordSearchGame: function(players) {
    // Logic for starting a Word Search game
  },

  startAnagramsGame: function(players) {
    // Logic for starting an Anagrams game
  },

  joinGame: function(gameType, player) {
    if (this.availableGames.includes(gameType)) {
      switch (gameType) {
        case 'Hangman':
          this.joinHangmanGame(player);
          break;
        case 'Word Search':
          this.joinWordSearchGame(player);
          break;
        case 'Anagrams':
          this.joinAnagramsGame(player);
          break;
        default:
          console.log('Invalid game type');
      }
    } else {
      console.log('Game type not available');
    }
  },

  joinHangmanGame: function(player) {
    // Logic for a player joining a Hangman game
  },

  joinWordSearchGame: function(player) {
    // Logic for a player joining a Word Search game
  },

  joinAnagramsGame: function(player) {
    // Logic for a player joining an Anagrams game
  },

  updateScore: function(player, score) {
    // Logic for updating player's score
  }
};

module.exports = wordGames;