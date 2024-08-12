const monthEl = document.getElementById("month");
const weekEl = document.getElementById("week");
const dayEl = document.getElementById("day");
const yearEl = document.getElementById("year");

const date = new Date();
monthEl.innerText = date.toLocaleDateString(undefined, {
    month: "long",
});
weekEl.innerText = date.toLocaleDateString(undefined, {
    weekday: "long"
});
dayEl.innerText = date.toLocaleDateString(undefined, {
    day: "numeric",
});
yearEl.innerText = date.toLocaleDateString(undefined, {
    year: "numeric",
});

