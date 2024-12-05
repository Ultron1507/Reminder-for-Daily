import React from 'react';

const ReminderList = ({ reminders, toggleCompleted }) => {
  return (
    <ul className="bg-white p-4 rounded-lg shadow space-y-4">
      {reminders.map((reminder) => (
        <li
          key={reminder.id}
          className={`flex items-center justify-between p-3 rounded border ${
            reminder.completed ? 'bg-green-100' : 'bg-gray-50'
          }`}
        >
          <span
            className={`flex-1 text-lg ${
              reminder.completed ? 'line-through text-gray-400' : ''
            }`}
          >
            {reminder.text}
          </span>
          <input
            type="checkbox"
            checked={reminder.completed}
            onChange={() => toggleCompleted(reminder.id)}
            className="ml-4 accent-primary"
          />
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;
