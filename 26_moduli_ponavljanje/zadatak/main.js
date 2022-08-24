import generateImage from "./modules/general.js";
import * as List from "./modules/list.js"
import * as Table from "./modules/table.js"

document.body.appendChild(generateImage('images/slika1.png'));
document.body.appendChild(generateImage('images/slika2.png'));
document.body.appendChild(generateImage('images/slika3.png'));

let ul = List.generateList(document.body);
let li1 = List.generateItem(ul, 'images/slika1.png')
let li2 = List.generateItem(ul, 'images/slika2.png')
let li3 = List.generateItem(ul, 'images/slika3.png')

let t = Table.generateTable(document.body);
let tr = Table.generateTableRow(t);
for(let i = 1; i <= 3; i++) {
    Table.generateItem(tr, `images/slika${i}.png`);
}