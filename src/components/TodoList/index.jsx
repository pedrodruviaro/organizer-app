import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { database } from "../../services/firebase";
import { Todo, TodoList } from "./styles";
import { PrimaryTitle } from "../../components/Typography";

export default function Index() {
    const { user } = useAuth();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const dbRef = database.ref(`users/${user.id}/todos`);

        dbRef.on("value", (snapshot) => {
            if (snapshot.exists()) {
                const rawData = snapshot.val();

                const parsedData = Object.entries(rawData).map(
                    ([key, value]) => {
                        return {
                            id: key,
                            authorId: value.authorId,
                            createdAt: value.createdAt,
                            title: value.title,
                            tasks: value.tasks,
                        };
                    }
                );
                setTodos(parsedData);
            } else {
                console.log("deu erro");
            }
        });
    }, [user.id]);

    // checking task
    async function handleCheck(listId, taskId) {
        await database
            .ref(`users/${user.id}/todos/${listId}/tasks/${taskId}`)
            .update({ checked: true });
    }

    async function handleUncheck(listId, taskId) {
        await database
            .ref(`users/${user.id}/todos/${listId}/tasks/${taskId}`)
            .update({ checked: false });
    }

    return (
        <TodoList>
            <PrimaryTitle>Todos</PrimaryTitle>
            <div>
                {todos.map((todo) => (
                    <Todo key={todo.id}>
                        <header>
                            <h2>{todo.title}</h2>
                            <span>{todo.createdAt}</span>
                        </header>
                        <ul>
                            {todo.tasks.map((task, i) => (
                                <li
                                key={i}
                                    className={
                                        task.checked === true ? "checked" : ""
                                    }
                                >
                                    <p>{task.content}</p>

                                    {task.checked === false ? (
                                        <button
                                            onClick={() =>
                                                handleCheck(todo.id, i)
                                            }
                                        >
                                            check
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                handleUncheck(todo.id, i)
                                            }
                                        >
                                            uncheck
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </Todo>
                ))}
            </div>
        </TodoList>
    );
}
