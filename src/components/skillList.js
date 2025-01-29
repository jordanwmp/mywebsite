import { skills } from "../utils/skills"

const skillList = document.querySelector('.information__skills__list')

const insertSkills = () =>{
    console.log('skill list ', skillList)
    const list = skills.map(skill => `<li>${skill}</li>`).join('')
    skillList.innerHTML = list
}

export {
    insertSkills
}