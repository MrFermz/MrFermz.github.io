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


    let display = ''
    if (stat.online) {
        let motd = stat.description.text.split('-')
        motd = `-${motd[1]}-`
        display = `
        <div>[${stat.online ? 'online' : 'offline'}]</div>
        <div>IP: ${statIp}</div>
        <div>Motd: ${motd}</div>
        <div>Version: ${stat.version.name}</div>
        <div>Players: ${stat.players.online} / ${stat.players.max}</div>
        <br>
        <div class="avatar-container">
            ${stat.players.sample ? stat.players.sample.map((ele, i) => {
            return (`
                <div class="avatar-wrapper">
                    <div class="avatar-name">${ele.name}</div>
                    <div class="avatar"><img src="https://crafatar.com/renders/body/${ele.id}?overlay=true"></div>
                </div>
            `)
        }).join('') : '<div>-</div>'}
        </div>
    `
    } else {
        display = `
            <div>[${stat.online ? 'online' : 'offline'}]</div>
        `
    }
    document.getElementById('container').innerHTML = display

    // setTimeout(() => {
    //     onLoad()
    // }, timer)
}