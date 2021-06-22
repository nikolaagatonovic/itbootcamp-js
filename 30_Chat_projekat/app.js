import {Chatroom} from './chat.js';
import {ChatUI} from './ui.js'

//DOM
let ulChatList = document.querySelector('ul');
let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector('#inputMessage');
let formUsername = document.querySelector('#formUsername');
let inputUsername = document.querySelector('#inputUsername');
let navRooms = document.querySelector("nav");
let btnRooms = navRooms.querySelectorAll("button.room");
let btnsDelete = document.querySelector("ul.chats");
let colorPick = document.querySelector("#colorPick");
let formColor = document.querySelector("#formColor")

//Citamo iz lokalne memorije username, ukoliko postoji. U suprotnom username je anonymus.
 
let username = () => {
    if (localStorage.getItem("username") === null) {
        return "anonymus";
      }
     else {
        return localStorage.username;
    }
}

if(localStorage.getItem("pickedColor") === null) {
    document.body.style.backgroundColor = "white";
}
else {
    let LSC = localStorage.getItem("pickedColor");
    document.body.style.backgroundColor = LSC;
}

//Citamo iz lokalne memorije room, ukoliko postoji. U suprotnom default room je general.
let room = () => {
    if(localStorage.room) {
        return localStorage.room;
    } else {
        return "general";
    }
}

//Kreiramo objekat klase Chatroom
let chatroom2 = new Chatroom(room(), username());

//Kreiranje objekat klase ChatUI
let chatUI1 = new ChatUI(ulChatList)

//Kada se ucitava prvi put stranica ispisemo cetove na njoj  
 
chatroom2.getChats(data => {
    chatUI1.templateLI(data);
});

//Kada je submit dugme Send onda posalji poruku i onemoguciti slanje prazne poruke
formMessage.addEventListener('submit', e => {
    e.preventDefault();
    let poruka = inputMessage.value;
    if(!poruka.replace(/\s/g, '').length){
        return 0;
    }
    else{
    chatroom2.addChat(poruka)
        .then(() => formMessage.reset())
        .catch(error => console.log(error))
    }
});

// Promena boje pozadine
formColor.addEventListener("submit", e => {
    e.preventDefault();
    setTimeout(function() {
        let pickedColor = colorPick.value;
        document.body.style.backgroundColor = pickedColor;
        localStorage.setItem("pickedColor", pickedColor);

    }, 500);
})

// Kada je submit dugme Update onda izmeni korisnicko ime
formUsername.addEventListener('submit', e => {
    e.preventDefault();
    let username = inputUsername.value;
    let UNlngth = username.length;
    if((UNlngth < 2 || UNlngth > 10) || (!username.replace(/\s/g, '').length)) {
        alert("Korisnicko ime mora biti izmedju 2 i 10 karaktera duzine");
    }
    else{
        chatroom2.updateUsername(username);
        formUsername.reset();
        localStorage.setItem("username", username);
        let pMessage = document.createElement('p');
            pMessage.style.fontWeight = "bold";
            pMessage.style.fontSize = "18px";
            pMessage.textContent = `Odabrani chat nickname je: ${username}`;
            threeSeconds.appendChild(pMessage);
            document.getElementById('threeSeconds').className += ' hidden';
        setTimeout(function(){
            let deleting = document.getElementById("threeSeconds");
            deleting.parentNode.removeChild(deleting);
        }, 3000);
    } 
});


// Dugmad za promenu soba
navRooms.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
        btnRooms.forEach(room => {
            room.classList.remove("active")
        });
     let activeRoom = e.target;
      chatUI1.clearUl();
        let newRoom = e.target.id
    chatroom2.updateRoom(newRoom);
    activeRoom.classList.add("active");
    chatroom2.getChats(chat => {
        chatUI1.templateLI(chat);
    })
}
});


btnsDelete.addEventListener("click", (e) => {
    const isButton = e.target.nodeName === "BUTTON";
    if (!isButton) {
        return;
    }

    chatroom2.removeChat(e.target.id)
    console.log("trash", e.target.id);
});