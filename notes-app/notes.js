import * as fs from 'fs'
import chalk from 'chalk'
import { title } from 'process'

const getNotes = () => {
    return "Your notes.."
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.bgGreen('Note removed'))
    } else {
        console.log(chalk.bgRed('Note not found.'))
    }



}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        })

        saveNotes(notes)
        console.log('New note added.')
    } else {
        console.log('Note title taken.')
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()

    notes.forEach(note => {
        console.log(chalk.blue(note.title))
    });
}

const readNote = (title) => {
    const notes = loadNotes()

    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.blue.bold(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.bgRed('Note doesn\'t exist'))
    }
}

export { addNote, removeNote, getNotes, listNotes, readNote }