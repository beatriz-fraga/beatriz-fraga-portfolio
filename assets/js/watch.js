const watchEl = document.querySelector(".footer-watch");

function getTime() {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const years = date.getFullYear().toString();

  return `${hour}:${minutes}:${seconds}<br/>${day}/${month}/${years}`;
}

setInterval(() => {
  watchEl.innerHTML = getTime();
}, 1000);
