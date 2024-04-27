import React, { useState, useEffect, useRef } from 'react'

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIDRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIDRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        return () => {
            clearInterval(intervalIDRef.current);
        }
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return (`${hours} : ${minutes} : ${seconds} : ${milliseconds}`);
    }

    const myStyles = {
        backgroundImage: "linear-gradient(135deg, transparent 0%, transparent 50%, rgba(159, 159, 159, 0.07) 50%, rgba(159, 159, 159, 0.07) 77%, transparent 77%, transparent 100%), linear-gradient(90deg, transparent 0%, transparent 91%, rgba(159, 159, 159, 0.07) 91%, rgba(159, 159, 159, 0.07) 99%, transparent 99%, transparent 100%), linear-gradient(135deg, transparent 0%, transparent 24%, rgba(159, 159, 159, 0.07) 24%, rgba(159, 159, 159, 0.07) 63%, transparent 63%, transparent 100%), linear-gradient(0deg, transparent 0%, transparent 49%, rgba(159, 159, 159, 0.07) 49%, rgba(159, 159, 159, 0.07) 63%, transparent 63%, transparent 100%), linear-gradient(90deg, rgb(0, 0, 0), rgb(0, 0, 0))"
    }

    return (
        <div style={myStyles} className="text-3xl text-white text-center p-5 rounded-[20px] border-4">
            <div className='text-center text-4xl'>{formatTime()}</div>
            <br />
            <div>
                <button onClick={start} type='button' className="m-3 px-5 py-2.5 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br font-medium rounded-lg border-2 text-sm text-center">Start</button>
                <button onClick={stop} type='button' className="m-3 px-5 py-2.5 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg border-2 text-sm text-center">Stop</button>
                <button onClick={reset} type='button' className="m-3 px-5 py-2.5 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br font-medium rounded-lg border-2 text-sm text-center">Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch