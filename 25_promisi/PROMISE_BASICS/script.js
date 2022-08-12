let getSomething = () => {
    let obj = new Promise((resolve, reject) => {
       // resolve("Nesto resolve...");
        reject("Nesto reject...");
    });
    return obj;
}
//console.log(getSomething());

//getSomething vraca resolve ili reject
//Ako vrati resolve onda se izvrsava then grana
getSomething().then(data => {  //then ce raditi kada je resolved
    console.log(data);
}).catch(err => {
    console.log(err); //catch ce raditi kada je rejected
});