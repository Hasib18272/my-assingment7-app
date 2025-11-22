import React from 'react';

const IssuesManagement = ({ tasks, completeTask }) => {
    return (
        <div className="w-full p-5 bg-white shadow rounded-xl">
      <h2 className="text-lg font-bold mb-5">Task Status</h2>

      {tasks.length === 0 && (
        <p className="text-sm text-gray-500">No tasks added.</p>
      )}

      {tasks.map((t) => (
        <div key={t.id} className=" shadow-xl p-4 mb-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold">{t.title}</h3>
          <button
            onClick={() => completeTask(t)}
            className="mt-3 px-4 py-2 w-full bg-green-600 text-white rounded-md"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
    );
};

export default IssuesManagement;