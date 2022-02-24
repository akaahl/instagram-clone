import React from 'react';
import { StoryProps } from '../typings';

const Story = ({ img, username }: StoryProps) => {
  return (
    <div>
      <img
        className="h-14 w-14 cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px]
        transition-transform duration-200 ease-in-out hover:scale-110"
        src={img}
        alt="avatar"
      />

      <p className="w-14 truncate text-center text-xs">{username}</p>
    </div>
  );
};

export default Story;
