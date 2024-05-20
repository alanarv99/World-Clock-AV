function updateTime() {
  let athensDateElement = document.querySelector(".date");
  let athensTimeElement = document.querySelector(".time");
  let athensTime = moment().tz("Europe/Athens");
  athensDateElement.innerHTML = athensTime.format("MMMM Do YYYY");
  athensTimeElement.innerHTML = athensTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisDateElement = document.querySelector("#parisDate");
  let paristimeElement = document.querySelector("#parisTime");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  paristimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  let tokyoDateElement = document.querySelector("#tokyoDate");
  let tokyotimeElement = document.querySelector("#tokyoTime");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyotimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  let kolkataDateElement = document.querySelector("#kolkataDate");
  let kolkatatimeElement = document.querySelector("#kolkataTime");
  let kolkataTime = moment().tz("Asia/Kolkata");
  kolkataDateElement.innerHTML = kolkataTime.format("MMMM Do YYYY");
  kolkatatimeElement.innerHTML = kolkataTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}
function updateCityDropdown(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment.tz(cityTimezone);
  console.log(cityTime.format("MMMM Do YYYY"));
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>
  `;
}

setInterval(updateTime);

let cityDropdownSelectElement = document.querySelector("#cityDropdown");
cityDropdownSelectElement.addEventListener("change", updateCityDropdown);
