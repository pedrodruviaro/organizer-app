import React, { useEffect, useState } from 'react'
import {database} from '../../services/firebase'
import {useAuth} from '../../contexts/AuthContext'

export default function Index() {


    const [notes, setNotes] = useState([])
    const {user} = useAuth()
    const [loading, setLoading] = useState(false)
    const [notesExists, setNotesExists] = useState(false)

    useEffect(() => {
        setLoading(true)
        const notesRef = database.ref(`users/${user.id}/notes`)

        notesRef.once('value', snapshot => {
            if(snapshot.exists()){
                setNotesExists(true)
                const rawNotes = snapshot.val()

                const parsedNotes = Object.entries(rawNotes).map(([key, value]) => {
                    return {
                        noteId: key,
                        category: value.category,
                        content: value.content ,
                        color: value.color,
                        createdAt: value.createdAt ,
                        title: value.title,
                    }
                })

                setNotes(parsedNotes)
                setLoading(false)

            } else {
                setLoading(false)
                setNotesExists(false)
            }
        })
    }, [user.id])

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <div>
            LISTA DE NOTAS

            {notesExists ? notes.map(note => (
                <article color={note.color} key={note.noteId}>
                    <h2>{note.title}</h2>
                    <span>{note.createdAt}</span>
                    <p>{note.content}</p>
                </article>
            )) : <h1>You dont have any notes...</h1> }
        </div>
    )
}
