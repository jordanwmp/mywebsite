const getLanguage = () => {

    let language = navigator.language || navigator.userLanguage;
    let mainLanguage = language.substring(0, 2)
   
    switch(mainLanguage) {
        case 'pt':
           return 'pt'
        case 'ru':
           return 'ru'
        default:
            return 'en'
    }
}

export default getLanguage