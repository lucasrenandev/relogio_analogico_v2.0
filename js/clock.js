const hoursElement = document.getElementById("hours")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")

function Clock() {
    const now = new Date()

    const hours = (360 / 12) * now.getHours()
    const minutes = (360 / 60) * now.getMinutes()
    const seconds = (360 / 60) * now.getSeconds()

    hoursElement.style.transform = `rotate(${hours}deg)`
    minutesElement.style.transform = `rotate(${minutes}deg)`
    secondsElement.style.transform = `rotate(${seconds}deg)`
}

setInterval(Clock, 1000)
Clock()