function updatePlaceholders() {
    let newYork = document.querySelector("#new-york");
    let newYorkData = moment().tz("America/New_York");
    let newYorkDate = newYork.querySelector(".date");
    newYorkDate.innerHTML = newYorkData.format("dddd MMMM D, YYYY");

    let newYorkTime = newYork.querySelector(".time");
    newYorkTime.innerHTML = newYorkData.format(`h:mm:ss [<small>] A[</small>]`);


    let amsterdam = document.querySelector("#amsterdam");
    let amsterdamData = moment.tz("Europe/Amsterdam");
    let amsterdamDate = amsterdam.querySelector(".date");
    amsterdamDate.innerHTML = amsterdamData.format("dddd MMMM D, YYYY");

    let amsterdamTime = amsterdam.querySelector(".time");
    amsterdamTime.innerHTML =amsterdamData.format(`h:mm:ss [<small>] A[</small>]`);

    let edmonton = document.querySelector("#edmonton");
    let edmontonData = moment.tz("America/Edmonton");
    let edmontonDate = edmonton.querySelector(".date");
    edmontonDate.innerHTML = edmontonData.format("dddd MMMM D, YYYY");

    let edmontonTime = edmonton.querySelector(".time");
    edmontonTime.innerHTML = edmontonData.format(`h:mm:ss [<small>] A[</small>]`);    
}

updatePlaceholders();
var update = setInterval(updatePlaceholders, 1000);

function changeCity(event) {
    let timezone = event.target.value;
    if (timezone === "current-location") {
        timezone = moment.tz.guess();
    }
    let currentData = moment.tz(timezone);
    let city = timezone.replace("_"," ").split("/")[1];
    let locationList = document.querySelector(".location-list")
    locationList.innerHTML = `
    <div class="row">
        <div class="col left">
            <div class="name">${city}</div>
            <div class="date">${currentData.format("dddd MMMM D, YYYY")}</div>
        </div>
        <div class="col right">
            <div class="time">${currentData.format(`h:mm:ss [<small>] A[</small>]`)}</div>
        </div>
    </div>
    <a href="index.html" id="home-link"> Go Back to Home Page</a>
    `

    if (timezone != "Europe/Amsterdam" || "America/New_York" || "America/Edmonton") {
        clearInterval(update);
    }
}
let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", changeCity);



