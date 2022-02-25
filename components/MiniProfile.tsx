import React from 'react';

const MiniProfile = () => {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src="/images/avatar.png"
        alt="avatar"
      />

      <div className="mx-4 flex-1">
        <h2 className="font-bold">Khair</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-sm font-semibold text-blue-400">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
