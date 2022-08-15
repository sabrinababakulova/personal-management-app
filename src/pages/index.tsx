import { Box, Heading, Text, Link, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Box mt={16}>
          <Heading as="h1" size="3xl" noOfLines={1}>
            Sabrina Babakulova
          </Heading>
          <Box fontSize={22} mt={14}>
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
            about the innovations that I make/find in the sphere of programming,
            and to get used to the concept of consistency.
            <br />
            <br />
            <Flex gap={2}>
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
              <Box position="relative">
                <Box
                  bg="white"
                  zIndex="1"
                  transition="filter .3s ease"
                  _hover={{ filter: "opacity(0)" }}
                >
                  spenditure in check
                </Box>
                <Link position="absolute" zIndex="-1" top={0} right={50}>
                  shit together
                </Link>
              </Box>
            </Flex>
          </Box>
        </Box>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};
export default Home;
