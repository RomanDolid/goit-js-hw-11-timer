import './css/style.css';

const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minsRef = document.querySelector('[data-value="mins"]');
const secsRef = document.querySelector('[data-value="secs"]');

const date = new Date('Apr 19, 2021');

function setTime(time) {
  let days = pad(Math.floor(time / 1000 / 60 / 60 / 24));
  let hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  let mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  let secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}
function setCounterDate(value) {
  daysRef.textContent = value.days;
  hoursRef.textContent = value.hours;
  minsRef.textContent = value.mins;
  secsRef.textContent = value.secs;
}

setInterval(() => {
  const currentDate = Date.now();
  const delta = date.getTime() - currentDate;
  let x = setTime(delta);
  setCounterDate(x);
}, 1000);

function pad(el) {
  return String(el).padStart(2, '0');
}
