const counttime = () => {
    const date = new Date()
    postMessage(date)
    setTimeout(counttime,1000)
}

counttime()