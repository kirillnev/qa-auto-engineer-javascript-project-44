import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const playEvenGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

  const roundsToWin = 3;
  let correctAnswersCount = 0;

  while (correctAnswersCount < roundsToWin) {
    const randomNumber = Math.floor(Math.random() * 100);

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    correctAnswersCount += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playEvenGame;
