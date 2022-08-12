let blog1 = {
    title: "HTML",
    likes: 50,
    dislikes: 3,
};

let blog2 = {
    title: "CSS",
    likes: 170,
    dislikes: 105,
};

let blog3 = {
    title: "JS",
    likes: 205,
    dislikes: 110,
};

//Napraviti niz korisnika gde svaki od njih sadrzi niz blogova. Svaki blog u ovom nizu je objekat.

let user1 = {
    username: "Stefan",
    age: 31,
    blogs: [blog1, blog2, blog3],
    logBlogs: function() {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    },
    sumLikes: function() {
        let sum = 0;
        this.blogs.forEach(blog => {
            sum += blog.likes
        });
        return sum;
    }
}
user1.logBlogs();

let user2 = {
    username: "Jelena",
    age: 26,
    blogs: [blog2, blog3],
    sumLikes: function() {
        let sum = 0;
        this.blogs.forEach(blog => {
            sum += blog.likes
        });
        return sum;
    }
};

let user3 = {
    username: "Milena",
    age: 14,
    blogs: [blog1],
    sumLikes: function() {
        let sum = 0;
        this.blogs.forEach(blog => {
            sum += blog.likes
        });
        return sum;
    }
};

let users = [user1, user2, user3]

//Ispisati imena onih autora koji imaju ispod 18 godina
users.forEach(user => {
    if(user.age < 18) {
        console.log(user.username);
    }
});

//Ispisati naslove blogova koji imaju vise od 50 lajkova
users.forEach(user => {
    user.blogs.forEach(blog => {
        if(blog.likes > 50) {
            console.log(blog.title);
        }
    })
})

//Ispisati sve blogove autora čiji je username Milena
users.forEach(user => {
    if(user.username == "Milena") {
        user.blogs.forEach(blog => {
            console.log(blog.title);
        })
    }
})

//Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
users.forEach(user => {
    let ukLajkova = 0;
    user.blogs.forEach(blog => {
        ukLajkova += blog.likes;
        
    })
    if(ukLajkova > 100) {
        console.log(user.username);
    }
});

//ILI
users.forEach(user => {
    if(user.sumLikes() > 100) {
        console.log(user.username);
    }
});

//ILI
let sum = blogs => {
    let s = 0;
    blogs.forEach(blog => {
        s += blog.likes;
    });
    return s;
}
users.forEach(user => {
    let likes = sum(user.blogs);
    if(likes > 100) {
        console.log(user.username);
    }
})

//Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
let ukLajkova = 0;
let brojac = 0;
users.forEach(user => {
    user.blogs.forEach(blog => {
        ukLajkova += blog.likes;
        brojac++;
    });
});

let prosek = ukLajkova / brojac;
console.log(prosek);

users.forEach(user => {
    user.blogs.forEach(blog => {
        if(prosek < blog.likes) {
            console.log(blog.title);
        }
    });
});

let avgGeneral = 0;
let sumGeneral = 0;
let countGeneral = 0;
users.forEach(user => {
    user.blogs.forEach(blog => {
        sumGeneral += blog.likes;
        countGeneral++;
    });
});
avgGeneral = sumGeneral / countGeneral
console.log(avgGeneral);

users.forEach(user => {
    user.blogs.forEach(blog => {
        if(blog.likes > avgGeneral) {
            console.log(blog.title);
        }
    })
});

// ILI
let sumGeneral2 = 0;
let countGeneral2 = 0;
let avgGeneral2 = 0;
users.forEach(user => {
    sumGeneral2 += user.sumLikes();
    countGeneral2 += user.blogs.length;
});

avgGeneral2 = sumGeneral2 / countGeneral2;
console.log(avgGeneral2);

users.forEach(user => {
    user.blogs.forEach(blog => {
        if(blog.likes > avgGeneral2) {
            console.log(blog.title);
        }
    })
})