// Tulis kode kamu di bawah ini
let kalimat = 'i love javascript';
let perubahanKalimat = '';
for (x of kalimat) {
    if( x === 'a' || x === 'i' || x === 'u' || x === 'e' || x === 'o'){
    	x = '$';
    }
  perubahanKalimat += x;
}
console.log('i love javascript')
console.log("kalimat akan berubah menjadi : " + perubahanKalimat)