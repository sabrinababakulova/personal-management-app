import React from 'react';
import Head from 'next/head';
import {
  Button,
  Flex,
  Avatar,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Link as ChakraLink,
} from '@chakra-ui/react';
import MenuBtn from '../../assets/Menu.svg';
import Link from 'next/link';
import { links } from '../Links';
import styles from '../../styles/Home.module.css';
import { useTranslation } from 'next-i18next';

function Menu() {
  const { t } = useTranslation('common');
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Head>
        <title>Sabrina Babakulova</title>
        <meta name='description' content="Sabrina Babakulova 's website" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.menu}>
        <Flex
          p='1em 3em'
          mb={6}
          justifyContent='space-between'
          alignItems='center'
          display={['flex', 'flex', 'none']}
        >
          <Avatar
            name='Sabrina Babakulova'
            src='https://avatars.githubusercontent.com/u/63979168?v=4'
          />
          <MenuBtn onClick={onOpen} />
        </Flex>
        <Flex
          m={4}
          justify='center'
          align='center'
          gap={5}
          mb={5}
          display={['none', 'none', 'flex']}
        >
          <Link href='/Personal' passHref>
            <Flex flex={1} gap={2}>
              <Avatar
                name='Sabrina Babakulova'
                src='https://avatars.githubusercontent.com/u/63979168?v=4'
              />
              <Button
                variant='link'
                _focus={{
                  boxShadow: '0px',
                }}
              >
                {t('menu.personal')}
              </Button>
            </Flex>
          </Link>

          <Link href='/Blog' passHref>
            <Button
              variant='link'
              _focus={{
                boxShadow: '0px',
              }}
            >
              {t('menu.blog')}
            </Button>
          </Link>

          <Link href='/' passHref>
            <Button
              variant='link'
              _focus={{
                boxShadow: '0px',
              }}
            >
              {t('menu.goHome')}
            </Button>
          </Link>
        </Flex>
      </div>
      <Drawer placement='bottom' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader className={styles.menu}>{t('menu.title')}</DrawerHeader>
          <DrawerBody mt={8} mb={8}>
            <Flex direction='column' gap={10}>
              <Link href='/Personal' passHref>
                <Button
                  onClick={onClose}
                  variant='link'
                  color='blackAlpha.800'
                  _focus={{
                    boxShadow: '0px',
                  }}
                >
                  {t('menu.personal')}
                </Button>
              </Link>

              <Link href='/Blog' passHref>
                <Button
                  onClick={onClose}
                  variant='link'
                  color='blackAlpha.800'
                  _focus={{
                    boxShadow: '0px',
                  }}
                >
                  {t('menu.blog')}
                </Button>
              </Link>

              <Link href='/' passHref>
                <Button
                  onClick={onClose}
                  variant='link'
                  color='blackAlpha.800'
                  _focus={{
                    boxShadow: '0px',
                  }}
                >
                  {t('menu.goHome')}
                </Button>
              </Link>
              <Flex gap={6} justify='center' mr={4}>
                {links.map((link) => (
                  <ChakraLink
                    target='_blank'
                    _hover={{ opacity: '0.5' }}
                    href={link.href}
                    key={link.href}
                  >
                    {link.icon}
                  </ChakraLink>
                ))}
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Menu;
