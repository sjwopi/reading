import React from 'react';
import Post from './Post';
export default function FeedOfPosts({ cards }) {
  return (
    <ul className='feed'>
      {cards.map((card) => (
        <Post key={card._id} card={card} />
      ))}
    </ul>
  );
}
