const createH2 = (text, _class = 'information__title') => {
    const h2 = document.createElement('h2')
    h2.classList.add(_class)
    h2.innerText = text
    return h2
}

export {
    createH2
}