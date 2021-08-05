// Tulis kode kamu di bawah ini
var kalimat = 'i love javascript';
var hasil = '';
for (i of kalimat) {
    if ( i === 'a' || i === 'i' || i === 'u' || i === 'e' || i === 'o'){
    	i = '$';
    }
  hasil += i;
}

console.log('Kalimat berubah menjadi' + ' = ' + hasil)