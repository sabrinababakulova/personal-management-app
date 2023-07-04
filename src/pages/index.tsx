import { Box, Heading, Text, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import GridInfo from '../components/GridInfo';
const Home: NextPage = () => {
  const { t } = useTranslation('common');
  // such a big change hot damn
  return (
    <>
      <Box h='100vh'>
        <Box className={styles.container} p={5} borderRadius={20}>
          <Heading
            fontFamily='Roboto Mono, monospace'
            as='h1'
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            noOfLines={1}
          >
            {t('myName')}
            <a className={styles.straighDash}>|</a>
          </Heading>
          <Box fontSize={18} mt={8}>
            {t('description.line1')}
            <ChakraLink
              color='red.400'
              href='https://www.itechart.com/'
              target='_blank'
              _hover={{ filter: 'opacity(0.6)' }}
              _focus={{
                boxShadow: '0px',
              }}
              borderBottom='1px dashed red'
            >
              iTechArt
            </ChakraLink>{' '}
            {t('description.line2')}
            <br />
            <br />
            {t('description.line3')}
            <Link href='/Blog' passHref>
              <a className={styles.simpleLink}> {t('description.line4')}</a>
            </Link>{' '}
            {t('description.line5')}
            <br />
            <br />
            <Box>
              <Link href='/Personal' passHref>
                <a className={styles.simpleLink}> {t('description.line6')}</a>
              </Link>{' '}
              {t('description.line7')}
              <Box position='relative'>
                <Text
                  className={styles.container}
                  position='relative'
                  zIndex='2'
                  transition='filter .3s ease'
                  _hover={{ filter: 'opacity(0)' }}
                >
                  {t('description.line8')}
                </Text>
                <ChakraLink position='absolute' zIndex='1' top={0}>
                  {t('description.line8undercover')}{' '}
                </ChakraLink>
              </Box>
            </Box>
            <br />
            <Text>{t('description.line9')}</Text>
          </Box>
        </Box>
      </Box>
      <Box textAlign='center'>
        <Heading size='2xl'>{t('portfolio.title')}</Heading>
        <Text>{t('portfolio.order')}</Text>
        <GridInfo />
      </Box>
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
export default Home;
