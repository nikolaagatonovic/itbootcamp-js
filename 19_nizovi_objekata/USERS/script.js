let blog1 = {
    title: "HTML",
    likes: 50,
    dislikes: 3
}

let blog2 = {
    title: "CSS",
    likes: 170,
    dislikes: 105
}

let blog3 = {
    title: "Javascript",
    likes: 205,
    dislikes: 110
}

//Napraviti niz korisnika gde svaki od korisnika sadrzi niz blogova. Svaki blog u ovom nizu je objekat 

let user1 = {
    username: "Stefan",
    age: 31,
    blogs: [blog1, blog2, blog3],
    logBlogs: function () {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    },
    sumLikes: function() {
        let sum = 0;
        this.blogs.forEach(blog => {
            sum += blog.likes;
        });
        return sum
    }
};
user1.logBlogs();

let user2 = {
    username: "Jelena",
    age: 16,
    blogs: [blog2, blog3],
    sumLikes: function() {
        let sum = 0;
        this.blogs.forEach(blog => {
            sum += blog.likes;
        });
        return sum
    }
};

let user3 = {
    username: "Milena",
    age: 34,
    blogs: [blog1],
    sumLikes: function() {
        let sum = 0;
        this.blogs.forEach(blog => {
            sum += blog.likes;
        });
        return sum
    }
};

let users = [user1, user2, user3];

//Ispisati imena onih autora koji imaju ispod 18 godina 
users.forEach(user => {
    let godine = user.age;
    if(godine < 18) {
        console.log(user.username);
    }
});

//Ispisati naslove onih blogova koji imaju vise od 50 lajkova

users.forEach(user => {
    let userBlogs = user.blogs; //Izdvajamo niz blogova tekuceg korisnika 
    userBlogs.forEach(blog => {
        if(blog.likes >= 50) {
            console.log(blog.title);
        }
    });
});

//Ispisati sve blogove autora čiji je username "Jelena"
users.forEach(user => {
    if(user.username == "Jelena") {
        user.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
});

//Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali

users.forEach(user => {
    let userBlogs = user.blogs;
    let sumLikes = 0;
    userBlogs.forEach(blog => {
        sumLikes += blog.likes
    });
    if(sumLikes > 100) {
        console.log(user.username);
    }
});
//prvo se sumiraju lajkovi pa se onda gleda da li su veci od 100

// DRUGI NACIN

users.forEach(user => {
    if(user.sumLikes() > 100) {
        console.log(user.username);
    }
});

// TRECI NACIN

let sum = blogs => {
    let s = 0;
    blogs.forEach(blog => {
        s += blog.likes;
    });
    return s;
}
users.forEach(user => {
    let userBlogs = user.blogs;
    let likes = sum(userBlogs);
    if(likes > 100) {
        console.log(user.username);
    }
})

//Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena

//1. NACIN
let prosekLajkova = 0;
let prosekDislajkova = 0;
let sumaLajkova = 0;
let sumaDislajkova = 0;
let brojLajkova = 0;
let brojDislajkova = 0;

users.forEach(user => {
    user.blogs.forEach(blog => {
        sumaLajkova += blog.likes;
        brojLajkova++;
    })
    prosekLajkova = sumaLajkova / brojLajkova
})
console.log(prosekLajkova);

users.forEach(user => {
    user.blogs.forEach(blog => {
        if(blog.likes > prosekLajkova) {
            console.log(blog.title);
        }
    })
})

//2. NACIN
users.forEach(user => {
    sumaLajkova += user.sumLikes();
    brojLajkova += user.blogs.length;
});
prosekLajkova = sumaLajkova / brojLajkova
console.log(prosekLajkova);

users.forEach(user => {
    user.blogs.forEach(blog => {
        if(blog.likes > prosekLajkova) {
            console.log(blog.title);
        }
    });
});

// let suma SE STAVLJA UNUTAR FOREACH PETLJE SAMO KADA HOCEMO DA ODREDIMO SUMU JEDNOG KORISNIKA IZ TE PETLJE

// users.forEach(user => {
//     userBlogs = user.blogs;
//     sumLikes = 0;
//     let brBlogova = 0;
//     userBlogs.forEach(blog => {
//         sumLikes += blog.likes;
//         brBlogova++;


//     if (blog.likes > (sumLikes / brBlogova)) {
//         console.log(blog.title);
        
//     }
    
// })
// return brBlogova
// })

// users.forEach(user => {
//     let userBlogs = user.blogs;
//     let sumLikes = 0;
//     userBlogs.forEach(blog => {
//         sumLikes += blog.likes
//     });
//     if(sumLikes > 100) {
//         console.log(user.username);
//     }
// Ispisati naslove onih sa natprosecnim ocenamaz

//Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena

users.forEach(user => {
    user.blogs.forEach(blog => {
        sumaLajkova += blog.likes;
        brojLajkova++;
        sumaDislajkova += blog.dislikes;
        brojDislajkova++
    })
})
prosekLajkova = sumaLajkova / brojLajkova;
prosekDislajkova = sumaDislajkova / brojDislajkova;

users.forEach(user => {
    user.blogs.forEach(blog => {
        if(blog.likes > prosekLajkova) {
            console.log(blog.title);
        }
        if(blog.dislikes < prosekDislajkova) {
            console.log(blog.title);
        }
    })
})
//DOMACI
// Napraviti niz dan objekata (podsetiti se objekta dan sa 14. slajda i kreirati nekoliko takvih objekata)

// Napraviti arrow funkciju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
// Ispisati prvi od njih
// Ispisati poslednji od njih

//  Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

// Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom
let dan1 = {
    datum: "2022/05/22",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperatura: [20, 22, 24, 28, 30, 27, 25, 23]
}

let dan2 = {
    datum: "2022/05/12",
    kisa: true,
    sunce: true,
    oblacno: false,
    temperatura: [20, 24, 28, 30, 25, 23]
}

let dan3 = {
    datum: "2022/05/23",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperatura: [20, 22, 24, 28, 30, 27, 25, 23]
}

let dani = [dan1, dan2, dan3];
let datum = () => {
    let maks = dani[0].temperatura.length;
    let poslednjiDan = dani[0].datum;

    dani.forEach(dan => {
        if(maks < dan.temperatura.length) {
            maks = dan.temperatura.length;
        }
    })
    dani.forEach(dan => {
        if(maks == dan.temperatura.length && poslednjiDan > dan.datum) {
            poslednjiDan = dan.datum;
        }
        if(maks == dan.temperatura.length && poslednjiDan < dan.datum) {
            poslednjiDan = dan.datum;
        }
    });
    return poslednjiDan
};
console.log(datum(dani));