// Tulis kode kamu di bawah ini

var kalimat = 'i love javasript';
var hasil = '';

for (x of kalimat) {
  if (x === 'a' || x === 'i' || x === 'u' || x === 'e' || x === 'o') {
    x = '$';
  }
  hasil += x;
}

console.log("maka hasil yang dihasilkan adalah " + hasil);