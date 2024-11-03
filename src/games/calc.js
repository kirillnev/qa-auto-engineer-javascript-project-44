const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const parseQuestion = (question) => {
  const [strA, operation, strB] = question.split(' ');
  const a = Number(strA);
  const b = Number(strB);
  const calculate = operations[operation];

  return { a, b, calculate };
};

export default {
  rules: 'What is the result of the expression?',

  generateQuestion: () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operation = Object.keys(operations)[Math.floor(Math.random() * 3)];

    return `${num1} ${operation} ${num2}`;
  },

  getCorrectAnswer: (question) => {
    const { a, b, calculate } = parseQuestion(question);
    if (!calculate) {
      throw new Error('Invalid operation');
    }
    return calculate(a, b).toString();
  },
};
