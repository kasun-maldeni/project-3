function findTime() {
    let currentDate = new Date
    currentDate = currentDate.toString()
    let currentDateParts = currentDate.split(" ")
    return currentDateParts[4]
}

function getTimeEverySecond() {
    return setInterval(findTime(), 1000)
}


console.log(getTimeEverySecond())