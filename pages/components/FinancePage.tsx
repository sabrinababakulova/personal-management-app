import { Box, Text, Flex, Divider, Grid, Button } from "@chakra-ui/react"
import Menu from './Menu'
import styles from '../../styles/Home.module.css'
import { useSession, getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next'

function FinancePage() {
    return (
        <>
            <Box className={styles.container}>
                <Menu />
                <Flex gap={5} textAlign="center">
                    <Box flex={1}>
                        <Box h="100px" borderWidth="2px">
                            <Text>Monthly Budget</Text>

                        </Box>
                        <Box h="100px" borderWidth="2px">
                            <Text>In the Card</Text>

                        </Box>
                    </Box>
                    {/* <Box borderWidth="2px" flex={2}>
                    <Text>
                        income
                    </Text>
                    </Box> */}
                    <Box flex={2} borderWidth="2px">
                        <Text fontSize={["15px", "17px", "2xl"]} pos="relative">
                            Spenditure
                            <Button pos="absolute" right="2%" size="sm" top="15%" fontSize="20px">Add Item</Button>
                        </Text>
                        <Divider h={2} />
                        <Flex justify="space-around">
                            <Text>Item</Text>
                            <Text>Amount</Text>
                        </Flex>
                        <Grid>

                        </Grid>

                    </Box>

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