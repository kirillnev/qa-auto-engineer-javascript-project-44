import _ from 'lodash';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export default {
  rules: 'What is the result of the expression?',

  generateQuestion: () => {
    const a = _.random(100);
    const b = _.random(100);
    const operation = Object.keys(operations)[_.random(2)];

    if (!operations[operation]) {
      throw new Error('Invalid operation');
    }

    const question = `${a} ${operation} ${b}`;
    const answer = operations[operation](a, b).toString();

    return { question, answer };
  },
};
