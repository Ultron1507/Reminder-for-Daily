import React, { useState } from 'react';

const AddReminder = ({ addReminder }) => {
  const [newReminder, setNewReminder] = useState('');

  const handleAdd = () => {
    if (newReminder.trim()) {
      addReminder(newReminder);
      setNewReminder('');
    }
  };

  return (
    <div className="flex mt-6">
      <input
        type="text"
        value={newReminder}
        onChange={(e) => setNewReminder(e.target.value)}
        placeholder="Add a new reminder..."
        className="flex-1 p-3 border rounded-l-lg focus:outline-primary"
      />
      <button
        onClick={handleAdd}
        className="bg-primary text-white px-6 py-3 rounded-r-lg hover:bg-secondary transition"
      >
        Add
      </button>
    </div>
  );
};

export default AddReminder;
