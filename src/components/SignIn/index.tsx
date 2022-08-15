import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
function SignIn() {
  return (
    <Box>
      <Flex mt={5} direction="column" justify="center" align="center" gap={5}>
        <Text fontSize={25} m={5}>
          You need to be Sabrina in order to access the info on this page
        </Text>
        <Image
          alt="bitch you better be sabrina /euphoria quote/"
          src="../authorizationPhoto.jpg"
          boxSize="300px"
          w="385px"
        />
        <Button
          mt={5}
          size="lg"
          variant="outline"
          onClick={() => {
            signIn("github");
          }}
        >
          {" "}
          <Link href="/" passHref>
            Authorize with Github
          </Link>
        </Button>
        <Link href="https://t.me/get_rektttt" passHref>
          <Button>Ask me for a signIn</Button>
        </Link>
      </Flex>
    </Box>
    // <div>Authorization</div>
  );
}

export default SignIn;
