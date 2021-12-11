import { Box } from "@chakra-ui/layout";
import Buttons from "../mini-components/Button";

const SectionSpeaker2 = () => {
    return (
        <Box as="section" className="speak-bg" width="80%" height="25rem"  margin="auto" marginTop="4rem"
         borderRadius="7px">
            <Box as ="h2" fontSize="50px" color="#000" width="20rem" pos="relative" top="6rem" left="8rem" fontWeight="550" textTransform="uppercase" lineHeight="70px">zx7 speaker</Box>
           <Box pos="relative" top="6rem" left="10rem"> <Buttons text="see products" color="#000" stateName="ZX7 Speaker"/> </Box>
        </Box>
      );
}
 
export default SectionSpeaker2;