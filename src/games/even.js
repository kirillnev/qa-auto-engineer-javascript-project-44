import _ from 'lodash';

const isEven = (number) => number % 2 === 0;

export default {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',

  generateQuestion: () => {
    const question = _.random(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';

    return { question, answer };
  },
};
