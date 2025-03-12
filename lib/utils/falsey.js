'use strict';

function falsey(val, keywords) {
  if (!val) return true;
  let words = keywords || falsey.keywords;
  if (!Array.isArray(words)) words = [words];
  const lower = typeof val === 'string' ? val.toLowerCase() : null;
  for (const word of words) {
    if (word === val) {
      return true;
    }
    if (word === lower) {
      return true;
    }
  }
  return false;
}

falsey.keywords = [
  '0',
  'false',
  'nada',
  'nil',
  'nay',
  'nah',
  'negative',
  'no',
  'none',
  'nope',
  'nul',
  'null',
  'nix',
  'nyet',
  'uh-uh',
  'veto',
  'zero'
];

module.exports = falsey;
