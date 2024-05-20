function updateTime() {
  let athensElement = document.querySelector("#athens");
  if (athensElement) {
    let athensDateElement = athensElement.querySelector(".date");
    let athensTimeElement = athensElement.querySelector(".time");
    let athensTime = moment().tz("Europe/Athens");

    athensDateElement.innerHTML = athensTime.format("MMMM Do YYYY");
    athensTimeElement.innerHTML = athensTime.format(
      "h:mm:ss [<small>] A[</small>]"
    );
  }
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let paristimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    paristimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>] A[</small>]"
    );
  }
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyotimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyotimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>] A[</small>]"
    );
  }
  let kolkataElement = document.querySelector("#kolkata");
  if (kolkataElement) {
    let kolkataDateElement = kolkataElement.querySelector(".date");
    let kolkataTimeElement = kolkataElement.querySelector(".time");
    let kolkataTime = moment().tz("Asia/Kolkata");
    kolkataDateElement.innerHTML = kolkataTime.format("MMMM Do YYYY");
    kolkataTimeElement.innerHTML = kolkataTime.format(
      "h:mm:ss[<small>] A[</small>]"
    );
  }
}
function updateCityDropdown(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment.tz(cityTimeZone);
  console.log(cityTime.format("MMMM Do YYYY"));
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small> ${cityTime.format("A")}</small></div>
        </div>
  `;
}

setInterval(updateTime);

let cityDropdownSelectElement = document.querySelector("#cityDropdown");
cityDropdownSelectElement.addEventListener("change", updateCityDropdown);
