import _ from 'lodash';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default {
  // Описание правил игры
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',

  // Генерация случайного вопроса и правильного ответа
  generateQuestion: () => {
    const number = _.random(100);
    const question = number.toString();
    const answer = isPrime(number) ? 'yes' : 'no';

    return { question, answer };
  },
};
