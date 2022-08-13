console.log("IF - naredba grananja")

let a = 77;
let b = 10;

// kod if nema tackazarez
if(a < b){
    console.log("a je manje od b");
}

console.log ("If je izvrsen");

let x = 15;
let y = 15;
if (x == y) {
    console.log("Brojevi x = " + x + " i y = " + y + " su jednaki");
    console.log(`Brojevi x = ${x} i y = ${y} su jednaki`);
}

let x1 = "15";
//== poredi samo po vrednosti
if(x == x1){
    console.log(`Brojevi x i x1 imaju istu vrednost`);
}
//=== poredi i po tipu i po vrednosti.
if (x === x1){
    console.log(`Brojevi x i x1 imaju isti tip i istu vrednost`);
    //x i x1 imaju istu vrednost a to je 15 medjutim nemaju isti tip. x je tipa number dok je x1 tipa string.
}

