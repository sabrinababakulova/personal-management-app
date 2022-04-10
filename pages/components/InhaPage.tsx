// import React from 'react'
import { Box, Text, Flex } from "@chakra-ui/react"
import Menu from './Menu'
import styles from '../../styles/Home.module.css'
import { useSession, getSession, signOut } from 'next-auth/react';
import { GetServerSideProps } from 'next'


function InhaPage() {
    return (
        <>
            <Box className={styles.container}>
                <Menu />
                <Flex justify="space-around">

                    <Text>
                        Deadlines
                    </Text>

                    <Text>
                        New stuff
                    </Text>

                </Flex>
            </Box>
        </>
    )
}

export default InhaPage

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {
                destination: '/api/auth/signin?callbackUrl=https://sabrinastuff.vercel.app/',
                permanent: false
            }
        }
    }
    return {
        props: {
            session
        }
    }
}

