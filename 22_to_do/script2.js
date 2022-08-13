let liElementi = document.querySelectorAll(".mojaLista li")
liElementi.forEach(li => {
    li.addEventListener("click", () => {
        li.classList.toggle('precrtano');
    });
});

