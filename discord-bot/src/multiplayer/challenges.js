import { TeamPlay } from './team_play.js';
import { Tournaments } from './tournaments.js';

class Challenges {
  constructor() {
    this.teamPlay = new TeamPlay();
    this.tournaments = new Tournaments();
  }

  startChallenge(user1, user2, gameType) {
    if (gameType === 'team') {
      return this.teamPlay.startTeamChallenge(user1, user2);
    } else if (gameType === 'tournament') {
      return this.tournaments.startTournamentChallenge(user1, user2);
    } else {
      throw new Error('Invalid game type for challenge');
    }
  }

  endChallenge(user1, user2, gameType) {
    if (gameType === 'team') {
      return this.teamPlay.endTeamChallenge(user1, user2);
    } else if (gameType === 'tournament') {
      return this.tournaments.endTournamentChallenge(user1, user2);
    } else {
      throw new Error('Invalid game type for challenge');
    }
  }
}

export { Challenges };