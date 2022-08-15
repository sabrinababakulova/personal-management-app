import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
function SignIn() {
  return (
    <Box>
      <Flex direction="column" justify="center" align="center" gap={6}>
        <Text fontSize={22} align="center">
          You need to be Sabrina in order to access the info on this page
        </Text>
        <Image
          alt="bitch you better be sabrina /euphoria quote/"
          src="../authorizationPhoto.jpg"
          boxSize="300px"
          w="385px"
        />
        <Flex gap={5} direction={["column", "row"]}>
          <Link href="/" passHref>
            <Button
              variant="outline"
              onClick={() => {
                signIn("github");
              }}
            >
              Authorize with Github
            </Button>
          </Link>
          <Link href="https://t.me/get_rektttt" passHref>
            <Button variant="outline">Ask me for a sign in</Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
    // <div>Authorization</div>
  );
}

export default SignIn;
