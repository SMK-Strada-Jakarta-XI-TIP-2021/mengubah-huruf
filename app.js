// Tulis kode kamu di bawah ini
// bahan 
let kalimat = 'i love javascript';
let perubahanKalimat = '';
let x = 0;

//for tanpa of
// for (let a = 0; a < kalimat.length; a++) {
//   if (kalimat[a] === 'a' || kalimat[a] === 'i' ||kalimat[a] === 'u' || kalimat[a] === 'e' || kalimat[a] === 'o') {
//     perubahanKalimat += '$';
//   } else {
//     perubahanKalimat += kalimat[a];
//   }
// }

// console.log("kalimat sudah berubah menjadi : " + perubahanKalimat);

// pake for of
// for (x of kalimat) {
//     if( x === 'a' || x === 'i' || x === 'u' || x === 'e' || x === 'o'){
//     	x = '$';
//     }
//   perubahanKalimat += x;
// }

// console.log("kalimat sudah berubah menjadi : " + perubahanKalimat)

// pake do while
do {
  // pake switch
  switch (kalimat[x]) {
    case "a":
      perubahanKalimat += '$';
      break;
    case "i":
      perubahanKalimat += '$';
      break;
    case "u":
      perubahanKalimat += '$';
      break;
    case "e":
      perubahanKalimat += '$';
      break;
    case "o":
      perubahanKalimat += '$';
      break;
    default:
      perubahanKalimat += kalimat[x];
  }

  x++;
}while(x < kalimat.length)

console.log("kalimat sudah berubah menjadi : " + perubahanKalimat);

// pake do while
// do {
//   //pake if
//   if (kalimat[x] === 'a' || kalimat[x] === 'i' ||kalimat[x] === 'u' || kalimat[x] === 'e' || kalimat[x] === 'o') {
//     perubahanKalimat += '$';
//   } else {
//     perubahanKalimat += kalimat[x];
//   }

//   x++;
// }while(x < kalimat.length)

// console.log("kalimat sudah berubah menjadi : " + perubahanKalimat);