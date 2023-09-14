AOS.init();

const eventDate = new Date("2023-09-19T16:00:00");
const eventTimeStamp = eventDate.getTime();

const counter = setInterval(() => {
  const now = new Date();
  const currentTimeStamp = now.getTime();

  const timeToEvent = eventTimeStamp - currentTimeStamp;

  const daysToEvent = Math.floor(timeToEvent / (1000 * 60 * 60 * 24));
  const hoursToEvent = Math.floor(
    (timeToEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesToEvent = Math.floor(
    (timeToEvent % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsToEvent = Math.floor((timeToEvent % (1000 * 60)) / 1000);

  document.getElementById(
    "counter"
  ).innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}min ${secondsToEvent}s`;

  if (timeToEvent < 0) {
    clearInterval(counter);
    document.getElementById("counter").innerHTML = "Evento expirado";
  }
}, 1000);
