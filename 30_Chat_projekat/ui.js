export class ChatUI {
    constructor(v) {
        this.list = v;
    }

    //Seter
    set list(v) {
        this._list = v;
    }

    //Geter
    get list() {
        return this._list;
    }

    clearUl() {
        this.list.innerHTML = "";
      }

    formatDateTD(date) {
        let h = date.getHours();
        let min = date.getMinutes();

        if (h < 10) {
            h = '0' + h;
        }
        if (min < 10) {
            min = '0' + min;
        }

        return `${h}:${min}`;
    }

    formatDateYD(date) {
        let dan = date.getDate();
        let mesec = date.getMonth() + 1;
        let godina = date.getFullYear();
        let h = date.getHours();
        let min = date.getMinutes();

        if (dan < 10) {
            dan = '0' + dan;
        }
        if (mesec < 10) {
            mesec = '0' + mesec;
        }
        if (h < 10) {
            h = '0' + h;
        }
        if (min < 10) {
            min = '0' + min;
        }

        return `${dan}/${mesec}/${godina}   ${h}:${min}`;
    }

    //Metod koji pravi osnovu za prikaz list item-a
    //data koji prosledjujemo je objekat tj dokument iz baze
    templateLI(data) {
        let date = data.created_at.toDate();
        let datestring = String(date);
        console.log(datestring);
        let trenutniDatum = new Date();
        let trenutniDan = trenutniDatum.getDate();
        //    let trenutniDan = 11; //dan za testiranje
        let trenutniMesec = trenutniDatum.getMonth();
        //   let trenutniMesec = 9;  //mesec za testiranje
        MonConversion();
        let trenutnaGodina = trenutniDatum.getFullYear();
        //   let trenutnaGodina = 3022;  //godina za testiranje
        console.log(trenutniDan + " " + trenutniMesec + " "+ trenutnaGodina);
        let ceoDan = datestring.includes(trenutniDan);
        let ceoMesec = datestring.includes(trenutniMesec);
        let celaGodina = datestring.includes(trenutnaGodina);
        console.log("da li je dan isti :" + ceoDan);
        console.log("da li je mesec isti :" + ceoMesec);
        console.log("da li je godina ista :" + celaGodina);
if(data.username == localStorage.getItem("username")){
    if (ceoDan == true && ceoMesec == true && celaGodina == true) {
        let prikazDatum = this.formatDateTD(date);
        let htmlLI =
            `<li class="sent">
            <span class="username">${data.username}: </span>
            <span class="message">${data.message}</span>
            <div class="datePoruka">${prikazDatum}</div> 
            <button class="trash" id="${data.created_at.seconds}>🗑️</button>  
        </li>`;
        this.list.innerHTML += htmlLI;
        this.list.scrollTop = this.list.scrollHeight;
    }
    else {
        let prikazDatumYD = this.formatDateYD(date);
        let htmlLI =
        `<li class="sent">
        <span class="username">${data.username}: </span>
        <span class="message">${data.message}</span>
        <div class="datePoruka">${prikazDatumYD}</div>
        <button class="trash" id="${data.created_at.seconds}>🗑️</button>  
    </li>`;
        this.list.innerHTML += htmlLI;
    }  
}
else {
    if (ceoDan == true && ceoMesec == true && celaGodina == true) {
        let prikazDatum = this.formatDateTD(date);
        let htmlLI =
            `<li>
            <span class="username">${data.username}: </span>
            <span class="message">${data.message}</span>
            <div class="datePoruka">${prikazDatum}</div>
            <button class="trash" id="${data.created_at.seconds}>🗑️</button>
        </li>`;
        this.list.innerHTML += htmlLI;
    }
    else {
        let prikazDatumYD = this.formatDateYD(date);
        let htmlLI =
        `<li>
        <span class="username">${data.username}: </span>
        <span class="message">${data.message}</span>
        <div class="datePoruka">${prikazDatumYD}</div>
        <button class="trash" id="${data.created_at.seconds}>🗑️</button>   
    </li>`;
        this.list.innerHTML += htmlLI;
    }  
}
        function MonConversion() {
            if (trenutniMesec == 0) {
                trenutniMesec = "Jan";
            }
            else if (trenutniMesec == 1) {
                trenutniMesec = "Feb";
            }
            else if (trenutniMesec == 2) {
                trenutniMesec = "Mar";
            }
            else if (trenutniMesec == 3) {
                trenutniMesec = "Apr";
            }
            else if (trenutniMesec == 4) {
                trenutniMesec = "May";
            }
            else if (trenutniMesec == 5) {
                trenutniMesec = "Jun";
            }
            else if (trenutniMesec == 6) {
                trenutniMesec = "Jul";
            }
            else if (trenutniMesec == 7) {
                trenutniMesec = "Aug";
            }
            else if (trenutniMesec == 8) {
                trenutniMesec = "Sep";
            }
            else if (trenutniMesec == 9) {
                trenutniMesec = "Oct";
            }
            else if (trenutniMesec == 10) {
                trenutniMesec = "Nov";
            }
            else if (trenutniMesec == 11) {
                trenutniMesec = "Dec";
            }
        } 
    }
}