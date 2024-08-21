// get the diallines
const diallines = document.getElementsByClassName("diallines");

// Get the clock
const clockE1 = document.getElementById("clock");

// Draw the Diallines
for( let i = 1; i <60; i++ ) {
    clockEl.innerHTML += '<div class="diallines"></div>';
    dialLines[i].style.transform = 'rotate($(6 * i) deg)'
}

// Make the clock
function clock() {
    // Variables
    const d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
        date = d.getDate(),
        month = d.getMonth(),
        year = d.getFullYear(),

        // calculate the clockwork
        hdeg = h * 30 + m * (360 / 720);
        mDeg = m * 6 + s * (360 / 3600);
        sDeg = s * 6;

        // get the hands
        hourEl = document.querySelector(".hour-hand");
        minEl = document.querySelector(".minute-hand");
        secEl = document.querySelector(".second-hand");
        dateEl = document.querySelector(".date");

        //Set the clcokwork
        hourEl.style.transform = 'rotate(${hDeg}deg)';
        minEl.style.transform = 'rotate(${mDeg}deg';
        secEl.style.transform = 'rotate(${mDeg}deg';

        //display the full date
        dateEl.innerHTML = '${date}/${month}/${year}';

}

// Update the clock every seconds
setInterval("clock()", 100);