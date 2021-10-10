//Varibles for search and result areas
let searchButton = $("#search-button");
let inputField = $("#inputField");
let dropDown = $("#drop-down");
let resultsDiv = document.getElementById("#results-div");
let mainDiv = document.getElementById("main-div");



// Global variables
let currentSearch = "";


// function startPage(){

// }

// Queries the API based on user search criteria
function getAPI(currentSearch) {
    requestURL= "https://www.loc.gov/search/?q=" + currentSearch + "&fo=json";
    
    fetch(requestURL)
        .then(function(response){
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    let results = (data.results);
                    populateCards(results);                    
                   
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

// Populates the card with the data from the query
function populateCards(results) {       
    $(results).each(function (i){ 
    let template = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${results[i].title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${results[i].date}</h6>
                <p class="card-text">${results[i].subject}</p>
                <p class="card-text">${results[i].description}</p>
                <a href="#" class="card-link">Card link</a>
            </div>
        </div>
    `;
    mainDiv.insertAdjacentHTML("beforeend", template);

    })
    
}

// Event listener for search button
searchButton.click(function(event) {
    event.preventDefault();
    currentSearch = inputField.val();
    // searchFormat = dropDown.val();
    getAPI(currentSearch);
})

// Event listener for pressing enter rather than on the search button
$("#inputField").on("keypress", function(event) {

    if (event.key === "Enter"){
        event.preventDefault();
        currentSearch = inputField.val();
        getAPI(currentSearch);
    }
})