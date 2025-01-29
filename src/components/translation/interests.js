import { createH2 } from "../createElements";

const titleTranslate = {
    pt: 'Interesses',
    en: 'Interests',
    ru: 'Интересы' // "Interesses" em russo
};

const content = {
    pt: [
        {
            title: 'Educação e Metaverso',
            text: 'Tenho grande interesse na forma como o metaverso pode proporcionar alterações profundas na forma como aprendemos e descobrimos novas coisas.'
        },
        {
            title: 'Escrita',
            text: 'O meu gosto por ler me levou a começar a escrever. Atualmente, tenho um pequeno e-book escrito e há mais por vir.'
        }
    ],
    en: [
        {
            title: 'Education and Metaverse',
            text: 'I am very interested in how the metaverse can bring profound changes to the way we learn and discover new things.'
        },
        {
            title: 'Writing',
            text: 'My love for reading led me to start writing. Currently, I have a small e-book written and more to come.'
        }
    ],
    ru: [
        {
            title: 'Образование и Метавселенная',
            text: 'Меня очень интересует, как метавселенная может принести глубокие изменения в способах нашего обучения и открытия нового.'
        },
        {
            title: 'Писательство',
            text: 'Моя любовь к чтению привела меня к тому, чтобы начать писать. В настоящее время у меня есть небольшая электронная книга, и впереди еще много интересного.'
        }
    ]
};

const createItem = (h3Text, pText) => {
    const div = document.createElement('div');
    div.classList.add('interests__content-item');

    const h3 = document.createElement('h3');
    h3.classList.add('interests__item-title');
    h3.innerText = h3Text;

    const p = document.createElement('p');
    p.classList.add('interests__item-text');
    p.innerText = pText;

    div.appendChild(h3);
    div.appendChild(p);

    return div;
};

const interests = document.querySelector('.interests');

const translateInterests = (lang) => {
    interests.innerHTML = '';

    const h2 = createH2(titleTranslate[lang]);
    interests.appendChild(h2); 

    const con = content[lang];

    con.forEach((item) => {
        const obj = createItem(item.title, item.text);
        interests.appendChild(obj);
    });
};

export default translateInterests;

