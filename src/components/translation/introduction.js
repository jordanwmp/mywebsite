const title = document.querySelector('.introduction__title')
const subtitle = document.querySelector('.introduction__subtitle')

const translateInfo = (lang) =>{
    const info = {
        title: 'Jordan Willian',
        subtitle: "Bacharel em Ciência e Tecnologia <br>e Engenharia da Computação"
    }

    switch(lang){
        case 'en':
            info.subtitle = "Bachelor's in Science and Technology <br> and Computer Engineering"
            break
        case 'ru':
            info.title = "Джордан Уильян"
            info.subtitle = "Бакалавр науки и технологий <br> и компьютерной инженерии"
    }

    title.innerHTML = info.title
    subtitle.innerHTML = info.subtitle
}

export default translateInfo