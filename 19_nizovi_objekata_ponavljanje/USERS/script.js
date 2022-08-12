let blog1 = {
    title: "HTML",
    likes: 50,
    dislikes: 3
};

let blog2 = {
    title: "CSS",
    likes: 170,
    dislikes: 105
};

let blog3 = {
    title: "JS",
    likes: 205,
    dislikes: 110
};

let user1 = {
    username: "Stefan",
    age: 31,
    blogs: [blog1, blog2, blog3],
    logBlogs: function() {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        })
    },
    sumLikes: function() {
        let suma = 0;
        this.blogs.forEach(blog => {
            suma += blog.likes;
        });
        return suma
    }
};
user1.logBlogs();

let user2 = {
    username: "Jelena",
    age: 26,
    blogs: [blog2, blog3],
    logBlogs: function() {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        })
    },
    sumLikes: function() {
        let suma = 0;
        this.blogs.forEach(blog => {
            suma += blog.likes;
        });
        return suma
    }
};

let user3 = {
    username: "Milena",
    age: 14,
    blogs: [blog1],
    logBlogs: function() {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        })
    },
    sumLikes: function() {
        let suma = 0;
        this.blogs.forEach(blog => {
            suma += blog.likes;
        });
        return suma
    }
};

let users = [user1, user2, user3]

//Imena autora ispod 18 godina

users.forEach(user => {
    if(user.age < 18) {
        console.log(user.username);
    }
})

//Ispisati naslove blogova koji imaju vise od 50 lajkova

users.forEach(user => {
    user.blogs.forEach(blog => {
        if(blog.likes > 50) {
            console.log(blog.title);
        }
    })
})

//Ispisati sve blogove autora ciji je username Milena

users.forEach(user => {
    if(user.username == "Milena") {
        user.blogs.forEach(blog => {
            console.log(blog.title);
        })
    }
})

//ILI

//Ispisati autore koji imaju vise od 100 lajkova za blogove koje su napisali

users.forEach(user => {
    let ukLajkova = 0;
    user.blogs.forEach(blog => {
        ukLajkova += blog.likes;
    })
    if(ukLajkova > 100) {
        console.log(user.username);
    }
});

// ILI

users.forEach(user => {
    if(user.sumLikes() > 100){
        console.log(user.username);
    }
});

//ILI
let sum = blogs => {
    let suma = 0;
    blogs.forEach(blog => {
        suma += blog.likes;
    });
    return suma;
}
users.forEach(user => {
    let ukLajkova = sum(user.blogs);
    if(ukLajkova > 100) {
        console.log(user.username);
    }
});

//Ispisati naslove onih blogova koji imaju natprosecan broj lajkova

let ukupnaSuma = 0;
let ukupanBroj = 0;

users.forEach(user => {
    user.blogs.forEach(blog => {
        ukupnaSuma += blog.likes;
        ukupanBroj++;
        // console.log(ukupnaSuma);
        // console.log(ukupanBroj);
    });
});
let prosekLajkova = ukupnaSuma / ukupanBroj;

console.log(prosekLajkova);

users.forEach(user => {
    user.blogs.forEach(blogg => {
    if(blogg.likes > prosekLajkova) {
        // console.log(blog2.likes);
        // console.log(prosekLajkova);
        console.log(blogg.title);
        }
    });
});

//Napraviti niz dan objekata (podsetiti se objekta dan sa 14. slajda i kreirati nekoliko takvih objekata)

let dan1 = {
    datum: "2022/05/21",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperature: [1, 2, 3, 4, 5], //15
    zbirTemp: function() {
        zbir = 0;
        this.temperature.forEach(elem => {
            zbir += elem;
        });
        return zbir
    },
    srvr: function() {
        let srVr = this.zbirTemp() / this.temperature.length;
        return srVr
    }
}


let dan2 = {
    datum: "2022/05/22",
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [2, 4, 6, 8, 10], //30
    zbirTemp: function() {
        zbir = 0;
        this.temperature.forEach(elem => {
            zbir += elem;
        });
        return zbir
    },
    srvr: function() {
        let srVr = this.zbirTemp() / this.temperature.length;
        return srVr
    }
}

let dan3 = {
    datum: "2022/05/19",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [1, 3, 5, 7, 9], //25
    zbirTemp: function() {
        zbir = 0;
        this.temperature.forEach(elem => {
            zbir += elem;
        });
        return zbir
    },
    srvr: function() {
        let srVr = this.zbirTemp() / this.temperature.length;
        return srVr
    }
}

let dan4 = {
    datum: "2022/05/31",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [2, 3, 4, 5, 6], //20
    zbirTemp: function() {
        zbir = 0;
        this.temperature.forEach(elem => {
            zbir += elem;
        });
        return zbir
    },
    srvr: function() {
        let srVr = this.zbirTemp() / this.temperature.length;
        return srVr
    }
    
}

let dani = [dan1, dan2, dan3, dan4]

//Napraviti arrow funkciju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
//Ispisati prvi od njih
//Ispisati poslednji od njih

let najveciBrojTemperatura = dani[0].temperature.length
dani.forEach(dan => {
    if(najveciBrojTemperatura < dan.temperature.length) {
        najveciBrojTemperatura = dan.temperature.length;
    }
});

let brojac = 0;
dani.forEach(dan => {
    if(najveciBrojTemperatura == dan.temperature.length) {
        brojac++
    }
});

let najmanjiDan = dani[0].datum;
dani.forEach(dan => {
    if(najveciBrojTemperatura == dan.temperature.length) {
        if(najmanjiDan > dan.datum) {
            najmanjiDan = dan.datum;
        }
    }
 });

 let najveciDan = dani[0].datum;
 dani.forEach(dan => {
    if(najveciBrojTemperatura == dan.temperature.length) {
    if(najveciDan < dan.datum) {
        najveciDan = dan.datum;
        }
    }
 });

 if(brojac == 1) {
    console.log(`Dan sa najvise izmerenih temperatura je ${najveciDan}`)
} else if (brojac > 1) {
    console.log(`Prvi dan sa najvise izmerenih temperatura je ${najmanjiDan} a poslednji ${najveciDan}`);
}

//Napraviti arrow funkciju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

let prognoza = dani => {
    let brojacKisa = 0;
    let brojacSunce = 0;
    let brojacOblacno = 0;
    dani.forEach(dan => {
        if(dan.kisa == true) {
            brojacKisa++;
        }
        if(dan.sunce == true) {
            brojacSunce++;
        }
        if(dan.oblacno == true) {
            brojacOblacno++;
        }
    })
    console.log(`Kisnih dana bilo je ${brojacKisa}, suncanih ${brojacSunce}, a oblacnih ${brojacOblacno}`);
}
prognoza(dani);

//Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom

let natprosecna = dani => {
    let brojacDana = 0;
    let zbirProsTemp = 0;
    dani.forEach(dan => {
        brojacDana++;
        zbirProsTemp += dan.srvr();
    });
    console.log(zbirProsTemp);
    let ukupanProsek = zbirProsTemp / brojacDana;
    let brojacNatpDana = 0;
    dani.forEach(dan => {
        if(ukupanProsek > dan.srvr()) {
            brojacNatpDana++
        }
    })
    return brojacNatpDana
}
console.log(natprosecna(dani));

//     console.log(maks);
//     let maks2 = "9999/05/31";
//     let min2 = "0000/00/01";
//     dani.forEach (dan => {
//       if (maks == dan.temperature.length){
//             if(maks2 > dan.datum) {  
//             maks2 = dan.datum;   
//             }
//             if(min2 < dan.datum){
//                 min2 = dan.datum;
//             }
//           najmanji = maks2;
//           najveci = min2;
//       }
//     })
//     console.log("najmanji datum je: " + najmanji);
//     console.log("najveci datum je: " + najveci);
// }
// najviseIzmerenih(dani)
    // dani.forEach(dan => {
    //     if (maks == dan.temperature.length && kojiDatum > dan.datum) {
    //         kojiDatum = dan.datum
    //     }
    // }); 
    // return kojiDatum
    // dani.forEach(dan => { 
    //     if (maks == dan.temperature.length && kojiDatum < dan.datum) {
    //         kojiDatum = dan.datum
    //         console.log(kojiDatum);
    //     }
    // });

//console.log(najviseIzmerenih(dani));


