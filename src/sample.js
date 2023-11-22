import React, { useState } from 'react';

const AppGithub = () => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [streaks, setStreaks] = useState(Array(31).fill(false)); // Placeholder for streak data

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  const daysInMonth = selectedMonth == 1 && isLeapYear(new Date().getFullYear())?  29 : selectedMonth == 1 && !isLeapYear(new Date().getFullYear())?  28 : new Date(new Date().getFullYear(), selectedMonth + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleDayClick = (day) => {
    // Placeholder logic for updating streak data
    const updatedStreaks = [...streaks];
    updatedStreaks[day - 1] = !updatedStreaks[day - 1];
    setStreaks(updatedStreaks);
  };

  return (
    <div className="streak-calendar">
      <label>Select Month:</label>
      <select value={selectedMonth} onChange={handleMonthChange}>
        {months.map((month, index) => (
          <option key={index} value={index}>
            {month}
          </option>
        ))}
      </select>

      <div className="calendar">
        {daysArray.map((day) => (
          <div
            key={day}
            className={streaks[day - 1] ? 'day streak' : 'day no-streak'}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppGithub;