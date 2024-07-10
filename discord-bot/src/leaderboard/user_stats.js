const UserStats = {
  users: {},

  addUser: function(userId) {
    if (!this.users[userId]) {
      this.users[userId] = {
        totalScore: 0,
        gamesPlayed: 0,
        gamesWon: 0,
        gamesLost: 0
      };
    }
  },

  updateUserStats: function(userId, score, gameResult) {
    if (this.users[userId]) {
      this.users[userId].totalScore += score;
      this.users[userId].gamesPlayed++;

      if (gameResult === 'win') {
        this.users[userId].gamesWon++;
      } else if (gameResult === 'lose') {
        this.users[userId].gamesLost++;
      }
    }
  },

  getUserStats: function(userId) {
    return this.users[userId];
  },

  getTopPlayers: function() {
    const sortedPlayers = Object.keys(this.users).sort((a, b) => {
      return this.users[b].totalScore - this.users[a].totalScore;
    });

    return sortedPlayers.slice(0, 10).map(playerId => {
      return {
        userId: playerId,
        totalScore: this.users[playerId].totalScore
      };
    });
  }
};

module.exports = UserStats;