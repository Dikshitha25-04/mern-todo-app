import { useState } from "react";
import API from "../services/api";

function TodoForm({fetchTodos}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await API.post("/todos", {
            title,
            description
        });

        setTitle("");
        setDescription("");

        fetchTodos();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                required
            />

            <input
                placeholder="Description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
            />

            <button>Add Todo</button>
        </form>
    );
}

export default TodoForm;
