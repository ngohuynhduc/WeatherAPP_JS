const temp = document.querySelector("#temp");
const city = document.querySelector("#city");
const dateTime = document.querySelector("#date-time");
const statusIcon = document.querySelector("#status-icon");
const weatherStatus = document.querySelector("#status");
const input = document.querySelector(".sidebar__search__input");
const cloudyInfo = document.querySelector("#cloudy");
const humidityInfo = document.querySelector("#humidity");
const windInfo = document.querySelector("#wind-speed");
const buttonSearch = document.querySelector(".sidebar__search__btn");

function showData() {
  inputValue = input.value;
  inputValue = inputValue ? inputValue : "Hanoi";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue +
      "&appid=1e9e08c5b6abe427217aaf6525ff1a44"
  )
    .then((res) => res.json())
    .then((data) => {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let tempValue = (data.main.temp - 273.15).toFixed(0);
      let cityValue = data.name;
      let dateTimeValue = new Date();
      let weatherIcon = data.weather[0].icon;
      let statusValue = data.weather[0].main;
      let cloudyValue = data.clouds.all;
      let humidityValue = data.main.humidity;
      let windSpeedValue = (data.wind.speed * 3.6).toFixed(1);
      temp.innerHTML = `${tempValue}<sup>o</sup>`;
      city.innerHTML = cityValue;
      dateTime.innerHTML = `${("0" + dateTimeValue.getHours()).slice(-2)} : ${(
        "0" + dateTimeValue.getMinutes()
      ).slice(-2)} - ${
        days[dateTimeValue.getDay()]
      }, ${dateTimeValue.getDate()} ${
        months[dateTimeValue.getMonth()]
      } ${dateTimeValue.getFullYear()}`;
      statusIcon.src =
        "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
      weatherStatus.innerHTML = statusValue;
      cloudyInfo.innerHTML = cloudyValue + "%";
      humidityInfo.innerHTML = humidityValue + "%";
      windInfo.innerHTML = windSpeedValue + "km/h";
    });
}
buttonSearch.addEventListener("click", () => {
  showData();
  input.value = "";
});
showData();