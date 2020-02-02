
setInterval(anni, 1000)

function anni() {
    var format = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    // now date
    var now = new Date()
    var nowYears = now.getFullYear()
    var nowMonths = now.getMonth() + 1
    var nowDays = now.getDate()
    var nowHours = now.getHours()
    var nowMins = now.getMinutes()
    var nowSecs = now.getSeconds()

    // set date
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

    if (nowMonths < startMonths) {
        year -= 1
    }

    var Now = now.toLocaleString('th-th', format)
    var Start = start.toLocaleString('th-th', format)
    var remain = `คบแล้ว ~ ${year} ปี ${sub(12, month)} เดือน ${day} วัน ${hour}:${min}:${sec} น.`
    var anni = `ครบรอบอีก ~ ${month} เดือน ${day + 1} วัน`

    // console.log(nowYears, startYears)
    // console.log(nowMonths, startMonths)
    // console.log(nowDays, startDays)

    document.getElementById('now').innerHTML = Now
    document.getElementById('start').innerHTML = Start
    document.getElementById('remain').innerHTML = remain
    document.getElementById('anni').innerHTML = anni
}

sub = (a, b) => Math.abs(a - b)

// coder Mr.Fermz