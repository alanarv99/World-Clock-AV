function updateTime() {
  let athensDateElement = document.querySelector("#athensDate");
  let athensTimeElement = document.querySelector("#athensTime");
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
setInterval(updateTime);
