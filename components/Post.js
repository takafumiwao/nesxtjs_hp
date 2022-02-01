import Link from 'next/link';
import React from 'react';

const Post = ({post}) => {
  return(
    <div>
        <span>{post.id}</span>
        {" :" }
        <Link href={`/posts/${post.id}`} passHref>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
            {post.title}
        </span>
        </Link>
    </div>);
};

export default Post;
