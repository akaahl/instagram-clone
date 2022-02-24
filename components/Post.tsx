import React from 'react';
import { PostProps } from '../typings';
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

const Post = ({ id, username, userImg, img, caption }: PostProps) => {
  return (
    <div>
      <div>
        <img
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1 "
          src={img}
          alt="avatar"
        />
        <p>{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
    </div>
  );
};

export default Post;
