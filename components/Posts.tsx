import React from 'react';
import Post from './Post';

const Posts = () => {
  const posts = [
    {
      id: '123',
      username: 'khair',
      userImg: '/images/avatar.png',
      img: '/images/avatar.png',
      caption: 'Whatssssssuppp GUYSSSSS',
    },
    {
      id: '345',
      username: 'khair',
      userImg: '/images/avatar.png',
      img: '/images/avatar.png',
      caption: 'Whatssssssuppp GUYSSSSS',
    },
  ];

  return (
    <div>
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
