import React, { useState, useEffect } from 'react'
import StreakCalendar from './StreakCalendar'
import { ViewCalendarStreak } from '../../../api/get';
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function StreakCalendarYear() {
    const [yearsRange, setYearsRange] = useState([]);
    const [selectYear, setSelectYear] = useState(new Date().getFullYear())
    const handleYearChange = (e) => {
        setSelectYear(e.target.value);
    };

    const navigate = useNavigate()

    const cookie = new Cookies()
    const token = cookie.get('token')

    const [allDays, setAllDays] = useState([])

    const ViewStreaks = async (month) => {
        let response = await ViewCalendarStreak(token, month)
        if (response.status === 200) {
            setAllDays(response.data)
        }
        else if (response.status === 400) {
            toast(response.message)
        }
        else {
            navigate('/login')
        }
    }

    useEffect(() => {
        let yearsTemp = [];

        for (let index = new Date().getFullYear(); index > new Date().getFullYear() - 5; index--) {
            yearsTemp.push(index);
        }
        setYearsRange(yearsTemp);
        setSelectYear(new Date().getFullYear())

        ViewStreaks(new Date().getFullYear())
    }, [])
    return (
        <div className='bg-white p-4'>
            <div className="text-center d-flex align-items-center justify-content-between mb-3">
                <h4>Annual <span className="text-orange">Streak Calendar</span></h4>
                {console.log('Current year', selectYear)}
                <select
                    value={selectYear}
                    onChange={handleYearChange}
                    className="form-select month-select fw-bolder"
                    aria-label="Select Month"
                >
                    {yearsRange?.map((year, index) => (
                        <option selected={selectYear && year} key={index} value={index}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            <div className="d-flex align-items-center">
                <div className="d-flex gx-2 flex-wrap mx-auto w-100">
                    <StreakCalendar month={0} year={selectYear} allDays={allDays}/>
                    <StreakCalendar month={1} year={selectYear} allDays={allDays}/>
                    <StreakCalendar month={2} year={selectYear} allDays={allDays}/>
                    <StreakCalendar month={3} year={selectYear} allDays={allDays}/>
                    <StreakCalendar month={4} year={selectYear} allDays={allDays}/>
                    <StreakCalendar month={5} year={selectYear} allDays={allDays}/>
                    <StreakCalendar month={6} year={selectYear} allDays={allDays}/>
                    <StreakCalendar month={7} year={selectYear} allDays={allDays}/>
                    <StreakCalendar month={8} year={selectYear} allDays={allDays}/>
                    <StreakCalendar month={9} year={selectYear} allDays={allDays}/>
                    <StreakCalendar month={10} year={selectYear} allDays={allDays}/>
                    <StreakCalendar month={11} year={selectYear} allDays={allDays}/>
                </div>              
            </div>
            <ToastContainer />
        </div>
    )
}
