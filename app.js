let cardCountries = document.getElementById("cardCountries");

let browserBody = "";

fetch("https://restcountries.com/v3.1/all").then((res)=>res.json()).then(data=>{
    data.forEach(element => {
        browserBody += `<div class="col-3">
                            <div class="card" style="width: 18rem; background-color:black; colour:white;">
                                <img src="${element.flags.png}" class="card-img-top" alt="flags">
                                <div class="card-body">
                                    <h5 class="card-title">${element.name.common}</h5>
                                    <p class="card-text">${element.name.official}</p>
                                    <a href="${element.maps.googleMaps}" target="blank" class="btn btn-primary">Goto the Map</a>
                                </div>
                            </div>
                        </div>`
    });

    cardCountries.innerHTML = browserBody;
});

function searchCountry() {
    let userInput = document.getElementById("txtInput").value;

    console.log(userInput);

    let flagImg = document.getElementById("flagImg");
    let countryName = document.getElementById("countryName");
    let officialName = document.getElementById("officialName");
    let region = document.getElementById("region");
    let population = document.getElementById("population");

    fetch(`https://restcountries.com/v3.1/name/${userInput}`).then(res=>res.json()).then(data=>{
        data.forEach(obj=> {
            console.log(obj);
            flagImg.src = obj.flags.png;
            countryName.innerText =  obj.name.common;
            officialName.innterText = obj.name.official;
            region.innerText = obj.region;;
            population.innerText = obj.population;

        });
    });
};
