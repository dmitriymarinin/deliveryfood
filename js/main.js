const cardButton = document.querySelector("#card-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const buttonClose= document.querySelector(".buttonClose");

cardButton.addEventListener('click', function (event) {
    modal.classList.add("is-open");

});

close.addEventListener('click', function (event) {
    modal.classList.remove("is-open");

});

buttonClose.addEventListener('click', function (event) {
    modal.classList.remove("is-open");

});
new WOW().init();

// счетик


