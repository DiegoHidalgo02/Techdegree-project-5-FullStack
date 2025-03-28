const search_input = document.querySelector("#search-input");

function refactorDisplayCards(){

    employees.forEach(element => element.style.display = "flex");

}

function filterArrayEmployes(){

    filteredEmployees = Array.from(employees).filter(employee => employee.style.display === "flex");

}

search_input.addEventListener('keyup', event =>{

    employees.forEach(element => {

        let nameMatch = element.dataset.name.toLowerCase().includes(search_input.value.toLowerCase());
        let nameNotMatch = !element.dataset.name.toLowerCase().includes(search_input.value.toLowerCase());
        let emptyInput = search_input.value === "";
        let notEmptyInput = search_input.value !== "";
        
        if(nameNotMatch && notEmptyInput){

            element.style.display = "none";

        }
        
        if(emptyInput){

            refactorDisplayCards();

        }
        
        filterArrayEmployes();

    });



})