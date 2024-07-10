const cardGames = {
  games: ["Poker", "Blackjack", "Solitaire"],
  startGame: function(game) {
    if (this.games.includes(game)) {
      console.log(`Starting ${game} game...`);
    } else {
      console.log("Invalid game selection.");
    }
  },
  joinGame: function(game) {
    console.log(`Joining ${game} game...`);
  },
  trackScores: function() {
    console.log("Tracking scores...");
  }
};

module.exports = cardGames;