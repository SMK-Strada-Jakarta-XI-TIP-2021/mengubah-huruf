// Tulis kode kamu di bawah ini
let kalimat = 'i love javascript';
let hasilKalimat = '';

for (x of kalimat) {
    if ( x === 'a' || x === 'i' || x === 'u' || x === 'e' ||x === 'o' )
    {
        x = '$';
    }
    hasilKalimat += x;
}

console.log("kalimat sudah berubah menjadi : " + hasilKalimat)