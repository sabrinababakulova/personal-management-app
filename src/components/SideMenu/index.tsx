import React from "react";
import Link from "next/link";
import { Button, Flex } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
const SideMenu = () => {
  return (
    <Flex
      textAlign="left"
      justifyContent="flex-start"
      direction="column"
      w={32}
      border="5px solid grey"
      borderRadius={10}
    >
      <Button onClick={() => signOut()} variant="outline">
        SignOut
      </Button>
      <Link href="/Personal/Emails" passHref>
        <Button h={20}>Emails</Button>
      </Link>
      <Link href="/Personal/University">
        <Button h={20}>University</Button>
      </Link>
      <Link href="/Personal/Finances">
        <Button h={20}>Finances</Button>
      </Link>
    </Flex>
  );
};

export default SideMenu;

{
  /* <Button
          onClick={async () => {
            router.push("/").then(() => signOut());
          }}
          flex={1}
          p={7}
          variant="solid"
        >
          Sign out
        </Button> */
}
