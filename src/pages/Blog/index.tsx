import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Axios from 'axios';
import { Box } from '@chakra-ui/react';

type PostProps = {
  title: string;
  body: string;
  id: number;
  date: Date;
};
const Blog = () => {
  const { t } = useTranslation('common');
  const [posts, setPosts] = useState<PostProps[]>([]);

  const getPosts = async () => {
    await Axios.get('/api/post/show').then((res) => {
      setPosts(res.data.posts);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {posts ? (
        posts.map((post: PostProps) => <Box key={post.id}>{post.title}</Box>)
      ) : (
        <div>{t('blog.errMsg')}</div>
      )}
    </>
  );
};

// @ts-ignore
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
      // Will be passed to the page component as props
    },
  };
}
export default Blog;
