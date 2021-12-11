import { Box} from "@chakra-ui/layout";
import Buttons from "../mini-components/Button";
import { Image } from "@chakra-ui/image";
import earbud from "../assets/home/desktop/image-earphones-yx1.jpg"


const SectionSpeaker3 = () => {
    return (
        // third images of main page
        <Box as="section"  margin='auto'  marginTop="4rem"display="flex" 
        justifyContent="space-between" width="80%" height="25rem">
            <Image src={ earbud }  height="20rem"/>
            <Box width="34rem" height="20rem" bgColor="#f1f1f1">
                <Box as ="h2" fontSize="45px" color="#000" width="20rem" pos="relative" top="3rem" left="8rem" fontWeight="550" textTransform="uppercase" lineHeight="70px">yx1 earphone</Box>
                <Box pos="relative" top="2rem" left="10rem"> <Buttons text="see products" color="#000" stateName="YX1 Wireless Earphones"/> </Box>
            </Box>
        </Box>
      );
}
 
export default SectionSpeaker3;