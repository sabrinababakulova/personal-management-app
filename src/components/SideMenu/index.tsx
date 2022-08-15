import React from "react";
import Link from "next/link";
import { Button, Flex } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
const SideMenu = () => {
  const router = useRouter();
  return (
    <Flex
      textAlign="left"
      justifyContent="flex-start"
      direction="column"
      w={32}
      gap={1}
      border="5px solid grey"
      borderRadius={10}
      position="fixed"
    >
      <Link href="/Personal/Emails" passHref>
        <Button h={20}>Emails</Button>
      </Link>
      <Link href="/Personal/University" passHref>
        <Button h={20}>University</Button>
      </Link>
      <Link href="/Personal/Finances" passHref>
        <Button h={20}>Finances</Button>
      </Link>
      <Button
        onClick={async () => {
          router.push("/Personal").then(() => signOut());
        }}
        variant="outline"
      >
        Sign out
      </Button>
    </Flex>
  );
};

export default SideMenu;
