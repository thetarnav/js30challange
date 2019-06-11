var date = new Date(),
    seconds = date.getSeconds(),
    minutes = date.getMinutes() * 60 + seconds,
    hours = date.getHours() * 3600 + minutes;


const setClock = () => {
    hour_hand.style.transform = `rotate(${hours  /3600 /12 * 360}deg)`;
    min_hand.style.transform = `rotate(${minutes /60   /60 * 360}deg)`;
    sec_hand.style.transform = `rotate(${seconds       /60 * 360}deg)`;
    seconds++;
    minutes++;
    hours++;
}


setClock();
setInterval(setClock, 1000);