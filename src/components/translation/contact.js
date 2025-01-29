import { createH2 } from "../createElements";

const titleTranslate = {
    pt: 'Contato',
    en: 'Contact',
    ru: 'Контакт' // "Contato" em russo
};

const content = {
    pt: {
        addressLabel: 'Endereço:',
        addressDetail: ' São Luís, MA, Brasil.',
        emailLabel: 'E-mail:',
        emailDetail: ' jordanwillian.ecp@gmail.com'
    },
    en: {
        addressLabel: 'Address:',
        addressDetail: ' São Luís, MA, Brazil.',
        emailLabel: 'Email:',
        emailDetail: ' jordanwillian.ecp@gmail.com'
    },
    ru: {
        addressLabel: 'Адрес:',
        addressDetail: ' Сан-Луис, МА, Бразилия.',
        emailLabel: 'Эл. адрес:',
        emailDetail: ' jordanwillian.ecp@gmail.com'
    }
};

const createItem = (labelText, detailText, isEmail = false) => {
    const address = document.createElement('address');
    address.classList.add('contact__address');

    const label = document.createElement('span');
    label.classList.add('contact__label');
    label.innerText = labelText;

    let detail;
    if (isEmail) {
        detail = document.createElement('a');
        detail.classList.add('contact__email');
        detail.href = `mailto:${detailText}`;
        detail.innerText = detailText;
    } else {
        detail = document.createElement('span');
        detail.classList.add('contact__detail');
        detail.innerText = detailText;
    }

    address.appendChild(label);
    address.appendChild(detail);

    return address;
};


const contact = document.querySelector('.contact');

const translateContact = (lang) => {
    // Limpa os itens existentes
    contact.innerHTML = '';

    const h2 = createH2(titleTranslate[lang]);
    contact.appendChild(h2); // Insere o <h2> no início da seção

    const con = content[lang];

    const addressItem = createItem(con.addressLabel, con.addressDetail);
    contact.appendChild(addressItem);

    const emailItem = createItem(con.emailLabel, con.emailDetail, true);
    contact.appendChild(emailItem);
};

export default translateContact;
