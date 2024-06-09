import { Box } from "@chakra-ui/react";
import MapComponent from "./MapComponent";
import Statistics from "./Statistics"

const Hero = () => {
    return (
        <Box display="flex" justifyContent="space-between" p={8}>
            <MapComponent />
            <Statistics />
        </Box>
    );
}

export default Hero;