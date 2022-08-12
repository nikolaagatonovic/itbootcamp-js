import {generateImage} from "./modules/general.js";
import {generateList, generateListItem} from "./modules/list.js"

document.body.appendChild(generateImage('images/slika1.png'));
document.body.appendChild(generateImage('images/slika2.png'));
document.body.appendChild(generateImage('images/slika4.png'));

let ul = generateList(document.body);
let li1 = generateListItem(ul, 'images/slika1.png')
let li2 = generateListItem(ul, 'images/slika2.png')
let li3 = generateListItem(ul, 'images/slika3.png')