const getRandomString = () => (Math.random() + 1).toString(36).substring(7);
const getRandomFromList = list => list[Math.floor(Math.random() * list.length)];
const getNextFromList = (list, current) => {
  const currentIndex = list.indexOf(current);
  const nextIndex = (currentIndex + 1) % list.length;
  return list[nextIndex];
};

export {getRandomString, getRandomFromList, getNextFromList};
