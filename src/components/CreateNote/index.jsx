import React, { useState } from "react";
import { CreateNote } from "./styles";
import { PrimaryTitle } from "../../components/Typography";
import { Input } from "../Input";
import {database} from '../../services/firebase'
import {useAuth} from '../../contexts/AuthContext'
import { SubmitButton } from "../Buttons";
import moment from "moment";
// import { useHistory } from "react-router-dom";

import toast,{ Toaster} from 'react-hot-toast'

export default function Index() {

    const notifySucess = () => toast.success("Note created successfully!")
    const notifyError = () => toast.error("Something is empty...")

    const {user} = useAuth()
    // const history = useHistory()

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [color, setColor] = useState("#1EA5FC");
    const [category, setCategory] = useState("work");

    // handling radio form inputs
    const radioIsSelected = (value) => category === value;
    const hanbleRadioClick = (e) => setCategory(e.target.value);

    async function handleSubmit(e) {
        e.preventDefault();

        if (title.trim() === "" || content.trim() === "") {
            notifyError()
            return;
        }

        const newNote = {
            title,
            content,
            category,
            color,
            createdAt: moment(new Date()).format('MMM Do YYYY')
        };

        await database.ref(`users/${user.id}/notes`).push(newNote)

        setTitle("")
        setContent("")
        setColor("#1ea5fc")
        setCategory('work')

        
        notifySucess()

        // history.push('/dashboard/list/notes')
    }

    return (
        <CreateNote>
            <PrimaryTitle>Create a new note</PrimaryTitle>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <fieldset onChange={(e) => setCategory(e.target.value)}>
                    <label>
                        <input
                            type="radio"
                            value="work"
                            name="category"
                            checked={radioIsSelected("work")}
                            onChange={hanbleRadioClick}
                        />
                        Work
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="study"
                            name="category"
                            checked={radioIsSelected("study")}
                            onChange={hanbleRadioClick}
                        />
                        Study
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="other"
                            name="category"
                            checked={radioIsSelected("other")}
                            onChange={hanbleRadioClick}
                        />
                        Other
                    </label>
                </fieldset>

                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <div>
                    <label>
                        Wanna set a custom color?
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </label>
                </div>

                <SubmitButton type="submit">Add Note</SubmitButton>
            </form>

            <Toaster 
            position="top-center"
            reverseOrder={false}
            toastOptions={{
                duration: 1500}}
            />

        </CreateNote>
    );
}
