const achievements_rewards = {
  achievements: [],
  rewards: {
    badges: [],
    points: 0,
    inGameCurrency: 0
  },
  
  addAchievement: function(name, description, points) {
    this.achievements.push({ name, description, points });
  },
  
  addBadge: function(name, image) {
    this.rewards.badges.push({ name, image });
  },
  
  updatePoints: function(points) {
    this.rewards.points += points;
  },
  
  updateInGameCurrency: function(amount) {
    this.rewards.inGameCurrency += amount;
  },
  
  getAchievements: function() {
    return this.achievements;
  },
  
  getRewards: function() {
    return this.rewards;
  }
};

module.exports = achievements_rewards;