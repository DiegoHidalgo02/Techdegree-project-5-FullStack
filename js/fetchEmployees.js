const apiLink = 'https://randomuser.me/api/?results=12';
let employees;
let filteredEmployees = [];

async function fetchEmployees(url){

    try{

        const response = await fetch(url);

        const JSONResponse = await response.json();

        return  JSONResponse.results;

    }catch{

        throw error;

    }

}

function generateHTML(arrayEmployees){

    const gallery = document.querySelector("#gallery");

    arrayEmployees.forEach(element => {

        const nameText = element.name.first + " " + element.name.last; 
        const emailText = element.email;
        const birthdayText = element.dob.date.slice(0, 10).replaceAll("-", "/");
        const numeberText = element.phone;
        const cityText = element.location.city;
        const stateText = element.location.state;
        const postalCodeText = element.location.postcode;
        const countryText = element.location.country;
        const streetNameText = element.location.street.name;
        const civicNumberText = element.location.street.snumber;
        
        //CARD
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.name = nameText;
        card.dataset.imgLarge = element.picture.large;
        card.dataset.email = emailText;
        card.dataset.city = cityText;
        card.dataset.state = stateText;
        card.dataset.birthday = birthdayText;
        card.dataset.number = numeberText;
        card.dataset.position = `${civicNumberText} ${streetNameText}., ${cityText} ${countryText} ${postalCodeText}`;

        //IMAGE
        const card_img_container = document.createElement("div");
        card_img_container.className = "card-img-container";

        const card_img = document.createElement("img");
        card_img.src = element.picture.medium;
        card_img.alt = "profile picture";
        card_img.className = "card-img";

        card_img_container.appendChild(card_img);
        ////////////////////////////////////////////////////////////

        //CONTAINER INFO
        const card_info_container = document.createElement("div");
        card_info_container.className = "card-info-container";

        const name = document.createElement("h3");
        name.id = "name";
        name.classList.add("card-name", "cap");
        name.textContent = nameText;

        const email = document.createElement("p");
        email.className = "card-text";
        email.textContent = emailText;

        const cityAndState = document.createElement("p");
        cityAndState.classList.add("card-text", "cap");
        cityAndState.textContent = `${cityText}, ${stateText}`;
        /////////////////////////////////////////////////////////////


        //APPEND ELEMENTS
        [name, email, cityAndState].forEach(element => card_info_container.append(element));

        card.append(card_img_container);
        card.append(card_info_container);

        gallery.append(card);

    });

}


async function executeFetch(){

    const dataEmployees = await fetchEmployees(apiLink);

    await generateHTML(dataEmployees);

    employees = document.querySelectorAll(".card");

}

executeFetch();