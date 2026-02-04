import { useEffect, useState } from "react";
import API from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

function EditTodo(){

    const {id} = useParams();
    const navigate = useNavigate();

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    useEffect(()=>{

        const fetchTodo = async()=>{
            const res = await API.get("/todos");
            const todo = res.data.find(t=>t._id === id);

            setTitle(todo.title);
            setDescription(todo.description);
        };

        fetchTodo();

    },[id]);

    const updateTodo = async(e)=>{
        e.preventDefault();

        await API.put(`/todos/${id}`,{
            title,
            description
        });

        navigate("/");
    };

    return(
        <form onSubmit={updateTodo}>
            <h2>Edit Todo</h2>

            <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input value={description} onChange={(e)=>setDescription(e.target.value)}/>

            <button>Update</button>
        </form>
    );
}

export default EditTodo;
