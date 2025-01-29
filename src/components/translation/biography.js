import { createH2 } from "../createElements";

const content = {
    pt: [
        "Olá! Meu nome é Jordan Willian, sou apaixonado por Matemática, Ciência, Tecnologia e Engenharia, \
        o que me levou a cursar as graduações de Ciência e Tecnologia e Engenharia da Computação, ambas pela \
        Universidade Federal do Maranhão.",

        "Eu venho me dedicando principalmente à Engenharia de Software, Desenvolvimento Web e \
        Desenvolvimento Mobile. Esse ecossistema que é tão presente no dia a dia das pessoas e crucial \
        para as empresas. Eu busco não apenas aprender as tecnologias, mas também compreender o seu \
        impacto em nossa sociedade atual e futura.",
        "Tenho especial interesse por áreas como a Realidade Mista, Metaverso, \
        Realidade Aumentada e Virtual. Essas tecnologias recentes prometem mudar\
        a forma como interagimos na Internet e nossa percepção da realidade. Um novo\
        ramo da computação a ser desbravado por engenheiros, cientistas e amantes da tecnologia.",

        "Comecei a me aventurar pelo mundo da escrita, como um hobby, e \
        comecei a escrever pequenos, mas informativos, e-books sobre ciências."
    ],
    en: [
        "Hello! My name is Jordan Willian, I am passionate about Mathematics, Science, Technology, and Engineering, \
        which led me to pursue degrees in Science and Technology and Computer Engineering, both at the \
        Federal University of Maranhão in São Luís, MA, Brazil.",

        "I have been mainly dedicating myself to Software Engineering, Web Development, and \
        Mobile Development. This ecosystem is so present in people's daily lives and crucial \
        for companies. I strive not only to learn the technologies but also to understand their \
        impact on our current and future society.",

        "I have a special interest in areas such as Mixed Reality, Metaverse, \
        Augmented and Virtual Reality. These recent technologies promise to change \
        the way we interact on the Internet and our perception of reality. A new \
        branch of computing to be explored by engineers, scientists, and technology enthusiasts.",

        "I started to venture into the world of writing as a hobby and \
        began writing small but informative e-books about sciences."
    ],
    ru: [
        "Привет! Меня зовут Джордан Уильян, я увлекаюсь математикой, наукой, технологией и инженерией, \
        что привело меня к получению степеней в области науки и технологий, а также компьютерной инженерии, обе в \
        Федеральном университете Мараньяна в Сан-Луисе, MA, Бразилия.",

        "В последнее время я в основном занимаюсь программной инженерией, веб-разработкой и \
        мобильной разработкой. Эта экосистема настолько присутствует в повседневной жизни людей и имеет важное \
        значение для компаний. Я стремлюсь не только изучать технологии, но и понимать их \
        влияние на наше настоящее и будущее общество.",

        "Я особо интересуюсь такими областями, как смешанная реальность, метавселенная, \
        дополненная и виртуальная реальность. Эти новые технологии обещают изменить \
        способ, которым мы взаимодействуем в Интернете, и наше восприятие реальности. Новая \
        отрасль вычислительной техники, которую должны изучать инженеры, ученые и любители технологий.",

        "Я начал увлекаться миром писательства в качестве хобби и \
        начал писать небольшие, но информативные электронные книги о науках."
    ]


}

const titleTranslate = {
    pt: 'Biografia',
    en: 'Biography',
    ru: 'Биография'
};

const sectionBiography = document.querySelector('.biography')

const translateBiography = (lang) => {
    sectionBiography.innerHTML = ''
    const h2 = createH2(titleTranslate[lang])
    sectionBiography.appendChild(h2)
    const con = content[lang].map(cont => `<p class="information__text">${cont}</p>`).join('')
    sectionBiography.innerHTML += con
}

export default translateBiography