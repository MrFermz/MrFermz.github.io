if (localStorage.getItem('skinType')) {
    var SKIN_TYPE = localStorage.getItem('skinType')
} else {
    var SKIN_TYPE = `body3d`
    localStorage.setItem('skinType', SKIN_TYPE)
}


async function onLoad() {
    // load server status
    let statProtocol = config.statusServer.protocol
    let statHost = config.statusServer.host
    let statUrl = config.statusServer.url
    let statIp = config.statusServer.ip
    let statReq = `${statProtocol}://${statHost}/${statUrl}/${statIp}`
    let stat = await queriesGET(statReq)
    // let timer = stat.cache.ttl * 1000
    console.log(stat)
    let options = [
        { id: 'head2d', label: 'head 2d' },
        { id: 'head3d', label: 'head 3d' },
        { id: 'body3d', label: 'body 3d' },
    ]


    let display = ''
    if (stat.online) {
        // let motd = stat.description.text.split('-')
        let motd = stat.description.text
        motd = `-${motd}-`
        display = `
        <div>[${stat.online ? 'online' : 'offline'}]</div>
        <div>IP: ${statIp}</div>
        <div>Motd: ${motd}</div>
        <div>Version: ${stat.version.name}</div>
        <div>Players: ${stat.players.online} / ${stat.players.max}</div>
        <br>
        <div>
            <label for="select-type">Choose display: </label>
            <select class="select-type" id="select-type">
                ${options.map((ele, i) => {
            return (`
                    <option value="${ele.id}">${ele.label}</option>    
                `)
        }).join('')}
            </select>
        </div>

        <div class="avatar-container">
        ${stat.players.sample && SKIN_TYPE == 'head2d' ? stat.players.sample.map((ele, i) => {
            return (`
                <div class="avatar-wrapper">
                    <div class="avatar-name">${ele.name}</div>
                    <div class="avatar"><img src="https://crafatar.com/avatars/${ele.id}"></div>
                </div>
            `)
        }).join('') : ``}
        ${stat.players.sample && SKIN_TYPE == 'head3d' ? stat.players.sample.map((ele, i) => {
            return (`
                <div class="avatar-wrapper">
                    <div class="avatar-name">${ele.name}</div>
                    <div class="avatar"><img src="https://crafatar.com/renders/head/${ele.id}?overlay=helm"></div>
                </div>
            `)
        }).join('') : ``}
        ${stat.players.sample && SKIN_TYPE == 'body3d' ? stat.players.sample.map((ele, i) => {
            return (`
                <div class="avatar-wrapper">
                    <div class="avatar-name">${ele.name}</div>
                    <div class="avatar"><img src="https://crafatar.com/renders/body/${ele.id}?overlay"></div>
                </div>
            `)
        }).join('') : ``}
        </div >`
    } else {
        display = `
            < div > [${ stat.online ? 'online' : 'offline'}]</div >
            `
    }
    document.getElementById('container').innerHTML = display
    document.getElementById('select-type').value = SKIN_TYPE


    // add event ddl
    let select = document.getElementById('select-type')
    select.addEventListener('change', function (e) {
        switch (e.target.value) {
            case 'head2d':
                SKIN_TYPE = e.target.value
                localStorage.setItem('skinType', e.target.value)
                onLoad()
                break
            case 'head3d':
                SKIN_TYPE = e.target.value
                localStorage.setItem('skinType', e.target.value)
                onLoad()
                break
            case 'body3d':
                SKIN_TYPE = e.target.value
                localStorage.setItem('skinType', e.target.value)
                onLoad()
                break
        }
    })
}