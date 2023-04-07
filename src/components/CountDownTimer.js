import React, { useState, useEffect } from 'react';
import './CountDownTimer.css'

function CountdownTimer({ deadline }) {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    function calculateTimeRemaining() {
        const deadlineDate = new Date("2023-04-9");
        const now = new Date();
        const timeDiff = deadlineDate - now;
        if (timeDiff <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);
        return { days, hours, minutes, seconds };
    }

    return (
        <div id='count-down'>
            <span className='shape'>{timeRemaining.days}d</span>:
            <span className='shape'>{timeRemaining.hours}h </span> :
            <span className='shape'>{timeRemaining.minutes}m </span> :
            <span className='shape'>{timeRemaining.seconds}s </span>
        </div>
    );
}

export default CountdownTimer;
