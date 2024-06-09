import {
  Box,
  SimpleGrid,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

const Animals = () => {
  const animals = [
    {
      name: "Brown bear (Ursus arctos)",
      info: "The brown bear is a large bear species found across Eurasia and North America. It is recognized as a national and state animal in several European countries.",
      habitat: "Eurasia and North America",
      image: "https://live.staticflickr.com/65535/53249783639_485b4e0567_b.jpg",
    },
    {
      name: "Red fox (Vulpes vulpes)",
      info: "The red fox is the largest of the true foxes and one of the most widely distributed members of the order Carnivora. It is present across the entire Northern Hemisphere including most of North America, Europe and Asia plus parts of North Africa.",
      habitat:
        "Northern Hemisphere including most of North America, Europe and Asia plus parts of North Africa",
      image:
        "https://lbginc.org.au/wp-content/uploads/2022/05/Fox-in-fieldFB-1024x683.jpg",
    },
    {
      name: "Tortoise (Testudo spp.)",
      info: "Tortoises are reptile species of the family Testudinidae of the order Testudines. They are particularly distinguished from other turtles by being land-dwelling, while many (though not all) other turtle species are at least partly aquatic.",
      habitat: "Worldwide, particularly land-dwelling",
      image:
        "https://i0.wp.com/holarcticbridge.com/wp-content/uploads/2020/03/Testudo-Agrionemys-horsfieldii_1-1-scaled.jpg?fit=2560%2C1707&ssl=1",
    },
    {
      name: "Lynx",
      info: "The lynx is a medium-sized wild cat that is found in remote northern forests of North America, Europe, and Asia. Lynx are covered with beautiful thick fur that keeps them warm during frigid winters.",
      habitat: "Northern forests of North America, Europe, and Asia",
      image:
        "https://images.theconversation.com/files/267329/original/file-20190403-177190-1a2n3pp.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crophttps://images.rewildingbritain.org.uk/images/lynx-in-forest-c-animalphotography.ch-shutterstock.jpg?auto=format&crop=focalpoint&domain=images.rewildingbritain.org.uk&fit=crop&fp-x=0.5155&fp-y=0.3744&h=1080&ixlib=php-3.3.1&q=82&usm=20&w=1920",
    },
    {
      name: "Mountain goat (Capra aegagrus)",
      info: "The mountain goat, also known as the Rocky Mountain goat, is a hoofed mammal endemic to North America. A subalpine to alpine species, it is a sure-footed climber commonly seen on cliffs and ice.",
      habitat: "North America, particularly in subalpine to alpine regions",
      image: "https://zooinstitutes.com/img/animals/12/12506.jpg",
    },
    {
      name: "Wild boar (Sus scrofa)",
      info: "The wild boar, also known as the wild swine, Eurasian wild pig, or simply wild pig, is a suid native to much of Eurasia, North Africa, and the Greater Sunda Islands.",
      habitat: "Eurasia, North Africa, and the Greater Sunda Islands",
      image:
        "https://eunis.eea.europa.eu/images/species//11340/0f2c21ba80ee66b566ee0f47897fb0b2.jpg",
    },
  ];

  const bg = useColorModeValue("white", "gray.800");

  return (
    <SimpleGrid p={16} columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
      {animals.map((animal, index) => (
        <Box
          key={index}
          bg={bg}
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          _hover={{ boxShadow: "lg" }}
        >
          <Image src={animal.image} alt={animal.name} h={250} w="100%" />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Text
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                <b>{animal.name}</b>
              </Text>
            </Box>
            <Box>
              <Text mt="1">{animal.info}</Text>
              <Text mt="1">
                <b>Habitat:</b> {animal.habitat}
              </Text>
            </Box>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Animals;
