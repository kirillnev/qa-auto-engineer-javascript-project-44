import readlineSync from 'readline-sync';

const MAX_ROUNDS = 3;

export default (game) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(game.rules);

  for (let round = 0; round < MAX_ROUNDS; round += 1) {
    const question = game.generateQuestion();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = game.getCorrectAnswer(question);

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
