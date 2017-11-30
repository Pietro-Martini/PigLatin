const _moveNCharsToEndOfStr = n => str => str.slice(n) + str.slice(0, n);

const _appendStr = strToAppend => strToAppendTo => `${strToAppendTo}${strToAppend}`;

const pigIt = str => str.split(' ').reduce((str, substring) => {
   let _move1CharToEndOfStr = _moveNCharsToEndOfStr(1),
       _appendAyToEndOfStr = _appendStr('ay');

   str += _appendAyToEndOfStr(_move1CharToEndOfStr(substring)) + ' ';
   return str;
}, '').slice(0, -1);
