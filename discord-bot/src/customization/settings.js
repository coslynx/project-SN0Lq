const settings = {
  gameSettings: {
    timers: {
      default: 30,
      custom: {
        trivia: 20,
        wordGames: 40,
        cardGames: 60
      }
    },
    difficultyLevels: ['easy', 'medium', 'hard'],
    categories: ['general', 'sports', 'science', 'history']
  },
  userSettings: {
    avatars: ['avatar1.png', 'avatar2.png', 'avatar3.png'],
    themes: ['theme1.css', 'theme2.css', 'theme3.css']
  }
};

module.exports = settings;