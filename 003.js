/**

  Diberikan sebuah function countMe yang menerima sebuah parameter array of string.
  Function ini akan me-return object literal dimana isi dari object tersebut berisi
  jumlah karakter pada array of string

  Contoh:
  input: [ 'dimitri', 'awtian', 'icha' ]
  output:
    {
      d: 1,
      i: 5,
      m: 1,
      t: 2,
      r: 1,
      a: 3,
      w: 1,
      n: 1,
      c: 1,
      h: 1
    }
**/

function countMe(names) {
  var object = {};
  var kata = '';
  for (var i = 0; i <= names.length - 1; i++) {
    kata = kata + names[i]; 
  }

  console.log(kata)

  for (var j = 0; j <= kata.length - 1; j++) {
    if (object[kata[j]] === undefined) {
      object[kata[j]] = 0;
    }
  }

  for (var keys in object) {
    var angka = 0;
    for (var i = 0; i <= kata.length - 1; i++) {
      if (kata[i] === keys) {
        angka++;
      }
    }
    object[keys] = angka;
  }
  return object;

  //your code here
}

console.log(countMe([ 'dimitri', 'awtian', 'icha' ]));
//{
//   d: 1,
//   i: 5,
//   m: 1,
//   t: 2,
//   r: 1,
//   a: 3,
//   w: 1,
//   n: 1,
//   c: 1,
//   h: 1
// }

console.log(countMe([ 'dimas', 'ryan', 'akbar', 'tama']));
// {
//   d: 1,
//   i: 1.
//   m: 2,
//   a: 6,
//   s: 1,
//   r: 2,
//   y: 1,
//   n: 1,
//   k: 1,
//   b: 1,
//   t: 1
// }
