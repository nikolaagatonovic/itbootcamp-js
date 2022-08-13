let blog = {
    title: 'Objekti',
    content: 'Ovo su objekti...',
    autor: 'Jelena'
};

console.log(blog);
console.log(typeof blog);

// let x = 5;
// console.log(typeof x); proveravanje tipa bilo koje promenljive

//Pristup property-u u objektu
console.log(blog.title);
console.log(blog['content']);

// Izmena jedne osobine/property-a u objektu

blog.content = "Objekti su slozeni tipovi podataka";
console.log(blog.content);

blog['autor'] = "Jelena Matejic";
console.log(blog['autor']);

///////////////////////////////////

let user = {
    username: 'John',
    age: 32,
    blogs:['Minimum', 'Maximim', 'Average'],
    login: function(){
        console.log('Ulogovani ste');
    },
    logBlogs: function(){
        //console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    },
    racunaj: function(x, y) {
        console.log(x + y);
    },
    test: function() {
        console.log(this);
    }
};
console.log(user);
user.login();
user.logBlogs();
user.racunaj(3, 5); //sabira 3 i 5.
user.test(); //Daje informacije o objektu u kom se nalazi
console.log(this);