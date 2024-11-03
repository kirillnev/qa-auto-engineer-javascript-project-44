import _ from 'lodash';

const MIN_LENGTH = 5;
const MAX_LENGTH = 15;
const MAX_START = 20;
const MAX_STEP = 10;

const generateProgression = (start, step, length) => {
  // ai = start + (i - 1) step
  const progression = new Array(length);

  for (let i = 0; i < length; i += 1) {
    progression[i] = start + (i) * step;
  }

  return progression;
};

export default {
  rules: 'What number is missing in the progression?',

  generateQuestion: () => {
    const start = _.random(MAX_START);
    const step = _.random(MAX_STEP);
    const length = _.random(MIN_LENGTH, MAX_LENGTH);
    const progression = generateProgression(start, step, length);
    const randomI = _.random(length - 1);
    const answer = progression[randomI].toString();
    const question = [...progression.slice(0, randomI), '..', ...progression.slice(randomI + 1)].join(' ');

    return { question, answer };
  },
};
