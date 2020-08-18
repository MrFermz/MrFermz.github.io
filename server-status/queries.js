var http = new XMLHttpRequest()

function queriesGET(params) {
    http.open('GET', params)
    http.send()
    return new Promise(function (resolve, reject) {
        http.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let data = JSON.parse(this.responseText)
                resolve(data)
            }
        }
    })
}
