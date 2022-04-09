import { Box, Text, Flex, Divider } from "@chakra-ui/react"
import Menu from './Menu'
import styles from '../../styles/Home.module.css'

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