import React from 'react';

interface UpdateNotificationProps {
  onUpdate: () => void;
}

const UpdateNotification: React.FC<UpdateNotificationProps> = ({ onUpdate }) => {
  return (
    <div className="fixed bottom-20 right-4 bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4 z-50">
      <p className="text-slate-700">En ny version finns tillgänglig.</p>
      <button
        onClick={onUpdate}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Ladda om
      </button>
    </div>
  );
};

export default UpdateNotification;
