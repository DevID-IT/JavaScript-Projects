//slider varables
const slider = document.querySelector(".slider");

const dotsPlace = [...document.querySelectorAll(".slider__dot")];

//panel variables
const settingsBtn = document.querySelector(".app-main__settings-btn");
const settingsPanel = document.querySelector(".settings");

const eventName = document.querySelector("#event-name");
const eventDay = document.querySelector("#event-day");
const eventMonth = document.querySelector("#event-month");
const eventYear = document.querySelector("#event-year");
const eventImg = document.querySelector("#event-image");

const saveBtn = document.querySelector(".settings__btn-save");
const cancelBtn = document.querySelector(".settings__btn-cancel");

let usersTime = "31-12-2021";
//clock variables
const eventSpan = document.querySelector(".event");

const daysCount = document.querySelector(".card__days-count");
const hoursCount = document.querySelector(".card__hours-count");
const minutesCount = document.querySelector(".card__minutes-count");
const secondsCount = document.querySelector(".card__seconds-count");
// image array
const images = [
  "/pictures/picture1.jpg",
  "/pictures/picture2.jpg",
  "/pictures/picture3.jpg",
  "/pictures/picture4.jpg",
];
// SLIDER
//setts
const time = 5000;
let active = 0;

const changeDots = () => {
  const activeDot = dotsPlace.findIndex((dot) =>
    dot.classList.contains("active")
  );
  dotsPlace[activeDot].classList.remove("active");
  dotsPlace[active].classList.add("active");
};

const changeSlides = () => {
  active++;
  if (active == dotsPlace.length) {
    active = 0;
  }
  slider.style.backgroundImage = `url(${images[active]})`;
  changeDots();
};

let idInterval = setInterval(changeSlides, time);

//COUNTER
const setTime = () => {
  const currentTime = new Date();
  const result = usersTime - currentTime;

  const days = Math.floor(result / 1000 / 60 / 60 / 24);
  const hours = Math.floor(result / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(result / 1000 / 60) % 60;
  const seconds = Math.floor(result / 1000) % 60;
  daysCount.textContent = days < 10 ? `0${days}` : days;
  hoursCount.textContent = hours < 10 ? `0${hours}` : hours;
  minutesCount.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondsCount.textContent = seconds < 10 ? `0${seconds}` : seconds;
};
// SETTINGS

const appUptade = () => {
  eventSpan.textContent = eventName.value;
  if (eventMonth.value > 0 && eventMonth.value < 13) {
    usersTime = new Date(
      `${eventMonth.value} ${eventDay.value} ${eventYear.value}`
    );
  }
  if (eventImg.value) {
    slider.style.backgroundImage = `url('${eventImg.value}')`;
    clearInterval(idInterval);
    dotsPlace.forEach((dot) => {
      dot.style.visibility = "hidden";
    });
  }

  setTime();
};
appUptade();

setInterval(setTime, 1000);
saveBtn.addEventListener("click", appUptade);

settingsBtn.addEventListener("click", () => {
  settingsPanel.classList.toggle("settings--active");
});

cancelBtn.addEventListener("click", () => {
  settingsPanel.classList.remove("settings--active");
});
