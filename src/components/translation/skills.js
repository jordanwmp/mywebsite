import { skills } from "../../utils/skills";
import { createH2 } from "../createElements";

const titleTranslate = {
    pt: 'Habilidades',
    en: 'Skills',
    ru: 'Навыки' // "Habilidades" em russo
};

const sectionSkills = document.querySelector('.skills')
const skillsList = document.createElement('ul')
skillsList.classList.add('information__skills__list')
const list = skills.map(skill => `<li>${skill}</li>`).join('')
skillsList.innerHTML = list

// .querySelector()

const translationSkills = (lang) =>{
    sectionSkills.innerHTML = ''
    sectionSkills.appendChild(skillsList)

    const h2 = createH2(titleTranslate[lang])
    sectionSkills.insertBefore(h2, skillsList)
}

export default translationSkills
