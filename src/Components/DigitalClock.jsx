import React, { useEffect, useState } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, [])

    function formatTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        const meridian = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return (`${hours} : ${minutes} : ${seconds}  ${meridian}`);
    }

    return (
        <>
            <div className="rounded-[50px] bg-[#e0e0e0]">
                <h1 className="text-6xl p-[50px]">{formatTime()}</h1>
            </div>
        </>
    )
}

export default DigitalClock