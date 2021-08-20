// Tulis kode kamu di bawah ini
var kalimat = 'i love javascript';
var kalimatDiubah = '';
for (a of kalimat) {
    if ( a === 'a' || a === 'i' || a === 'u' || a === 'e' || a === 'o'){
    	a = '$';
    }
  kalimatDiubah += a;
}

console.log(kalimatDiubah)