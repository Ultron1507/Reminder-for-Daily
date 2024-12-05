import React, { useState } from 'react';
import Header from './components/Header';
import ReminderList from './components/ReminderList';
import AddReminder from './components/AddReminder';

const App = () => {
  const [reminders, setReminders] = useState([
    { id: 1, text: 'Call mom', completed: false },
    { id: 2, text: 'Review code for the frontend feature', completed: false },
    { id: 3, text: 'Water the plants', completed: false },
  ]);

  const addReminder = (text) => {
    setReminders([...reminders, { id: reminders.length + 1, text, completed: false }]);
  };

  const toggleCompleted = (id) => {
    setReminders(
      reminders.map((reminder) =>
        reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder
      )
    );
  };

  return (
    <div className="min-h-screen bg-navyblue text-white flex flex-col items-center p-6">
      <Header />
      <div className="w-full max-w-lg flex flex-col justify-center flex-grow">
        <ReminderList reminders={reminders} toggleCompleted={toggleCompleted} />
        <AddReminder addReminder={addReminder} />
      </div>
    </div>
  );
};

export default App;
