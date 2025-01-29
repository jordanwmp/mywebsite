import { createH2 } from "../createElements";

const titleTranslate = {
    pt: 'Experiência',
    en: 'Experience',
    ru: 'Опыт' // "Experiência" em russo
};

const content = {
    pt: [
        {
            smallText: '2023 - 2024',
            title: 'Programador Mobile | Full Stack | Noby Academy',
            desc: 'Desenvolvi aplicativo mobile e plataforma web. Tecnologias: Angular, Ionic, Typescript, Firebase, OpenAI API e Node.js',
            location: 'Remoto'
        },
        {
            smallText: '2023',
            title: 'Estágio Full Stack | Hosp. Uni. Dutra',
            desc: 'Desenvolvi plataforma web para gerenciamento de bolsas de Sangue. Tecnologias: PHP, Laravel, PostgreSQL, Javascript, Arquitetura de Software, Engenharia de Software.',
            location: 'Presencial, São Luís, MA.'
        },
        {
            smallText: '2022',
            title: 'Programador Mobile | Full Stack | Exatas Engenharia',
            desc: 'Desenvolvi aplicativo Mobile e plataforma web para coleta de dados em campo. Tecnologias: Typescript, Angular, Ionic, Firebase.',
            location: 'Freelancer, São Luís, MA.'
        },
        {
            smallText: '2020 - 2021',
            title: 'Estágio Engenharia de Software | Adsum',
            desc: 'Realizei análise de requisitos e projetei soluções tecnológicas junto a stakeholders. Gerenciei projetos de tecnologias com o framework Scrum e desenvolvi software com as tecnologias: PHP, Laravel, Typescript, Angular, Node.js, Firebase, MySQL.',
            location: 'Estágio, São Luís, MA.'
        }
    ],
    en: [
        {
            smallText: '2023 - 2024',
            title: 'Mobile Programmer | Full Stack | Noby Academy',
            desc: 'Developed mobile app and web platform. Technologies: Angular, Ionic, Typescript, Firebase, OpenAI API, and Node.js.',
            location: 'Remote'
        },
        {
            smallText: '2023',
            title: 'Full Stack Intern | Hosp. Uni. Dutra',
            desc: 'Developed web platform for blood bank management. Technologies: PHP, Laravel, PostgreSQL, Javascript, Software Architecture, Software Engineering.',
            location: 'On-site, São Luís, MA, Brazil.'
        },
        {
            smallText: '2022',
            title: 'Mobile Programmer | Full Stack | Exatas Engenharia',
            desc: 'Developed mobile app and web platform for field data collection. Technologies: Typescript, Angular, Ionic, Firebase.',
            location: 'Freelancer, São Luís, MA, Brazil.'
        },
        {
            smallText: '2020 - 2021',
            title: 'Software Engineering Intern | Adsum',
            desc: 'Conducted requirements analysis and designed technological solutions with stakeholders. Managed technology projects using the Scrum framework and developed software with the technologies: PHP, Laravel, Typescript, Angular, Node.js, Firebase, MySQL.',
            location: 'Internship, São Luís, MA, Brazil.'
        }
    ],
    ru: [
        {
            smallText: '2023 - 2024',
            title: 'Мобильный Программист | Full Stack | Noby Academy',
            desc: 'Разработал мобильное приложение и веб-платформу. Технологии: Angular, Ionic, Typescript, Firebase, OpenAI API и Node.js.',
            location: 'Удаленно'
        },
        {
            smallText: '2023',
            title: 'Стажер Full Stack | Hosp. Uni. Dutra',
            desc: 'Разработал веб-платформу для управления банком крови. Технологии: PHP, Laravel, PostgreSQL, Javascript, Архитектура программного обеспечения, Инженерия программного обеспечения.',
            location: 'На месте, Сан-Луис, MA, Бразилия.'
        },
        {
            smallText: '2022',
            title: 'Мобильный Программист | Full Stack | Exatas Engenharia',
            desc: 'Разработал мобильное приложение и веб-платформу для сбора данных в поле. Технологии: Typescript, Angular, Ionic, Firebase.',
            location: 'Фрилансер, Сан-Луис, MA, Бразилия.'
        },
        {
            smallText: '2020 - 2021',
            title: 'Стажер по Инженерии Программного Обеспечения | Adsum',
            desc: 'Проводил анализ требований и проектировал технологические решения совместно с заинтересованными сторонами. Управлял проектами технологий с использованием Scrum и разрабатывал программное обеспечение с использованием технологий: PHP, Laravel, Typescript, Angular, Node.js, Firebase, MySQL.',
            location: 'Стажировка, Сан-Луис, MA, Бразилия.'
        }
    ]
};

const createItem = (smallText, h3Text, h4Text, pText) => {
    const div = document.createElement('div');
    div.classList.add('experience__content-item');

    const small = document.createElement('small');
    small.classList.add('experience__year');
    small.innerText = smallText;

    const h3 = document.createElement('h3');
    h3.classList.add('experience__title');
    h3.innerText = h3Text;

    const h4 = document.createElement('h4');
    h4.classList.add('experience__desc');
    h4.innerText = h4Text;

    const p = document.createElement('p');
    p.classList.add('experience__location');
    p.innerText = pText;

    div.appendChild(small);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(p);

    return div;
};

const experience = document.querySelector('.experience');

const translateExperience = (lang) => {

    experience.innerHTML = ''

    const h2 = createH2(titleTranslate[lang]);
    experience.appendChild(h2); // Insere o <h2> no início da seção

    const con = content[lang];

    con.forEach((item) => {
        const obj = createItem(item.smallText, item.title, item.desc, item.location);
        experience.appendChild(obj);
    });
};

export default translateExperience;
