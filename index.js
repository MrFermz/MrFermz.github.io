
setInterval(anni, 1000)

function anni() {
    var format = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    var now = new Date()
    var nowYears = now.getFullYear()
    var nowMonths = now.getMonth() + 1
    var nowDays = now.getDate()
    var nowHours = now.getHours()
    var nowMins = now.getMinutes()
    var nowSecs = now.getSeconds()

    var start = new Date('July 02, 2015 00:00:00')
    var startYears = start.getFullYear()
    var startMonths = start.getMonth() + 1
    var startDays = start.getDate()
    var startHours = start.getHours()
    var startMins = start.getMinutes()
    var startSecs = start.getSeconds()

    var year = sub(nowYears, startYears)
    var month = sub(nowMonths, startMonths)
    var day = sub(nowDays, startDays)
    var hour = sub(nowHours, startHours)
    var min = sub(nowMins, startMins)
    var sec = sub(nowSecs, startSecs)

    var anni = `${year} ปี ${month} เดือน ${day} วัน ${hour}:${min}:${sec} น.`
    var Now = now.toLocaleString('th-th', format)
    var Start = start.toLocaleString('th-th', format)

    // console.log(nowMonths, startMonths)

    document.getElementById('now').innerHTML = Now
    document.getElementById('start').innerHTML = Start
    document.getElementById('anniver').innerHTML = anni
}

function sub(a, b) {
    if (a > b) {
        return a - b
    } else {
        return b - a
    }
}
