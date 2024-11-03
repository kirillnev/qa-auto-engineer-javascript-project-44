const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

export default {
  // Описание правил игры
  rules: 'Find the greatest common divisor of given numbers.',

  // Генерация случайных чисел в качестве вопроса
  generateQuestion: () => {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    return `${num1} ${num2}`;
  },

  // Получение правильного ответа на основе функции gcd
  getCorrectAnswer: (question) => {
    const [num1, num2] = question.split(' ').map(Number);
    return gcd(num1, num2).toString();
  },
};
