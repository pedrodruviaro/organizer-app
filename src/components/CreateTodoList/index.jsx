import React, { useState } from "react";
import { FaPlusSquare, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { InputButtons, SubmitButton } from "../Buttons";
import { CreateTodoList } from "./styles";
import { database } from '../../services/firebase'
import { useAuth } from '../../contexts/AuthContext'
import moment from "moment";
import {PrimaryTitle} from '../../components/Typography'
import { Input } from "../Input";
import toast, { Toaster } from "react-hot-toast";

export default function Index() {

    const notifySucess = () => toast.success("Note created successfully!")
    const notifyError = () => toast.error("Something is empty...")

    const {user} = useAuth()
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [taskContent, setTaskContent] = useState("");
    const [showTitle, setShowTitle] = useState(false);

    // addint task to list
    function newTask(e) {
        e.preventDefault();

        if(taskContent.trim() === ""){
            notifyError()
            return
        }

        const newTask = {
            content: taskContent,
            taskId: Math.random() * 10,
            checked: false,
        };

        setTasks([...tasks, newTask]);
        setTaskContent("");
    }

    // deleting task before send
    function deleteTask(id) {
        const updatedTasks = tasks.filter((task) => task.taskId !== id);
        setTasks(updatedTasks);
    }

    // editing task before send
    function editTask(id) {
        const updatedTasks = tasks.filter((task) => task.taskId !== id);
        const taskToEdit = tasks.filter((task) => task.taskId === id);

        setTaskContent(taskToEdit[0].content);
        setTasks(updatedTasks);
    }

    // send list to firebase
    async function saveTaskInFirebase() {
        if(title.trim() === "" || tasks.length === 0){
            notifyError()
            return
        }

        const newTodoList = {
            tasks: tasks,
            title: title,
            authorId: user.id,
            createdAt: moment().format('MMM DD YYYY')
        }

        await database.ref(`users/${user.id}/todos`).push(newTodoList)

        setTitle("")
        setTaskContent("")
        setTasks([])
        setShowTitle(false)

        notifySucess()
    }

    return (
        <>
        <CreateTodoList>
            <PrimaryTitle>Create your todo list</PrimaryTitle>
            <Input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => title === "" ? setShowTitle(false) : setShowTitle(true)}
            />
            <form onSubmit={newTask}>
                <input
                    type="text"
                    placeholder="Task"
                    value={taskContent}
                    onChange={(e) => setTaskContent(e.target.value)}
                />
                <InputButtons type="submit" color="#27ae60">
                    <FaPlusSquare />
                </InputButtons>
            </form>

            <div>
                <h3>{showTitle === true ? title : ''}</h3>
                <ul>
                    {tasks.length > 0 ? tasks.map((task, i) => (
                        <li key={i}>
                            <p>{task.content}</p>
                            <InputButtons onClick={() => editTask(task.taskId)} color="#1abc9c">
                                <FaRegEdit />
                            </InputButtons>
                            <InputButtons onClick={() => deleteTask(task.taskId)} color="#e74c3c">
                                <FaRegTrashAlt />
                            </InputButtons>
                        </li>
                    )) : <span>Type your first task to preview!</span>}
                </ul>
            </div>
            <SubmitButton type="button" onClick={saveTaskInFirebase}>
                Done!
            </SubmitButton>



        </CreateTodoList>

<Toaster 
position="top-center"
reverseOrder={false}
toastOptions={{
    duration: 1500}}
/>

</>
    );
}
