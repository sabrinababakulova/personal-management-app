import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'next-i18next';
import Axios from 'axios';
import { Box } from '@chakra-ui/react';
import useSWR, { Fetcher } from 'swr';
import InfoBlock from '../../components/InfoBlock';

type PostProps = {
  title: string;
  body: string;
  id: number;
  date: Date;
};

const fetcher: Fetcher<PostProps[], string> = (arg) =>
  Axios.get(arg).then((res) => {
    return res.data.posts;
  });

const Blog = () => {
  const { t } = useTranslation('common');
  const { data, error } = useSWR('/api/post/show', fetcher);

  if (!data && !error) {
    return <Box>foken wait please...</Box>;
  }

  return (
    <>
      {data ? (
        data.map((post) => (
          <Box key={post.id}>
            <InfoBlock title={post.title} body={post.body} date={post.date} />
          </Box>
        ))
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
    },
  };
}
export default Blog;
