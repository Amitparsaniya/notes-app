const fs = require('fs')
// const { title } = require('process')

const getNotes = function(){
    return'notes....'
}

module.exports = gateNotes
// console.log('heelo kem cho india i am coming');

// const addNote =function(tite,body){
//         const notes= loadNotes()

//         notes.push({
//             title:tite,
//             body:body
//         })
//         savenotes(notes);
// }

// const savenotes =function (notes){
//         const dataJSON = JSON.stringify(notes)
//         fs.writeFileSync('notes.json',dataJSON)
// }

// const loadNotes =function(){
//         const databuffer = fs.readFileSync('notes.json')
//         const  datajson = databuffer.toString()
//         return JSON.parse(datajson)
// }
// module.exports ={
//     getNotes: getNotes,
//     addNote :addNote
// }