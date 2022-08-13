//Dohvatanje jednog dokumenta iz kolekcije
// db.collection("customers").doc("customer-01")
// .get()
// .then(doc => {
//     if(doc.exists){
//         let t = doc.data();
//         console.log(t);
//     }
//     else {
//         console.log(`No document with id: ${doc.id}`);
//     }
// })
// .catch(err => {
//     console.log(`Desila se greska ${err}`);
// });

//Dohvatanje svih dokumenata iz kolekcije
// db.collection('customers')
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Document #${id} : ${t}`);
//     })
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Dohvatanje svih dokumenata iz kolekcije, samo u nekom redosledu
// db.collection('users')
// .orderBy('surname', 'asc')
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Document ${id}`);
//         console.log(t);
//     })
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Dohvatanje svih dokumenata iz kolekcije, samo u nekom redosledu
//Isto kao malopre samo se sortira vise polja
// db.collection('users')
// .orderBy('surname', 'asc')
// .orderBy('name', 'asc')
// .orderBy('age', 'asc') svaki novi kad se kreira zahteva i pravljenje novog indexa
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Document ${id}`);
//         console.log(t);
//     })
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

// Dohvatanje ogranicenog broja dokumenata iz kolekcije
// db.collection('users')
// .orderBy('surname', 'asc')
// .orderBy('name', 'asc')
// .limit(2)
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Document ${id}`);
//         console.log(t);
//     })
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Dohvatanje dokumenata iz kolekcije koji zadovoljavaju odredjene uslove (filtriranje dokumenata)

//Dohvati sve korisnike mladje od 30 godina
// db.collection('customers')
// .where('age', '>=', 30)
// .orderBy('age', 'asc') 
// .orderBy('name', 'desc')
// .limit(2)
// where i order by mogu da se kombinuju po razlicitim poljima ali to povlaci: 
// 1) Da se sva polja navedena u where nalaze i u orderBy
// 2) Da postoji kompozitni indeks za sva polja i redoslede navedene u orderBy
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Document ${id}`);
//         console.log(t);
//     })
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Dohvatiti sve korisnike cija je adresa u Nisu
// db.collection('customers')
// .where('addresses', 'array-contains', 'Nis')
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Document ${id}`);
//         console.log(t);
//     })
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Dohvatiti sve korisnike koji imaju 25 ili 31 godinu
// db.collection('customers')
// .where('age', 'in', [25, 31])
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Document ${id}`);
//         console.log(t);
//     })
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Dohvatiti sve korisnike koji se zovu Pera ili Laza
// db.collection('customers')
// .where('name', 'in', ['Pera', 'Laza'])
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Document ${id}`);
//         console.log(t);
//     })
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Dohvatiti sve korisnike koji zive u Nisu
// db.collection('customers')
// .where('addresses', 'array-contains-any', ['Nis'], 'salary', '>=', 500)
// .where('salary', '>=', 300)
// .where('salary', '<=', 800)
// .where('salary', '<', 900, 'age', '==', 30)
// .where('addresses', 'array contains','Nis', 'Beograd')
// .where('age', '=', '22', '25', '28')
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Document ${id}`);
//         console.log(t);
//     })
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Iz kolekcije tasks, pročitati sve zadatke, i koji:
// db.collection('tasks')
// .where('priority', '==', true)
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Document ${id}`);
//         console.log(t);
//     })
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Treba da se izvrše u tekućoj godini,
let sada = new Date();
let godina = sada.getFullYear();
//let datum1 = new Date(godina, 0, 1); //ovo je prvi januar tekuce godine
let date1 = new Date("2021-12-31 23:59:59");
let date2 = new Date("2021-06-15 17:00:00");
db.collection("tasks")
.where("due_date" , "<=" , date1)
.where("due_date" , ">" , date2)
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        console.log("U tekucoj godini treba da se izvrsi: " + t.title);
    });
})
.catch(err => {
    console.log(err);
})


db.collection("tasks")
.where("due_date" , "<" , date2)
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        console.log("Zavrseni zadaci: " + t.title);
    });
})
.catch(err => {
    console.log(err);
});
//Tek treba da počnu.
db.collection("tasks")
.where("start_due" , ">" , date2)
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        console.log("Tek treba da pocnu: " + t.title);
    });
})
.catch(err => {
    console.log(err);
});