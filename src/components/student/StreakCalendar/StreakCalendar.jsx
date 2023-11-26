import React, { useState, useEffect } from 'react';
import { ViewCalendarStreak } from '../../../api/get';
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StreakCalendar = () => {
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
        if (response.status === 200)
        {
            handleStreakMarks(response.data)
        }
        else if (response.status === 400)
        {
            toast(response.message)
        }
        else
        {
            navigate('/login')
        }
    }

    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [streaks, setStreaks] = useState(Array(31).fill(false)); // Placeholder for streak data

    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };

    const daysInMonth = selectedMonth == 1 && isLeapYear(new Date().getFullYear()) ? 29 : selectedMonth == 1 && !isLeapYear(new Date().getFullYear()) ? 28 : new Date(new Date().getFullYear(), selectedMonth + 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const handleMonthChange = (e) => {
        resetStreaks()
        setSelectedMonth(e.target.value);
        ViewStreaks(parseInt(e.target.value) + 1)
    };

    const resetStreaks = () => {
        for (let i = 0; i < streaks.length; i++)
        {
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
        <div className="streak-calendar">

            <div className='bg-white p-5 calendar-container'>
                <div className="text-center d-flex align-items-center justify-content-between">
                    <h4>Monthly <span className="text-orange">Streak Calendar</span></h4>
                    <select
                        value={selectedMonth}
                        onChange={handleMonthChange}
                        className="form-select month-select fw-bolder"
                        aria-label="Select Month"
                    >
                        <option disabled>Select a month</option>
                        {months.map((month, index) => (
                            <option key={index} value={index}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="calendar border rounded">
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
    );
};

export default StreakCalendar;