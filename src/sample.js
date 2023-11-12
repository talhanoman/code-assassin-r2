import React from 'react';
import dayjs from 'dayjs';

const GitHubGraph = ({ streakData, month, year }) => {
    // streakData should be an array of objects representing each block
    // Each object should have a 'color' property (true for colored, false for empty)
  
    const renderBlocksForMonth = (year, month) => {
      const startDate = dayjs().year(year).month(month).startOf('month');
      const endDate = dayjs().year(year).month(month).endOf('month').endOf('day');
  
      const blocks = [];
  
      for (let date = startDate; date.isBefore(endDate) || date.isSame(endDate, 'day'); date = date.add(1, 'day')) {
        const matchingBlock = streakData.find((block) => dayjs(block.date).isSame(date, 'day'));
  
        blocks.push(
          <div key={date.format('YYYY-MM-DD')} className="flex flex-col items-center">
            <div className="w-5 h-5 m-1 rounded-full mb-1 text-sm font-semibold text-gray-600">
              {date.format('D')}
            </div>
            <div
              className={`w-5 h-5 m-1 rounded-full ${matchingBlock?.color ? 'bg-green-400' : 'bg-gray-300'}`}
              title={matchingBlock?.color ? 'Contributed' : 'No contributions'}
            />
          </div>
        );
      }
  
      return blocks;
    };
  
    const renderCalendar = () => {
      return (
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold mb-2">{dayjs().month(month).format('MMMM YYYY')}</h2>
          <div className="flex flex-wrap">
            <div className="flex">
              {/* {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="w-5 h-5 m-1 text-sm font-semibold text-gray-600">
                  {day}
                </div>
              ))} */}
            </div>
            {renderBlocksForMonth(year, month)}
          </div>
        </div>
      );
    };
  
    return renderCalendar();
  };



const streakData = [
    // An array of objects representing each block
    { date: '2023-09-01', color: true },
    { date: '2023-10-05', color: true },
    { date: '2023-11-02', color: true },
    // Add more data...
];


const AppGithub = () => {
    return (
        <div>
            <GitHubGraph streakData={streakData} month={0} year={2023} />
            <GitHubGraph streakData={streakData} month={1} year={2023} />
            <GitHubGraph streakData={streakData} month={2} year={2023} />
            <GitHubGraph streakData={streakData} month={3} year={2023} />
            <GitHubGraph streakData={streakData} month={4} year={2023} />
            <GitHubGraph streakData={streakData} month={5} year={2023} />
            <GitHubGraph streakData={streakData} month={6} year={2023} />
            <GitHubGraph streakData={streakData} month={7} year={2023} />
            <GitHubGraph streakData={streakData} month={8} year={2023} />
            <GitHubGraph streakData={streakData} month={9} year={2023} />
            <GitHubGraph streakData={streakData} month={10} year={2023} />
            <GitHubGraph streakData={streakData} month={11} year={2023} />

            
        </div>
    );
};

export default AppGithub;
