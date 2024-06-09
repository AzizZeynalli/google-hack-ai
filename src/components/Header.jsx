import {
  Box,
  Link,
  Flex,
  Image,
  Spacer,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import logo from "../assets/wildguard-logo.png";

const Header = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <Box
      bg={bg}
      px={12}
      color={color}
      borderBottomWidth={1}
      borderBottomColor="gray.200"
    >
      <Flex alignItems="center">
        <Stack
          as={Flex}
          direction={["column", "row"]}
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          <Link px={2} href="/">
            Home
          </Link>
          <Link px={2} href="/about-us">
            About Us
          </Link>
          <Link px={2} href="/services">
            Services
          </Link>
          <Link px={2} href="/animals">
            Animals
          </Link>
          <Link px={2} href="/forests">
            Forests
          </Link>
          <Link px={2} href="/faq">
            FAQ
          </Link>
        </Stack>
        <Spacer />
        <Box p="2">
          <Link href="/"><Image src={logo} h="90px" w="90px" /></Link>
        </Box>
        <Spacer />
        <Stack direction={["column", "row"]} spacing={4}>
          <Link href="book-demo">
            <Button colorScheme="teal">Book a demo</Button>
          </Link>
          <Link href="schedule-meeting">
            <Button colorScheme="teal" variant="outline">
              Schedule a meeting
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Header;
