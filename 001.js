/*
Array Remover
Array remover merupakan sebuah function yang berfungsi untuk menghapus value
dari sebuah array yang diberikan berdasarkan jumlah yang ingin dihapus dan index
mulai.

Array remover menerima tiga parameter yaitu array of number, index untuk mulai
menghapus dan jumlah data yang akan dihapus

Contoh:
Input:
  array: [ 666, 666, 333, 10, 5, 6]
  index: 1
  count: 2

Output:
  [ 666, 10, 5, 6 ]

RULES:
  - WAJIB MENYERTAKAN ALGORITMA / PSEUDOCODE
  - Dilarang menggunakan built-in function .map, .filter, .reduce!
*/
/*Pseudocode No-1 
FUNCTION arrayRemover WITH parameter `array`, `index`, and `count`

  STORE and SET `angka` EQUAL to variabel `array`
  STORE and SET `indexKet` EQUAL to variabel `index`
  STORE and SET `jumlah` EQUAL to variabel `count`

  SET `angka` use SPLICE function with parameter `indexKet` and `jumlah`
  RETURN `angka`

END FUNCTION
*/

function arrayRemover (array, index, count) {
  var angkaBaru = [];
  
  for (var i = 0; i < index; i++) {
    angkaBaru.push(array[i]);
  }

  for (var j = index+count; j < array.length; j++) {
    angkaBaru.push(array[j]);
  }
  // angka.splice(indexKet, jumlah)
  return angkaBaru;

  // your code here
}

console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); // [3]
console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )); // [ 666, 10, 5, 6 ]
console.log(arrayRemover([ 1, 2, 3], 0, 3)) // []
