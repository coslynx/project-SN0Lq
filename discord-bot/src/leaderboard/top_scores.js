const topScores = {
  gameScores: {},
  
  addScore: function(userId, game, score) {
    if (!this.gameScores[game]) {
      this.gameScores[game] = {};
    }
    if (!this.gameScores[game][userId]) {
      this.gameScores[game][userId] = 0;
    }
    this.gameScores[game][userId] += score;
  },
  
  getTopScores: function(game, limit) {
    if (this.gameScores[game]) {
      const scoresArray = Object.entries(this.gameScores[game]);
      const sortedScores = scoresArray.sort((a, b) => b[1] - a[1]);
      return sortedScores.slice(0, limit);
    } else {
      return [];
    }
  },
  
  getUserScore: function(userId, game) {
    if (this.gameScores[game] && this.gameScores[game][userId]) {
      return this.gameScores[game][userId];
    } else {
      return 0;
    }
  },
  
  resetScores: function() {
    this.gameScores = {};
  }
};

module.exports = topScores;