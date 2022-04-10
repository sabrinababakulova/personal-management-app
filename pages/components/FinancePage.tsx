import { Box, Text, Flex, Divider } from "@chakra-ui/react"
import Menu from './Menu'
import styles from '../../styles/Home.module.css'
import { useSession, getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next'

function FinancePage() {
    return (
        <>
            <Box className={styles.container}>
                <Menu />
                <Flex justify="space-around">
                    <Text>
                        income
                    </Text>
                    <Text>
                        outcome
                    </Text>

                </Flex>
            </Box>
        </>
    )
}

export default FinancePage


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