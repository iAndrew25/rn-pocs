const randomTokensList = Array(10)
  .fill()
  .map((_, i) => i + 1);

const getRandomString = () => (Math.random() + 1).toString(36).substring(7);
const getRandomFromList = list => list[Math.floor(Math.random() * list.length)];
const getNextFromList = (list, current) => {
  const currentIndex = list.indexOf(current);
  const nextIndex = (currentIndex + 1) % list.length;
  return list[nextIndex];
};
const getRandomTokens = (count = 5) =>
  Array(count)
    .fill()
    .map(() => getRandomFromList(randomTokensList));
const getIncrementingNumber = () => {
  let i = 0;
  return ({shouldReset} = {}) => (shouldReset ? ((i = 0), i) : i++);
};

export {
  getRandomString,
  getRandomFromList,
  getNextFromList,
  getRandomTokens,
  getIncrementingNumber,
};
