import React from "react";
import Head from "next/head";
import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
function Menu() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex m={4} justify="center" gap={5} direction={["column", "row"]} mb={5}>
        <Link href="/Personal" passHref>
          <Button flex={3} variant="outline" p={7}>
            Sabrina&apos;s Personal
          </Button>
        </Link>

        <Link href="/Blog" passHref>
          <Button flex={3} variant="outline" p={7}>
            Blog
          </Button>
        </Link>

        <Link href="/" passHref>
          <Button variant="outline" flex={1} p={7}>
            GO HOME
          </Button>
        </Link>
      </Flex>
    </>
  );
}

export default Menu;
