const isEven = (number) => number % 2 === 0;

export default {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',

  generateQuestion: () => Math.floor(Math.random() * 100),

  getCorrectAnswer: (question) => (isEven(question) ? 'yes' : 'no'),
};
