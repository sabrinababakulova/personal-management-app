import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Axios from 'axios';
import Posts from './posts';
const Blog = () => {
  const { t } = useTranslation('common');
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    await Axios.get('/api/post/show').then((res) => {
      setPosts(res.data.posts);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);
  console.log(posts);
  // return <div>{t('blog.errMsg')}</div>;
  return <Posts posts={posts} />;
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
