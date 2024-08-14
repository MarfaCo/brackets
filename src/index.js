module.exports = function check(str, bracketsConfig) {
  // your solution

  let arrStr = str.split('');
  let openBrackets = [];
  let closingBrackets = [];
  let bracketSame = [];
  let item;

  bracketsConfig.forEach( (bracket) => {
    if ( bracket[0] === bracket[1] ) {
      bracketSame.push( bracket[0] );
    } else {
      openBrackets.push( bracket[0] );
      closingBrackets.push( bracket[1] );
    }
  })

  for ( let i = 0 ; i < arrStr.length ; i++ ) {
    item = arrStr[i];

    if ( bracketSame.includes( item ) && arrStr[i] === arrStr[i + 1] ) {
      arrStr.splice( i, 2 );
      i = -1;
    } else if ( openBrackets.includes( item ) ) {
        if ( closingBrackets[openBrackets.indexOf( item )] === arrStr[i + 1] ) {
        arrStr.splice( i, 2 );
        i = -1;
      }
    }
  }

    if ( arrStr.length === 0 ) return true;
    else return false;
  }