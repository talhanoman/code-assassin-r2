import React, { useState, useEffect } from 'react';
import { ViewCalendarStreak } from '../../../api/get';
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StreakCalendar = ({ month, year }) => {    
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const navigate = useNavigate()

    const cookie = new Cookies()
    const token = cookie.get('token')

    useEffect(() => {
        ViewStreaks(new Date().getMonth() + 1)
    }, [])

    const ViewStreaks = async (month) => {
        let response = await ViewCalendarStreak(token, month)
        if (response.status === 200) {
            handleStreakMarks(response.data)
        }
        else if (response.status === 400) {
            toast(response.message)
        }
        else {
            navigate('/login')
        }
    }

    const [selectedMonth, setSelectedMonth] = useState(month);
    console.log(selectedMonth)
    const [streaks, setStreaks] = useState(Array(31).fill(false)); // Placeholder for streak data

    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };

    const daysInMonth = selectedMonth == 1 && isLeapYear(year) ? 29 : selectedMonth == 1 && !isLeapYear(year) ? 28 : new Date(year, selectedMonth + 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const handleMonthChange = (e) => {
        resetStreaks()
        setSelectedMonth(e.target.value);
        ViewStreaks(parseInt(e.target.value) + 1)
    };

    const resetStreaks = () => {
        for (let i = 0; i < streaks.length; i++) {
            streaks[i] = false
        }
    }

    const handleStreakMarks = (data) => {
        const updatedStreaks = [...streaks];
        data?.map((obj) => {
            let day = parseInt(obj?.date_created.split('T')[0].split('-')[2])
            updatedStreaks[day - 1] = true;
        })
        setStreaks(updatedStreaks);
    };

    return (
        <div className="d-flex">
            <div className="streak-calendar">
                <div className='bg-white calendar-container'>
                    <p className='small text-center my-1'>{months[selectedMonth]}</p>
                    <div className="calendar rounded">
                        {daysArray.map((day) => (
                            <div
                                key={day}
                                className={streaks[day - 1] ? 'day streak' : 'day no-streak'}
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default StreakCalendar;