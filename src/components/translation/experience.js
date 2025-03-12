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
            desc: 'Desenvolvi aplicativo mobile e plataforma web com integração com OpenAI API para análise de vendas e compras de produtos. Tecnologias: Angular, Ionic, Typescript, Firebase, OpenAI API e Node.js.', 
            location: 'Remoto'
        },
        {
            smallText: '2023',
            title: 'Estágio Full Stack | Hospital Universitário Presidente Dutra',
            desc: 'Desenvolvi plataforma web para gerenciamento de bolsas de Sangue. Tecnologias: PHP, Laravel, PostgreSQL, Javascript, Arquitetura de Software, Engenharia de Software.',
            location: 'Presencial, São Luís, MA.'
        },
        {
            smallText: '2022',
            title: 'Programador Mobile | Full Stack | Exatas Engenharia',
            desc: 'Desenvolvi aplicativo Mobile e plataforma web com sincronização off-line para coleta de dados em campo. Tecnologias: Typescript, Angular, Ionic, Firebase.',
            location: 'Freelancer, São Luís, MA.'
        },
        {
            smallText: '2020 - 2021',
            title: 'Pesquisa Científica | Fundação Sousândrade | UFMA',
            desc: 'Desenvolvi Sistema de Monitoramento Físico-Químico através da IoT, utilizado para pesquisa em projeto público-privado, com as tecnologias ESP32, C, Firebase Realtime Database, Angular, Ionic Framework, Typescript.',
            location: 'Bolsista, São Luís, MA.'
        },
        {
            smallText: '2019 - 2020',
            title: 'Engenharia de Software | Adsum',
            desc: 'Realizei análise de requisitos e projetei soluções tecnológicas junto a stakeholders. Gerenciei projetos de tecnologia com o framework Scrum e desenvolvi software com as tecnologias: PHP, Laravel, Typescript, Angular, Node.js, Firebase, MySQL.',
            location: 'Contrato, São Luís, MA.'
        },
        {
            smallText: '2018 - 2019',
            title: 'Estágio Desenvolvedor Web | Adsum',
            desc: 'Participei do desenvolvimento de ERP na área de logística com as tecnologias: PHP, Laravel e MySQL.',
            location: 'Estágio, São Luís, MA.'
        }
    ],
    en: [
        {
            smallText: '2023 - 2024',
            title: 'Mobile Programmer | Full Stack | Noby Academy',
            desc: 'Developed a mobile app and web platform with OpenAI API integration for sales and product purchase analysis. Technologies: Angular, Ionic, Typescript, Firebase, OpenAI API, and Node.js.',
            location: 'Remote'
        },        
        {
            smallText: '2023',
            title: 'Full Stack Intern | University Hospital Presidente Dutra',
            desc: 'Developed a web platform for blood bank management. Technologies: PHP, Laravel, PostgreSQL, Javascript, Software Architecture, Software Engineering.',
            location: 'On-site, São Luís, MA, Brazil.'
        },
        {
            smallText: '2022',
            title: 'Mobile Programmer | Full Stack | Exatas Engineering',
            desc: 'Developed a mobile app and web platform with offline synchronization for field data collection. Technologies: Typescript, Angular, Ionic, Firebase.',
            location: 'Freelancer, São Luís, MA, Brazil.'
        },
        {
            smallText: '2020 - 2021',
            title: 'Scientific Research | Sousândrade Foundation | Federal University of Maranhão',
            desc: 'Developed a Physicochemical Monitoring System using IoT, applied in research for a public-private project, with technologies such as ESP32, C, Firebase Realtime Database, Angular, Ionic Framework, and Typescript.',
            location: 'Scholarship Holder, São Luís, MA, Brazil.'
        },
        {
            smallText: '2019 - 2020',
            title: 'Software Engineering | Adsum',
            desc: 'Conducted requirements analysis and designed technological solutions with stakeholders. Managed technology projects using the Scrum framework and developed software with the following technologies: PHP, Laravel, Typescript, Angular, Node.js, Firebase, MySQL.',
            location: 'Contract, São Luís, MA, Brazil.'
        },
        {
            smallText: '2018 - 2019',
            title: 'Web Developer Intern | Adsum',
            desc: 'Contributed to the development of an ERP system for the logistics sector using PHP, Laravel, and MySQL.',
            location: 'Internship, São Luís, MA, Brazil.'
        }
    ],
    ru: [
        {
            smallText: '2023 - 2024',
            title: 'Мобильный Программист | Full Stack | Noby Academy',
            desc: 'Разработал мобильное приложение и веб-платформу с интеграцией OpenAI API для анализа продаж и покупок продуктов. Технологии: Angular, Ionic, Typescript, Firebase, OpenAI API и Node.js.',
            location: 'Удаленно'
        },        
        {
            smallText: '2023',
            title: 'Стажер Full Stack | Университетская Больница Президента Дутра',
            desc: 'Разработал веб-платформу для управления банком крови. Технологии: PHP, Laravel, PostgreSQL, Javascript, Архитектура программного обеспечения, Инженерия программного обеспечения.',
            location: 'Очный, Сан-Луис, MA, Бразилия.'
        },
        {
            smallText: '2022',
            title: 'Мобильный Программист | Full Stack | Exatas Engenharia',
            desc: 'Разработал мобильное приложение и веб-платформу с оффлайн-синхронизацией для сбора данных в поле. Технологии: Typescript, Angular, Ionic, Firebase.',
            location: 'Фрилансер, Сан-Луис, MA, Бразилия.'
        },
        {
            smallText: '2020 - 2021',
            title: 'Научное Исследование | Фонд Соуcандраде | Федеральный Университет Мараньяна',
            desc: 'Разработал систему физико-химического мониторинга с использованием IoT, применяемую в исследовании для государственного-частного проекта. Используемые технологии: ESP32, C, Firebase Realtime Database, Angular, Ionic Framework и Typescript.',
            location: 'Стипендиат, Сан-Луис, MA, Бразилия.'
        },
        {
            smallText: '2019 - 2020',
            title: 'Инженерия Программного Обеспечения | Adsum',
            desc: 'Проводил анализ требований и проектировал технологические решения совместно с заинтересованными сторонами. Управлял проектами технологий с использованием Scrum и разрабатывал программное обеспечение с использованием технологий: PHP, Laravel, Typescript, Angular, Node.js, Firebase, MySQL.',
            location: 'Контракт, Сан-Луис, MA, Бразилия.'
        },
        {
            smallText: '2018 - 2019',
            title: 'Стажер Веб-Разработчик | Adsum',
            desc: 'Принимал участие в разработке ERP-системы для логистического сектора с использованием PHP, Laravel и MySQL.',
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
