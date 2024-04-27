import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="sticky top-0 mb-8 bg-gradient-to-br from-slate-800 to-green-800">
                <div className="container flex items-center justify-center p-4 mx-auto">
                    <Link to="/" className="text-white text-2xl border-b-2 border-transparent hover:border-blue-200 mx-1.5 sm:mx-6">Home</Link>

                    <Link to="/DigitalClock" className="text-white text-2xl border-b-2 border-transparent hover:border-blue-200 mx-1.5 sm:mx-6">Digital Clock</Link>

                    <Link to="/Todo" className="text-white text-2xl border-b-2 border-transparent hover:border-blue-200 mx-1.5 sm:mx-6">Todo</Link>

                    <Link to="/Stopwatch" className="text-white text-2xl border-b-2 border-transparent hover:border-blue-200 mx-1.5 sm:mx-6">Stopwatch</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar