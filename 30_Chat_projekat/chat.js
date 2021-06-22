export class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }

    //Seteri
    set room(room) {
        this._room = room;
    }
    set username(username) {
        this._username = username;
    }

    //Geteri
    get room() {
        return this._room;
    }
    get username() {
        return this._username;
    }


    updateUsername(uU){
        this.username = uU;
        localStorage.setItem("username", uU);
     
    }

    updateRoom(uR){
        this.room = uR;
        if(this.unsub){
            this.unsub();
        }
        
    }

    async addChat(mess){
        let d = new Date();

        let chat = {
            message: mess,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(d)
        }

        let response = await this.chats.add(chat);
        return response;
    }

    async removeChat(created_at) {
        this.unsub = this.chats
        .where("created_at", "==", created_at)
        .orderBy("created_at")
        .remove()
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if(change.type == "added") {
                    callback(change.doc.data());
                }
            })
        })
    }

    getChats(callback) {
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                // console.log(snapshot.docChanges());
            // Krecemo se nizom promena i trazimo promene koje su izazvale dodavanje dokumenta (added)
            snapshot.docChanges().forEach(change => {
                if(change.type == "added"){
                    // console.log("Promena u bazi");
                    // console.log(change.doc.data()); //Ispis dokumenata koji su dodati u bazu
                    callback(change.doc.data());
                }
            });
        });
    }
}


