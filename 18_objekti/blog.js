let blog = {
    title: "Objekti",
    content: "Ovo su objekti",
    author: "Jelena"
};

console.log(blog);
console.log(typeof blog);

// let x = 5;
// console.log(typeof x); 

console.log(blog.title);
//ILI
console.log(blog["content"]); 

//Izmena jedne osobine/propertija u objektu

blog.content = "Objekti su slozeni tipovi podataka";
console.log(blog.content);

blog['author'] = 'Jelena Matejic';
console.log(blog.author);

///////////////////////////

let user = {
    username: "John",
    age: 32,
    blogs: ['Minimum', 'Maximum', 'Average'],
    login: function() {
        console.log("Ulogovani ste");
    },
    logBlogs: function() {
        //console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    },
    test: function () {
        console.log(this);
    }
};

console.log(user);
user.login();
user.logBlogs()
user.test(); //daje informacije o objektu u kom se nalazi
console.log(this)