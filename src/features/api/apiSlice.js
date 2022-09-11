import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000"
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => ({
                url: '/todos',
                method: 'get'
            })
        }),
        addTodo: builder.mutation({
            query: (data) => ({
                url: '/todos',
                method: 'POST',
                body: {
                    text: data,
                    completed: false,
                }
            })
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
            })
        }),
        toogleTodo: builder.mutation({
            query:({id,toogleValue}) => ({
                url: `/todos/${id}`,
                method: "PATCH",
                body:{
                    completed: !toogleValue
                }
            })
        }),
        updateTodoColor: builder.mutation({
            query: ({id,color}) => ({
                url: `todos/${id}`,
                method: "PATCH",
                body:{
                    color: color
                }
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