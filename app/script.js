const load = () => {
    document.querySelector('table').hidden = true
    document.querySelector('#loading').hidden = false
    setTimeout(() => {
        document.querySelector('#loading').hidden = true
        document.querySelector('table').hidden = false
    }, 250)
}
