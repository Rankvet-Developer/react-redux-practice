import { useGetTodosQuery } from "../features/api/apiSlice";
import Todo from "./Todo";

export default function TodoList() {
    // use rtk query
    const {data:todos,isLoading,isError} = useGetTodosQuery();

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

    // const filterByStatus = (todo) => {
    //     const { status } = filters;
    //     switch (status) {
    //         case "Complete":
    //             return todo.completed;

    //         case "Incomplete":
    //             return !todo.completed;

    //         default:
    //             return true;
    //     }
    // };

    // const filterByColors = (todo) => {
    //     const { colors } = filters;
    //     if (colors.length > 0) {
    //         return colors.includes(todo?.color);
    //     }
    //     return true;
    // };

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {content}
        </div>
    );
}
