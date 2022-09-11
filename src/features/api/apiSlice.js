import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000"
    }),
    tagTypes: ["Todos"],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: (data) => {
                let queryString = "";
                if(data){
                    const {status,colors} = data;

                    if(status !== ""){
                        if(status === "All"){
                            queryString = "";
                        }
                        if(status === "Incomplete"){
                            queryString = "completed=false&";
                        }
                        if(status === "Complete"){
                            queryString = "completed=false&";
                        }
                    }

                    if(colors.length > 0){
                        queryString += colors.map(color => `color=${color}`).join("&");
                    }
                }

                return {
                    url: `/todos?${queryString}`,
                    method: 'get'
                }
            },
            providesTags: ["Todos"]
        }),
        addTodo: builder.mutation({
            query: (data) => ({
                url: '/todos',
                method: 'POST',
                body: {
                    text: data,
                    completed: false,
                }
            }),
            invalidatesTags: ["Todos"]
        }),
        updateTodo: builder.mutation({
            query: ({id,data}) => ({
                url: `/todos/${id}`,
                method: "PATCH",
                body: data
            })
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Todos"]
        }),
        toogleTodo: builder.mutation({
            query:({id,toogleValue}) => ({
                url: `/todos/${id}`,
                method: "PATCH",
                body:{
                    completed: !toogleValue
                }
            }),
            invalidatesTags: ["Todos"]
        }),
        updateTodoColor: builder.mutation({
            query: ({id,color}) => ({
                url: `/todos/${id}`,
                method: "PATCH",
                body:{
                    color: color
                }
            })
        }),
        completeAllTodo: builder.mutation({
            query: (data) => ({
                url: "/todos",
                method: "PATCH",
                body: data
            })
        })
    })
})

export const {
    useAddTodoMutation,
    useGetTodosQuery,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
    useToogleTodoMutation,
    useUpdateTodoColorMutation
} = apiSlice;