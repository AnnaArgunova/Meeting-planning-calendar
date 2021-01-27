import '../styles/main.scss'
import {person} from '../person';


export const addPerson = document.createElement('select')
addPerson.className = 'button'
const option = document.createElement('option');

 option.setAttribute('value', 'All members')
 option.textContent = 'All members'
 addPerson.append(option)
for(let i = 0; i<person.length; i++){
    const option = document.createElement('option');
     option.setAttribute('value', `${person[i].firstName} ${person[i].lastName}`)
     option.textContent =  `${person[i].firstName} ${person[i].lastName}`
    addPerson.append(option)
}
