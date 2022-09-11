import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateTodoMutation } from '../../features/api/apiSlice';
import { setModal } from '../../features/filter/filterSlice';

const CancelSvg = () => (
    <>
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Close modal</span>
    </>
)

export default function Modal() {

    const [updateTodo] = useUpdateTodoMutation();

    const {todo} = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const [text,setText] = useState(todo?.text);

    const handleChange = (value) => {
        setText(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newTodo = {...todo,text: text};
        updateTodo({
            id: todo?.id,
            data: newTodo
        })

        dispatch(setModal(false));
    }

  return (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={() => dispatch(setModal(false))} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                        <CancelSvg/>
                    </button>
                    <div className="py-6 px-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Update the todo</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                
                                <input type="text" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={text} required onChange={(e) => handleChange(e.target.value)}/>

                                <div className='text-center'>
                                    <input className='px-4 py-2 bg-sky-500 rounded-full text-white mt-3 focus-outline-none cursor-pointer' type="submit" value="update" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
  )
}
