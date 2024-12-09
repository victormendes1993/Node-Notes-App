import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { addNote, removeNote, listNotes, readNote } from './notes.js';

//Hiding process.argv in command line is necessary or yargs parsing won't work
const yarg = yargs(hideBin(process.argv))

//Create add command
yarg.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        addNote(argv.title, argv.body)
    }
})

//Create remove command
yarg.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        removeNote(argv.title)
    }
})

//Create list command
yarg.command({
    command: 'list',
    describe: 'List the notes',
    handler() {
        listNotes()
    }
})

//Create read command
yarg.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        readNote(argv.title)
    }
})

//Setup help
yarg.help()

//Parse Data
yarg.parse()