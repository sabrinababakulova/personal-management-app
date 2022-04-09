// import React from 'react'
import { Box, Text, Flex } from "@chakra-ui/react"
import Menu from './Menu'
import styles from '../../styles/Home.module.css'

import { useSession, signOut } from 'next-auth/react'

function InhaPage() {
    const { data: session } = useSession();
    if (!session) {
        // return <>
        //     <SignIn />
        // </>
        // Router.push('/');
    }
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