import { Box, Center, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box as="main" pb={8}>
      <Center>
        <Heading as="h1" size="2xl" mt={8}>
          Task Lists
        </Heading>
      </Center>
    </Box>
  );
}
