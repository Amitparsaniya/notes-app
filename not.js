const fs = require('fs')
const getnotes = function(){
    return'abcdefghijklmnopqrsatuvwxyz'
}

const addNote =function(title,body){
    const notes =loadNotes()
    const duplicatenotes = notes.filter((note) => note.title ==title)

    if(duplicatenotes.length==0){

        notes.push({
            title:title,
            body:body
        })
        
        savenotes(notes)
        console.log('new note add');
    }else{
        console.log('note not taken');
    }
}
const savenotes =function(notes){
    const datajson = JSON.stringify(notes)
    fs.writeFileSync("note.json",datajson)
}

const loadNotes =function(){
    try{
        const databuffer= fs.readFileSync('note.json')
        const datastring = databuffer.toString()
        const notes = JSON.parse(datastring)
    }catch(e){
        // return[]
        console.log(e);
    }
}

module.exports={
    getnotes: getnotes(),
     addNote: addNote()
}