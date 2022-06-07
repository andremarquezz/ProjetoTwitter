import React from 'react';
import { HeartIcon } from '@heroicons/react/outline';

function Tweet({ name, avatar, username, children }) {
  console.log('entrei');
  return (
    <div className="flex space-x-3 p-4 border-b border-silver items-center">
      <div>
        <img src={avatar} />
      </div>
      <div>
        <span className="font-bold text-sm">{name}</span>
        <span className="text-sm text-silver">@{username}</span>

        <p>{children}</p>
        <div className="flex space-x-1 text-silver text-sm items-center">
          <HeartIcon className="w-6 stroke-1 stroke-silver" />
          <span>1.2k</span>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
