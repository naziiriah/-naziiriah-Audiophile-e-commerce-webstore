import { Box} from "@chakra-ui/layout";
import Buttons from "../mini-components/Button";
import { Image } from "@chakra-ui/image";
import earbud from "../assets/home/desktop/image-earphones-yx1.jpg"


const SectionSpeaker3 = () => {
    return (
        // third images of main page
        <Box as="section"  margin='auto'  marginTop="4rem"display="flex" 
        flexDirection={["column", "row", "row","row"]}
        justifyContent="space-between" width={["100%","90%","80%","80%"]} height="45rem">
            <Image src={ earbud } width={["100%","50%","50%","50%"]}  height="30rem"/>
            <Box width={["100%","90%","80%","80%"]} height={["40rem", "30rem", "30rem","30rem"]} bgColor="#f1f1f1">
                <Box as ="h2" fontSize="45px" color="#000" width="100%"  marginY="4rem" textAlign="center" fontWeight="550" textTransform="uppercase" lineHeight="70px">yx1 earphone</Box>
                <Box margin="auto" width="50%"> <Buttons text="see products" color="#000" stateName="YX1 Wireless Earphones"/> </Box>
            </Box>
        </Box>
      );
}
 
export default SectionSpeaker3;