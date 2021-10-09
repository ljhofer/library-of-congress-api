//Varibles for search area variables
let searchButton = $("#search-button");
let inputField = $("#inputField");
let dropDown = $("#drop-down");


// Global variables
let currentSearch = "";


// function startPage(){





// }


function getAPI(currentSearch) {
    requestURL= "https://www.loc.gov/search/?q=" + currentSearch + "&fo=json";

    fetch(requestURL)
        .then(function(response){
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    
                   
                })
             // Alerts user if there is an error or if their input is invalid    
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function(error){
            alert("Unable to connect to Weather Dashboard");
        })



}


function populateCards() {



}











searchButton.click(function(event) {
    event.preventDefault();
    currentSearch = inputField.val();
    // searchFormat = dropDown.val();
    getAPI(currentSearch);
    

})


//TODO: Button down for input field