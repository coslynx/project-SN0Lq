const Discord = require('discord.js');
const axios = require('axios');

const client = new Discord.Client();

const triviaCategories = [
  'General Knowledge',
  'Books',
  'Film',
  'Music',
  'Musicals & Theatres',
  'Television',
  'Video Games',
  'Board Games',
  'Science & Nature',
  'Computers',
  'Mathematics',
  'Mythology',
  'Sports',
  'Geography',
  'History',
  'Politics',
  'Art',
  'Celebrities',
  'Animals',
  'Vehicles',
  'Comics',
  'Gadgets',
  'Japanese Anime & Manga',
  'Cartoon & Animations'
];

client.on('message', async message => {
  if (message.content === '!start trivia') {
    try {
      const category = triviaCategories[Math.floor(Math.random() * triviaCategories.length)];
      const { data } = await axios.get(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=medium&type=multiple`);
      
      const question = data.results[0].question;
      const correctAnswer = data.results[0].correct_answer;
      const incorrectAnswers = data.results[0].incorrect_answers;

      const answers = [...incorrectAnswers, correctAnswer];
      answers.sort(() => Math.random() - 0.5);

      const triviaEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Trivia Game')
        .setDescription(question)
        .addFields(
          { name: 'Options:', value: answers.join('\n') }
        );

      message.channel.send(triviaEmbed);

      const filter = response => {
        return answers.includes(response.content) && response.author.id === message.author.id;
      };

      const userResponse = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
      const userAnswer = userResponse.first().content;

      if (userAnswer === correctAnswer) {
        message.channel.send('Correct answer! You earn a point.');
        // Implement score tracking logic here
      } else {
        message.channel.send(`Incorrect answer. The correct answer is: ${correctAnswer}`);
      }
    } catch (error) {
      console.error('Error fetching trivia question:', error);
      message.channel.send('An error occurred while fetching the trivia question. Please try again later.');
    }
  }
});

client.login('YOUR_DISCORD_BOT_TOKEN');