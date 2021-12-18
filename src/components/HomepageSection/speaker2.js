import { Box } from "@chakra-ui/layout";
import Buttons from "../mini-components/Button";

const SectionSpeaker2 = () => {
    return (
        <Box as="section" className="speak-bg" width={["100%","90%","80%","80%"]} height="25rem"  margin="auto" marginTop="4rem"
        
         borderRadius="7px">
            <Box as ="h2" fontSize={["33px", "55px", "55px","55px"]} paddingTop="5rem" paddingLeft={["20%","10%","10%","20%"]} color="#000" width={["70%", "70%", "100%", "100%"]}  fontWeight="550" textTransform="uppercase" lineHeight="70px">zx7 speaker</Box>
           <Box paddingLeft={["10%","10%","20%","30%"]}> <Buttons text="see products" color="#000"  stateName="ZX7 Speaker"/> </Box>
        </Box>
      );
}
 
export default SectionSpeaker2;