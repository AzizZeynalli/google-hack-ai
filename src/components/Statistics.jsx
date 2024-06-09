import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  Spacer,
  Button,
  Flex,
} from "@chakra-ui/react";
import safe from "../assets/safe-icon.png";
import danger from "../assets/danger-icon.png";
import droneimage from "../assets/drone.png";
import { useState } from "react";

const Statistics = ({ situation = "danger" }) => {

  const [drone, setDrone] = useState(false)
  return (
    <Box
      display="flex"
      p={8}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box h="220px" p={4} bg="blue.100" borderRadius="17px">
        <Heading as="h4" size="md" mb={4}>
          Region: Güllük Dağı-Termessos Milli Parkı (Antalya)
        </Heading>
        <Stack spacing={3}>
          <Text>
            <strong>Chipped animals: </strong> 49{" "}
          </Text>
          <Text>
            <strong>Critical anomalies detected: </strong> 23{" "}
          </Text>
          <Text>
            <strong>Other anomalies: </strong> Unusual animal behavior,
            Unexpected changes in the animals environment
          </Text>
          <Text>
            <strong>Threat percentage: </strong> 59.32%{" "}
          </Text>
        </Stack>
      </Box>
      <Spacer />
      {situation === "safe" && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={4}
          bg="green.100"
          borderRadius="17px"
          color="black"
        >
          <Text as="b" fontSize="xl">
            The region is currently safe
          </Text>
          <Image src={safe} w={150} h={150} mt={4} />
        </Box>
      )}
      {situation === "danger" && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={4}
          bg="red.100"
          borderRadius="17px"
          color="black"
        >
          <Text as="b" fontSize="xl">
            The region is currently in danger
          </Text>
          <Image src={danger} w={120} h={120} mt={4} />
          <Flex mt={4} gap="50px">
            <Button onClick={() => setDrone(!drone)} colorScheme="red" size="lg" mt={4}>
              {drone && <span>Drone sent</span>}
              {!drone && <span>Send drone</span>}
            </Button>
            <Image src={droneimage} width={20} height={20} />
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Statistics;
