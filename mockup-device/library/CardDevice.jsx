import { useState } from 'react';

export default function App({ id, name, title, onHandleClick}) {

    const handleClick = (e) => {
       
        if (onHandleClick) {
            onHandleClick(id); // Envoie la nouvelle valeur au parent
        }
    };

    return (
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="relative flex justify-center h-56 m-2.5 text-white rounded-md">
        <img src={name} className='object-cover h-full' alt="card-image" />
        </div>
        <div className="p-4">
        <h6 className="text-slate-800 text-xl font-semibold text-center">
            {title}
        </h6>
        </div>

        <div className="px-4 pb-4 pt-0 mt-2">
        <button onClick={handleClick} className="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Edit
        </button>
        </div>
        </div>
    )
};