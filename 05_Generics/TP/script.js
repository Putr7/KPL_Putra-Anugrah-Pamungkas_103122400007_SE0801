const str = "Bar bar bar";
/**
 * @param {string} 
 */
function hitung(str, tipe) {
    let jumlahTotal = 0;
    for (const c of str) {
        if (tipe === "semua") {
            jumlahTotal++
        }
        else if (tipe === "huruf") {
            if (c === " ")continue;
            jumlahTotal++
        }
    }
    return jumlahTotal;
}

console.log(
   hitung(str, "semua") // Harusnya 11
);

console.log(
  hitung(str, "huruf") // Harusnya 9
);

hitung(str, "huruf"); // Tidak terjadi apa-apa