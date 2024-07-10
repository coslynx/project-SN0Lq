const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');
const express = require('express');
const moment = require('moment');

// Importing other modules
const trivia = require('./games/trivia');
const wordGames = require('./games/word_games');
const cardGames = require('./games/card_games');
const settings = require('./customization/settings');
const personalization = require('./customization/personalization');
const topScores = require('./leaderboard/top_scores');
const userStats = require('./leaderboard/user_stats');
const teamPlay = require('./multiplayer/team_play');
const challenges = require('./multiplayer/challenges');
const tournaments = require('./multiplayer/tournaments');
const interactiveCommands = require('./commands/interactive_commands');
const helpCommands = require('./commands/help_commands');
const design = require('./interface/design');
const discordIntegration = require('./interface/discord_integration');
const voiceIntegration = require('./enhancements/voice_integration');
const achievementsRewards = require('./enhancements/achievements_rewards');
const scheduledEvents = require('./enhancements/scheduled_events');
const crossPlatformCompatibility = require('./enhancements/cross_platform_compatibility');

// Discord bot token
const token = 'YOUR_DISCORD_BOT_TOKEN';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(token);

// Discord bot commands
client.on('message', message => {
  if (message.content === '!start trivia') {
    trivia.startGame(message);
  } else if (message.content === '!join trivia') {
    trivia.joinGame(message);
  } else if (message.content === '!start word game') {
    wordGames.startGame(message);
  } else if (message.content === '!join word game') {
    wordGames.joinGame(message);
  } else if (message.content === '!start card game') {
    cardGames.startGame(message);
  } else if (message.content === '!join card game') {
    cardGames.joinGame(message);
  } else if (message.content === '!set timer') {
    settings.setTimer(message);
  } else if (message.content === '!set difficulty') {
    settings.setDifficulty(message);
  } else if (message.content === '!set category') {
    settings.setCategory(message);
  } else if (message.content === '!set avatar') {
    personalization.setAvatar(message);
  } else if (message.content === '!set theme') {
    personalization.setTheme(message);
  } else if (message.content === '!top scores') {
    topScores.displayTopScores(message);
  } else if (message.content === '!user stats') {
    userStats.displayUserStats(message);
  } else if (message.content === '!team play') {
    teamPlay.startTeamPlay(message);
  } else if (message.content === '!challenge') {
    challenges.startChallenge(message);
  } else if (message.content === '!start tournament') {
    tournaments.startTournament(message);
  } else if (message.content === '!help') {
    interactiveCommands.displayHelp(message);
  } else if (message.content === '!design') {
    design.showDesign(message);
  } else if (message.content === '!voice integration') {
    voiceIntegration.enableVoiceIntegration(message);
  } else if (message.content === '!achievements') {
    achievementsRewards.displayAchievements(message);
  } else if (message.content === '!schedule event') {
    scheduledEvents.scheduleEvent(message);
  } else if (message.content === '!platform compatibility') {
    crossPlatformCompatibility.checkCompatibility(message);
  }
});

// Express web server for handling API requests
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});