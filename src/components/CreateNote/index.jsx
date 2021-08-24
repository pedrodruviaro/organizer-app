import React from 'react'
import { CreateNote } from './styles'
import {PrimaryTitle} from '../../components/Typography'
import { Input } from '../Input'
import { SubmitButton } from '../Buttons'

export default function Index() {
    return (
        <CreateNote>
            <PrimaryTitle>Create a new note</PrimaryTitle>
            <form>
                <Input type="text" placeholder="Title" />
                <textarea placeholder="What's up?" />
                <SubmitButton type="submit">Add Note</SubmitButton>
            </form>
        </CreateNote>
    )
}
