import React, { useState } from 'react'

const ToDo = () => {
    const [tasks, setTasks] = useState(["Get off bed", "Brush teeth", "Take shower", "Eat breakfast"])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function delTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUP(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    const myStyles = {
        backgroundImage: "linear-gradient(135deg, transparent 0%, transparent 50%, rgba(159, 159, 159, 0.07) 50%, rgba(159, 159, 159, 0.07) 77%, transparent 77%, transparent 100%), linear-gradient(90deg, transparent 0%, transparent 91%, rgba(159, 159, 159, 0.07) 91%, rgba(159, 159, 159, 0.07) 99%, transparent 99%, transparent 100%), linear-gradient(135deg, transparent 0%, transparent 24%, rgba(159, 159, 159, 0.07) 24%, rgba(159, 159, 159, 0.07) 63%, transparent 63%, transparent 100%), linear-gradient(0deg, transparent 0%, transparent 49%, rgba(159, 159, 159, 0.07) 49%, rgba(159, 159, 159, 0.07) 63%, transparent 63%, transparent 100%), linear-gradient(90deg, rgb(0, 0, 0), rgb(0, 0, 0))"
    }

    return (
        <>
            <div style={myStyles} className="text-center text-white mt-3 p-8 rounded">
                <h1 className="text-5xl my-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">🔥Taskify🔥</h1>

                <div>
                    <input type="text" placeholder='Enter a task...' value={newTask} onChange={handleInputChange} className="py-3 px-4 my-5 bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-00 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                    <a onClick={addTask} className="mx-5 relative inline-flex items-center justify-center p-2 px-4 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded shadow-md group hover:cursor-pointer">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Add</span>
                        <span className="relative invisible">Add</span>
                    </a>
                </div>

                <ol className="inline-block text-center">
                    {tasks.map(
                        (task, index) => <li key={index} className="my-4 p-3 text-2xl rounded bg-gradient-to-bl from-blue-800 to-indigo-900">
                            <span className="mx-4">&rarr;  {task}</span>
                            <button className="m-1 mx-2 p-1.5 border border-2 border-emerald-400 rounded hover:border-emerald-600" onClick={() => moveTaskUP(index)}>👆</button>
                            <button className="m-1 mx-2 p-1.5 border border-2 border-emerald-400 rounded hover:border-emerald-600" onClick={() => moveTaskDown(index)}>👇</button>
                            <button className="m-1 mx-2 p-1.5 border border-2 border-red-500 rounded hover:border-red-900" onClick={() => delTask(index)}>Delete</button>
                        </li>
                    )}
                </ol>
            </div>
        </>
    )
}

export default ToDo