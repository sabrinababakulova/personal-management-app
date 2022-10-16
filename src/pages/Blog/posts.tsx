import React, { FC } from 'react';

type PostProps = {
  title: string;
  body: string;
  id: number;
  date: Date;
};
interface IProps {
  posts: PostProps[];
}
const Posts: FC<IProps> = ({ posts }) => {
    return (
    <>
      {posts.map((post: PostProps) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  );
};

export default Posts;
