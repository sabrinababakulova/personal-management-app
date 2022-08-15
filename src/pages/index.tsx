import { Box, Heading, Text, Link, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
const Home: NextPage = () => {
  return (
    <Box
      className={styles.container}
      p={5}
      border="2px solid #F9F9F9"
      borderRadius={20}
    >
      <Heading
        fontFamily="Roboto Mono, monospace"
        as="h1"
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        noOfLines={1}
      >
        Sabrina Babakulova|
      </Heading>
      <Box fontSize={18} mt={8}>
        Full-stack web-developer wannabe and a big try hard.
        <br />
        Student of INHA university, and working at{" "}
        <Link
          color="red.400"
          href="https://www.itechart.com/"
          _hover={{ filter: "opacity(0.6)" }}
          _focus={{
            boxShadow: "0px",
          }}
          borderBottom="1px dashed red"
        >
          iTechArt
        </Link>{" "}
        to make my life spicier.
        <br />
        <br />
        Keeping the{" "}
        <Link
          href="/Blog"
          size="xl"
          borderRadius="0"
          borderBottom="1px dashed black"
          _hover={{ filter: "opacity(0.6)" }}
          _focus={{
            boxShadow: "0px",
          }}
        >
          blog
        </Link>{" "}
        about the innovations that I make/find in the sphere of programming, and
        to get used to the concept of consistency.
        <br />
        <br />
        <Box>
          The{" "}
          <Link
            href="/Personal"
            size="xl"
            borderRadius="0"
            borderBottom="1px dashed black"
            _hover={{ filter: "opacity(0.6)" }}
            _focus={{
              boxShadow: "0px",
            }}
          >
            Sabrina&apos;s Personal
          </Link>{" "}
          is a place where I keep my{" "}
          <Box position="relative" w="fit-content">
            <Text
              className={styles.container}
              position="relative"
              zIndex="2"
              transition="filter .3s ease"
              _hover={{ filter: "opacity(0)" }}
            >
              spenditure in check
            </Text>
            <Link position="absolute" zIndex="1" top={0}>
              shit together
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
