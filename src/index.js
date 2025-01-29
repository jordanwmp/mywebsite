import './styles/styles.css'
import './styles/app.sass'

import getLanguage from './components/language';
import translateInfo from './components/translation/introduction';
import translateBiography from './components/translation/biography';
import translationSkills from './components/translation/skills';
import translationEducation from './components/translation/education';
import translateExperience from './components/translation/experience';
import translateInterests from './components/translation/interests';
import translateContact from './components/translation/contact';

const translate = (lang) => {
  translateInfo(lang)
  translateBiography(lang)
  translationSkills(lang)
  translationEducation(lang)
  translateExperience(lang)
  translateInterests(lang)
  translateContact(lang)
}


const ptBtn = document.querySelector('.header__language-list__item__button--pt')
const enBtn = document.querySelector('.header__language-list__item__button--en')
const ruBtn = document.querySelector('.header__language-list__item__button--ru')


document.addEventListener('DOMContentLoaded', () => {
  const lang = getLanguage()
  translate(lang)

  ptBtn.addEventListener('click', ()=>{
    translate('pt')
  })
  
  enBtn.addEventListener('click', ()=>{
    translate('en')
  })
  
  ruBtn.addEventListener('click', ()=>{
    translate('ru')
  })

});
