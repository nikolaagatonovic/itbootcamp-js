import {generateImage} from "./modules/general.js"

import * as List from "./modules/list.js"

import * as Table from "./modules/table.js";

document.body.appendChild(generateImage("img/slika1.png"));
document.body.appendChild(generateImage("img/slika2.png"));
document.body.appendChild(generateImage("img/slika3.png"));


let ul = List.generateList(document.body);
let li1 = List.generateItem(ul, "img/slika1.png")
let li2 = List.generateItem(ul, "img/slika2.png")
let li3 = List.generateItem(ul, "img/slika3.png")

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
let td1 = Table.generateItem(tr, "img/slika1.png");
let td2 = Table.generateItem(tr, "img/slika2.png");
let td3 = Table.generateItem(tr, "img/slika3.png");