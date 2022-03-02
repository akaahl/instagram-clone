import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import { User } from '../typings';

const MiniProfile = () => {
  const { data: session } = useSession();

  const user: User | undefined = session?.user;

  console.log(user);
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src={user?.image!}
        alt="avatar"
      />

      <div className="mx-4 flex-1">
        <h2 className="font-bold">{user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button
        onClick={() => signOut()}
        className="text-sm font-semibold text-blue-400"
      >
        Sign Out
      </button>
    </div>
  );
};

export default MiniProfile;
