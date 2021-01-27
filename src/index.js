import {heading} from './Component/heading'
import {addPerson} from './Component/addPerson'
import {newEvent} from './Component/newEvent'
import {table} from './Component/calendar';

const root = document.querySelector('#root')
const header = document.createElement('header')
const main =document.createElement('main')

//create calendar

header.append(heading)
header.append(addPerson)
header.append(newEvent)

main.append(table)

root.append(header)
root.append(main)


//create new event
  