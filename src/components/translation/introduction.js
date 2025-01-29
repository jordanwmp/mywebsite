const title = document.querySelector('.introduction__title')
const subtitle = document.querySelector('.introduction__subtitle')

const translateInfo = (lang) =>{
    const info = {
        title: 'Jordan Willian',
        subtitle: "Bacharel em Ciência e Tecnologia <br>e Engenharia da Computação"
    }

    switch(lang){
        case 'en':
            info.subtitle = "Bachelor's Degree in Science and Technology and<br> Computer Engineering"
            break
        case 'ru':
            info.title = "Джордан Уильян"
            info.subtitle = "Степень бакалавра в области науки и технологий и<br> компьютерной инженерии"
    }

    title.innerHTML = info.title
    subtitle.innerHTML = info.subtitle
}

export default translateInfo