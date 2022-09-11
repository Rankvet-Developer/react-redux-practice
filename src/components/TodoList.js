import { useSelector } from "react-redux";
import { useGetTodosQuery } from "../features/api/apiSlice";
import Todo from "./Todo";

export default function TodoList() {

    const {status,colors} = useSelector(state => state.filter);

    // use rtk query
    const {data:todos,isLoading,isError} = useGetTodosQuery({status: status,colors: colors});
    
    let content = null;
    
    // decide what to render 
    if(isLoading){
        content = <div>Loading...</div>
    }

    if(!isLoading && isError){
        content = <div>Error occurs...</div>
    }

    if(!isLoading && !isError && todos.length > 0){
        content = todos
                    .map((todo) => (
                        <Todo todo={todo} key={todo.id} />
                    ))
    }

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {content}
        </div>
    );
}
