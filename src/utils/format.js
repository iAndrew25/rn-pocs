const toTitleCase = string => {
  if (typeof string !== 'string') {
    return '';
  }

  return string
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export {toTitleCase};
