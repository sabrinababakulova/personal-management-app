// import React from 'react'
import { Box, Text, Flex, Divider, Grid } from "@chakra-ui/react"
import Menu from '../../components/Menu'
import styles from '../../styles/Home.module.css'
import { useSession, getSession, signOut } from 'next-auth/react';
import { GetServerSideProps } from 'next'


function InhaPage() {
    return (
        <>
            <Box className={styles.container}>
                <Menu />
                <Flex justify="space-around" gap={5} textAlign="center" direction={["column", "column", "column", "row"]}>
                    {/* GPA OVER ALL YEARS */}
                    <Box borderWidth="2px" borderRadius='lg' w="100%" h="50vh">
                        <Text fontSize="2xl">
                            GPA
                        </Text>
                        <Divider h={2} />
                    </Box>

                    {/* NEW STUFF THAT PROFFESORS ADDED */}
                    <Box borderWidth="2px" borderRadius='lg' w="100%" h="50vh">
                        <Text fontSize="2xl">
                            Assigned attributes
                        </Text>
                        <Divider h={2} />
                        <Grid templateColumns='repeat(5, 1fr)' >
                            <Text >Videos</Text>
                            <Text>Quizes</Text>
                            <Text>Assignments</Text>
                            <Text>Files</Text>
                            <Text>Extra</Text>
                        </Grid>
                    </Box>


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

