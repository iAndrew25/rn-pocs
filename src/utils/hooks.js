import {useRef} from 'react';

const useCountRenders = componentName => {
  const renders = useRef(0);
  console.log(`${++renders.current}::${componentName}`);

  return renders.current;
};

export {useCountRenders};
