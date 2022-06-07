// const { type, header } = require('express/lib/response');
const yargs = require('yargs');
const notes = require('./not.js')
// const getsub = require('./not.js')

// const add  = getnotes()
// console.log(add);


yargs.command({
    command:"read",
    describe:"read a new note",
    builder:{
        title:{
            describe:"to add a note",
            demandOption:true,
            type:"string"
        },
        // body:{
        //     describe:'its body',
        //     demandOption:true,
        //     type:"string"
        // },
    },
    handler(){
        // notes.addNote(argv.title,argv.body)
        console.log('rading a note');
    }
})
yargs.parse()

