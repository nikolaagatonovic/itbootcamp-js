//2. Odrediti zbir elemenata celobrojnog niza
let vrednosti = [150, 140, 360, 120, 180];
let suma = 0;
for(let i = 0; i < vrednosti.length; i++) {
    suma+=vrednosti[i];
}
console.log(suma);

//3. Odrediti proizvod elemenata celobrojnog niza.
vrednosti = [150, 140, 360, 120, 180];
let proizvod = 1;
for(let i = 0; i < vrednosti.length; i++) {
    proizvod*=vrednosti[i];
}
console.log(proizvod);

//4. Odrediti srednju vrednost elemenata celobrojnog niza.
vrednosti = [150, 140, 360, 120, 180];
suma = 0;
for(let i = 0; i < vrednosti.length; i++){
    suma+=vrednosti[i];
}
let srvr = suma / vrednosti.length;
console.log(srvr);

//5.Odrediti maksimalnu vrednost u celobrojnom nizu.
vrednosti = [150, 140, 360, 120, 180];
let maksVr = 0;
for(let i = 0; i < vrednosti.length; i++) {
    if(maksVr < vrednosti[i]){
        maksVr = vrednosti[i];
    }
}
console.log(maksVr);

//6 Odrediti minimalnu vrednost u celobrojnom nizu.
let minVr = vrednosti[0];
for(let i = 0; i < vrednosti.length; i++) {
    if(minVr > vrednosti[i]) {
        minVr = vrednosti[i];
    }
}
console.log(minVr);

//7. Odrediti indeks maksimalnog elementa celobrojnog niza.

vrednosti = [150, 140, 360, 120, 180];
brojac = 0;
for(let i = 0; i < vrednosti.length; i++){
    if(maksVr == vrednosti[i]){
        brojac = i;
        break
    }
}
console.log(brojac);

//8 Odrediti indeks minimalnog elementa celobrojnog niza.
index = 0;
for(let i = 0; i < vrednosti.length; i++) {
    if(minVr == vrednosti[i]) {
        indeks = i;
        break;
    }
}
console.log(indeks);

//9. Odrediti broj elemenata celobrojnog niza koji su veci od srednje vrednosti.
let niz2 = [22, 43, 44];
let srVr = 0;
suma = 0;
let br = 0;
let brojElemenata = 0;
for(let i = 0; i < niz2.length; i++) {
    suma += niz2[i];
    br++;
}
srVr = suma / br;

for(let i = 0; i < niz2.length; i++) {
    if(niz2[i] > srVr) {
        brojElemenata++;
    }
}
console.log(brojElemenata);