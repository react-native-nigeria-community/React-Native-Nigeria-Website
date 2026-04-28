import React, { useState, useEffect, useMemo } from 'react'

interface CountdownTimerProps {
    targetDate: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const cleanDate = useMemo(() => {
        const sanitized = targetDate.replace(/(\d+)(st|nd|rd|th)/, '$1')
        return new Date(sanitized).getTime()
    }, [targetDate])

    function calculateTimeLeft(): TimeLeft {
        const difference = cleanDate - new Date().getTime()

        if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        }
    }

    function formatNumber(num: number): string {
        return String(num).padStart(2, '0')
    }

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [cleanDate])

    return (
        <div className="w-full flex gap-2 items-center rounded-full mb-4">
            <div className=" pill">
                <p>{formatNumber(timeLeft.days)} Days Left </p>
            </div>
            <div className="pill">
                <span>{formatNumber(timeLeft.hours)}:</span>
                <span>{formatNumber(timeLeft.minutes)}:</span>
                <span>{formatNumber(timeLeft.seconds)}</span>
            </div>
        </div>
    )
}

export default CountdownTimer;
