
'use strict';

require('mocha');

const sinon = require('sinon');
sinon.stub(require('../../lib/uuid'), 'uuid').returns('f34ebc66-93bd-4f7c-b79b-92b5569138bc');

sinon.stub(require('../../lib/math'), 'random').returns(10);

var assert = require('assert');
var lib = require('../../lib/');

const fs = require('fs');
const doctrine = require('doctrine');
const path = require('path');

var handlebars = require('handlebars').create();
var helpers = require('../..');

function lookForward(lines, funcLines, idx) {
  const funcLen = funcLines.length;
  for (let i = idx, j = 0; i < idx + funcLen; ++i, j++) {
    if (!lines[i].includes(funcLines[j])) {
      return false;
    }
  }
  return true;
}

function getCommentInfo(file, func) {
  const lines = file.split('\n');
  const funcLines = func.split('\n');
  let comment = null;
  for (let idx = 0; idx < lines.length; ++idx) {
    // from here work back until we have the comment
    if (lookForward(lines, funcLines, idx)) {
      let fromIdx = idx;
      let start = 0,
        end = 0;
      do {
        if (lines[fromIdx].includes('*/')) {
          end = fromIdx;
        } else if (lines[fromIdx].includes('/*')) {
          start = fromIdx;
        }
        if (start && end) {
          break;
        }
        fromIdx--;
      } while (fromIdx > 0);
      comment = lines.slice(start, end + 1).join('\n');
    }
  }
  if (comment == null) {
    return { description: '' };
  }
  const docs = doctrine.parse(comment, { unwrap: true });
  // some hacky fixes
  docs.description = docs.description.replace(/\n/g, ' ');
  docs.description = docs.description.replace(/[ ]{2,}/g, ' ');
  docs.description = docs.description.replace(/is is/g, 'is');
  const examples = docs.tags
    .filter(el => el.title === 'example')
    .map(el => el.description);
  const blocks = docs.description.split('```');
  if (examples.length > 0) {
    docs.example = examples.join(' ');
  }
  // hacky example fix
  if (docs.example && docs.example.includes('product')) {
    docs.example = docs.example.replace('product', 'multiply');
  }
  docs.description = blocks[0].trim();
  return docs;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

describe('examples', function() {
  for (const key in lib) {
    helpers[key]({ handlebars });

    const group = lib[key];

    const fileContent = fs.readFileSync(require.resolve(path.join('../../lib/', key)), 'utf8');

    describe(key, function() {
      for (const func in group) {
        const { example } = getCommentInfo(fileContent, lib[key][func].toString());

        example && it(func, function() {
          let [hbs, expectedResult] = example.split('->').map(x => x.trim());

          const context = {
            double: i => i * 2,
            isString: (x) => typeof(x) === 'string'
          };

          const arrays = hbs.match(/\[[^/\]]+\]/);
          arrays && arrays.forEach((arrayString, i) => {
            hbs = hbs.replace(new RegExp(escapeRegExp(arrayString)), `array${i}`);
            context[`array${i}`] = JSON.parse(arrayString.replace(/\'/g, '"'));
          });

          if (expectedResult === undefined) {
            // The function has no return value
            return;
          }

          let result = handlebars.compile(hbs)(context);
          // Trim 's
          expectedResult = expectedResult.replace(/^\'|\'$/g, '');
          try {
            let parsedExpected;
            if (
              Array.isArray((parsedExpected = JSON.parse(expectedResult.replace(/\'/g, '"'))))
            ) {
              expectedResult = parsedExpected.join(',');
            }
          } catch (e) {
            // Nothing to parse
          }
          result = result.replace(/&amp;nbsp;/g, ' ');
          assert.equal(result, expectedResult);
        });
      }
    });
  }
});
