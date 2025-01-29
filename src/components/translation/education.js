import { createH2 } from "../createElements";

const titleTranslate = {
    pt: 'Educação',
    en: 'Education',
    ru: 'Образование' // "Educação" em russo
};

const content = {
    pt: [
        {
            smallText: '2024',
            degree: 'Bacharel em Engenharia da Computação',
            education: 'Universidade Federal do Maranhão',
            location: 'São Luís, MA'
        },
        {
            smallText: '2019',
            degree: 'Bacharel em Ciência e Tecnologia',
            education: 'Universidade Federal do Maranhão',
            location: 'São Luís, MA'
        }
    ],
    en: [
        {
            smallText: '2024',
            degree: 'Bachelor in Computer Engineering',
            education: 'Federal University of Maranhão',
            location: 'São Luís, MA, Brazil'
        },
        {
            smallText: '2019',
            degree: 'Bachelor in Science and Technology',
            education: 'Federal University of Maranhão',
            location: 'São Luís, MA, Brazil'
        }
    ],
    ru: [
        {
            smallText: '2024',
            degree: 'Бакалавр компьютерной инженерии',
            education: 'Федеральный университет Мараньяна',
            location: 'Сан-Луис, МА, Бразилия'
        },
        {
            smallText: '2019',
            degree: 'Бакалавр в области науки и технологий',
            education: 'Федеральный университет Мараньяна',
            location: 'Сан-Луис, МА, Бразилия'
        }
    ]
};

const createItem = (smallText, h3Text, h4Text, pText) => {
    const div = document.createElement('div');
    div.classList.add('education__content-item');

    const small = document.createElement('small');
    small.classList.add('education__year');
    small.innerText = smallText;

    const h3 = document.createElement('h3');
    h3.classList.add('education__institution');
    h3.innerText = h3Text;

    const h4 = document.createElement('h4');
    h4.classList.add('education__institution');
    h4.innerText = h4Text;

    const p = document.createElement('p');
    p.classList.add('education__location');
    p.innerText = pText;

    div.appendChild(small);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(p);

    return div;
};

const education = document.querySelector('.education');

const translationEducation = (lang) => {

    education.innerHTML = ''

    const h2 = createH2(titleTranslate[lang]);
    education.appendChild(h2); // Insere o <h2> no início da seção

    const con = content[lang];

    con.forEach((item) => {
        const obj = createItem(item.smallText, item.degree, item.education, item.location);
        education.appendChild(obj);
    });
};

export default translationEducation;
