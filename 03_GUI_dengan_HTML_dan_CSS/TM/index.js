const elemenEditor = document.getElementById("editor-kecil");
const elemenTotalKarakter = document.getElementById("hf");
const elemenHurufKecil = document.getElementById("hk");
const elemenHurufBesar = document.getElementById("hb");
const tombolBesar = document.getElementById("huruf-besar");
const tombolKecil = document.getElementById("huruf-kecil");

function perbaruiHitungan() {
    const teks = elemenEditor.value;
    elemenTotalKarakter.textContent = teks.length; 
    const pencarianHurufKecil = teks.match(/[a-z]/g);
    elemenHurufKecil.textContent = pencarianHurufKecil ? pencarianHurufKecil.length : 0;
    const pencarianHurufBesar = teks.match(/[A-Z]/g);
    elemenHurufBesar.textContent = pencarianHurufBesar ? pencarianHurufBesar.length : 0;
}

elemenEditor.addEventListener("input", perbaruiHitungan);
tombolBesar.addEventListener("click", () => {
    elemenEditor.value = elemenEditor.value.toUpperCase();
    perbaruiHitungan(); 
});
tombolKecil.addEventListener("click", () => {
    elemenEditor.value = elemenEditor.value.toLowerCase();
    perbaruiHitungan();
});