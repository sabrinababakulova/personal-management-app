import {
  Box,
  Text,
  Flex,
  Divider,
  Grid,
  Button,
  GridItem,
} from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import ModalAdding from "../../components/ModalAdding";

function FinancePage() {
  return (
    <>
      <Box className={styles.container}>
        <Flex
          gap={5}
          textAlign="center"
          direction={["column", "column", "column", "row"]}
        >
          <Box flex={1}>
            <Box h="100px" borderWidth="2px" mb={2}>
              <Text>Monthly Budget</Text>
              <Divider />
            </Box>
            <Box h="100px" borderWidth="2px">
              <Text>In the Card</Text>
              <Divider />
            </Box>
          </Box>
          <Box borderWidth="2px" flex={2}>
            <Text>income</Text>
          </Box>
          <Box flex={2} borderWidth="2px">
            <Text fontSize={["15px", "17px", "2xl"]} pos="relative">
              Spenditure
              <ModalAdding />
              {/* <Button pos="absolute" right="2%" size="xs" top="27%" onClick={() => {
                                <ModalAdding />
                            }}>Add Item</Button> */}
            </Text>
            <Divider h={2} />
            <Flex justify="space-around">
              <Text>Item</Text>
              <Text>Amount</Text>
            </Flex>
            <Grid templateColumns="repeat(2, 1fr)" gap={1}>
              {/* There will be prop of items */}
              <GridItem borderWidth="2px">
                <Box>
                  <Text>Item</Text>
                  <Divider />
                </Box>
              </GridItem>

              {/* There will be props of amount of money spent */}
              <GridItem borderWidth="2px">
                <Box>
                  <Text>Amount</Text>
                  <Divider />
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default FinancePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination:
          "/api/auth/signin?callbackUrl=https://sabrinastuff.vercel.app/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
