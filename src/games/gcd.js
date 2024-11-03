import _ from 'lodash';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

export default {
  rules: 'Find the greatest common divisor of given numbers.',

  generateQuestion: () => {
    const num1 = _.random(1, 100);
    const num2 = _.random(1, 100);
    const question = `${num1} ${num2}`;
    const answer = gcd(num1, num2).toString();

    return { question, answer };
  },
};
