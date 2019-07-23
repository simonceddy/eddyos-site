import { split, lowerCase } from 'lodash/string';

function inputString(input) {
  const segments = split(input, ' ');

  let isSudo = false;

  if (segments.length < 1) {
    console.error('somehow accepted empty string');
  }

  let name = lowerCase(segments.shift(segments));

  if (name === 'sudo') {
    isSudo = true;
    name = segments.length >= 1 ? lowerCase(segments.shift(segments)) : null;
  }

  const processedInput = {
    unmodified: input,
    name,
    segments: segments.length < 1 ? null : segments,
    isSudo
  };

  return processedInput;
}

export default inputString;
