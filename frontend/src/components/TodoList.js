import API from "../services/api";
import { useNavigate } from "react-router-dom";

function TodoList({todos, fetchTodos}) {

    const navigate = useNavigate();

    const deleteTodo = async(id)=>{
        await API.delete(`/todos/${id}`);
        fetchTodos();
    };

    return (
        <div>
            {todos.map(todo=>(
                <div key={todo._id} style={{border:"1px solid", margin:"10px", padding:"10px"}}>

                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <p>Status: {todo.status}</p>

                    <button onClick={()=>navigate(`/edit/${todo._id}`)}>
                        Edit
                    </button>

                    <button onClick={()=>deleteTodo(todo._id)}>
                        Delete
                    </button>

                </div>
            ))}
        </div>
    );
}

export default TodoList;
