// Tulis kode kamu di bawah ini
// bahan 
let kalimat = 'i love javascript';
let perubahanKalimat = '';

//for tanpa of
// for (let a = 0; a <= kalimat.length; a++) {
//     if (kalimat[a] === 'a' || kalimat[a] === 'i' ||kalimat[a] === 'u' || kalimat[a] === 'e' || kalimat[a] === 'o') {
//         kalimat[a] = '$';
//     }
//     perubahanKalimat = + kalimat[a];
// }

// console.log("kalimat sudah berubah menjadi : " + perubahanKalimat);

// pake for of
for (x of kalimat) {
    if( x === 'a' || x === 'i' || x === 'u' || x === 'e' || x === 'o'){
    	x = '$';
    }
  perubahanKalimat += x;
}

console.log("kalimat sudah berubah menjadi : " + perubahanKalimat)