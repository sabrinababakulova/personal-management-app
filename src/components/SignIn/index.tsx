import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
function SignIn() {
  return (
    <Box>
      <Flex mt={5} direction="column" justify="center" align="center">
        <Text fontSize={25} m={5}>
          You need to be Sabrina in order to access the info in this website
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
      </Flex>
    </Box>
    // <div>Authorization</div>
  );
}

export default SignIn;
