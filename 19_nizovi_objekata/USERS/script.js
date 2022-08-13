let blog1 = {
    title: 'HTML',
    likes: 50,
    dislikes: 3
};

let blog2 = {
    title: 'CSS',
    likes: 170,
    dislikes: 105
};

let blog3 = {
    title: 'JS',
    likes: 205,
    dislikes: 110
}

let user1 = {
    username: 'Stefan',
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
        return sum;
    }
};
user1.logBlogs();

//Napraviti niz korisnika gde svaki od korisnika sadrzi niz blogova. Svaki blog u ovom nizu je objekat.
let user2 = {
    username: 'Jelena',
    age: 26,
    blogs: [blog2, blog3],

    
    sumLikes: function() {
        let sum = 0;
        this.blogs.forEach(blog => {
            sum += blog.likes;
        });
        return sum;
    }   
};

let user3 = {
    username: 'Milena',
    age: 14,
    blogs: [blog1],

sumLikes: function() {
    let sum = 0;
    this.blogs.forEach(blog => {
        sum += blog.likes;
    });
    return sum;
}
}

let user4 = {
    username: 'johnDoe',
    age: 23,
    blogs: [blog1, blog2],
    sumLikes: function() {
        let sum = 0;
        this.blogs.forEach(blog => {
            sum += blog.likes;
        });
        return sum;
    }
}

let users = [user1, user2, user3, user4];

//Ispisati imena autora koji imaju ispod 18 godina
users.forEach(user => {
    let godine = user.age;
    if(godine < 18) {
        console.log(user.username);
    }
});

//Ispisati naslove blogova koji imaju vise od 50 lajkova
users.forEach(user => {
    let userBlogs = user.blogs; // izdvojimo niz blogova tekuceg korisnika
    userBlogs.forEach(blog => {
        if(blog.likes > 50) {
            console.log(blog.title);
        }
    });
});

//Ispisati sve blogove autora čiji je username ’JohnDoe’
users.forEach(user => {
    if(user.username == "johnDoe") {
        console.log(user.blogs);
    }
});

//Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
//1. NACIN
users.forEach(user => {
    let userBlogs = user.blogs;
    let sumLikes = 0;
    userBlogs.forEach(blog => {
        sumLikes += blog.likes;
    });
    if(sumLikes > 100) {
        console.log(user.username);
    }
});

//2. NACIN
users.forEach(user => {
    if(user.sumLikes() > 100) {
        console.log(user.username);
    }
});

//3. NACIN
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
});

//Ispisati naslove onih blogova koji imaju natprosecan broj pozitivnih ocena
let avgGeneral = 0; //Prosecna ocena u odnosu na sve blogove svih korisnika
//1. NACIN odredjivanje prosecnog broja pozitivnih ocena
let sumGeneral = 0;
let countGeneral = 0;
// users.forEach(user => {
//     user.blogs.forEach(blog => {
//         sumGeneral += blog.likes;
//         countGeneral++;
//     });
// });
// avgGeneral = sumGeneral / countGeneral;
// console.log(avgGeneral);

//2. NACIN odredjivanja prosecnog broja pozitivnih ocena
users.forEach(user => {
    sumGeneral += user.sumLikes();
    countGeneral += user.blogs.length;
});

avgGeneral = sumGeneral / countGeneral;
console.log(avgGeneral);

users.forEach(user =>{
    user.blogs.forEach(blog => {
        if(blog.likes > avgGeneral) {
            console.log(blog.title);
        }
    })
});