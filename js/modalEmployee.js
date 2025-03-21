const gallery = document.querySelector("#gallery");
let index = 0;
let cardEmployeeModal;
const modal_container = document.querySelector(".modal-container");
const modal_close_btn = document.querySelector("#modal-close-btn");

function updateModal(card){

    const modal_img =  document.querySelector(".modal-img");
    modal_img.src = card.dataset.imgLarge;

    const modal_name = document.querySelector(".modal-name");
    modal_name.textContent = card.dataset.name;

    const modal_email = document.querySelector("#modal-email");
    modal_email.textContent = card.dataset.email;

    const modal_city = document.querySelector("#modal-city");
    modal_city.textContent = card.dataset.city;

    const modal_number = document.querySelector("#modal-number");
    modal_number.textContent = card.dataset.number;

    const modal_position = document.querySelector("#modal-position");
    modal_position.textContent = card.dataset.position;

    const modal_birthday = document.querySelector("#modal-birthday");
    modal_birthday.textContent = `Birthday: ${card.dataset.birthday}`

}

function prevModal(){

    if(index !== 0){

        index--;
        cardEmployeeModal = filteredEmployees[index];

    }else{

        index = filteredEmployees.length - 1;
        cardEmployeeModal = filteredEmployees[index];

    }

    if(filteredEmployees.length - 1 !== 0){ //controll if there are more than one element in gallery
        updateModal(cardEmployeeModal);        
    }
    
}

function nextModal(){

    if(index === filteredEmployees.length - 1){

        index = 0;
        cardEmployeeModal = filteredEmployees[index];

    }else{

        index++;
        cardEmployeeModal =  filteredEmployees[index];        

    }

    if(filteredEmployees.length - 1 !== 0){
        updateModal(cardEmployeeModal);
    }
}   

window.prevModal = prevModal;
window.nextModal = nextModal;


gallery.addEventListener("click", event => {

    const card = event.target.closest(".card");

    if(!card) return;

    modal_container.style.display = "block";

    index = Array.from(filteredEmployees).indexOf(card);    

    updateModal(card);

})


modal_close_btn.addEventListener("click", event => {

    if(modal_container.style.display !== "none"){
        modal_container.style.display = "none";
    }

})

