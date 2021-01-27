
import '../styles/main.scss'

export const table = document.createElement('table')

//create headre table
const headerTable = ['Name', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const trHeader = document.createElement('tr')
for(let i = 0; i<headerTable.length; i++){
    const th = document.createElement('th')
    th.textContent = headerTable[i]
      trHeader.append(th)
}
table.append(trHeader)

//create row

function createRow(time){
  let tr = document.createElement('tr');
  toString(time)
  for(let i = 0; i<6; i++){
   const td = document.createElement('td');
   if(!i){
     td.textContent = time
    tr.append(td)
   }
      tr.append(td)
  }
  table.appendChild(tr)
}


createRow('10:00')
createRow('11:00')
createRow('12:00')
createRow('13:00')
createRow('14:00')
createRow('15:00')
createRow('16:00')
createRow('17:00')
createRow('18:00')



