import { Image, Text, Center } from "@chakra-ui/react";
import icon from "../assets/404-gif.gif"

const Error = () => {
    return (
        <Center flexDirection="column" py={32}>
            <Text fontSize="2xl" color="red.500" mb="4" fontWeight="600">
                Ooops... This page is currently empty.
            </Text>
            <Center>
                <Image src={icon} alt="Error 404" width={250} height={250} />
            </Center>
        </Center>
    );
}

export default Error;