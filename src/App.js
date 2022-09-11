import React from 'react';
import { useSelector } from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import Modal from './components/ui/Modal';

export default function App() {
  
  const {modal} = useSelector(state => state.filter);

  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
         <Navbar />

        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />

          <hr className="mt-4" />

          {modal && <Modal/>}

          <TodoList />

          <hr className="mt-4" />

          <Footer />
        </div>
    </div>
  )
}
