// Tulis kode kamu di bawah ini

var kalimat = 'i love javascript';
var kalimatBaru='';

for (x of kalimat) {
    if( x === 'a' || x === 'i' || x === 'u' || x === 'e' || x === 'o'){
    	x = '$';
    }
    kalimatBaru+= x
    

}
console.log(kalimatBaru)
