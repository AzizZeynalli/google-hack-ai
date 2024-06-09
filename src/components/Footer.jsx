import { Flex, Link, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex direction="column" justify="center" align="center" bg="white"  pb={2}>
      <Text>© 2024 WildGuard</Text>
      {/* <Stack
        direction={["column", "row"]}
        spacing={5}
        justify="center"
        align="center"
      >
        <Link href="#">About Us</Link>
        <Link href="#">Contact Us</Link>
        <Link href="#">Privacy Policy</Link>
      </Stack> */}
    </Flex>
  );
};

export default Footer;