import { Box} from "@chakra-ui/layout";
import imageSpeaker from "../assets/home/desktop/image-speaker-zx9.png"
import { Image } from "@chakra-ui/image";
import Buttons from "../mini-components/Button";


const SectionSpeaker = () => {
    return ( 
            <Box as ="section" width={["100%","90%","80%","80%"]} margin="auto" borderRadius="7px" marginTop="4rem" height={["80rem","80rem","35rem","35rem"]} bgColor="#D87D4A" display="flex" flexDirection={["column", "column", "row", "row"]} justifyContent="space-around">
                <Box width={["90%","90%","45%","45%"]} my={["10%", "10%", "0", "0"]} margin="auto">
                <Image src={ imageSpeaker } width={["100%","100%", "23rem", "23rem"]} mt="7.2rem" height="28rem" alt="speaker-model-zx9"/> 
                </Box>
                
                <Box as="p" mt="8.2rem" width={["90%","90%","45%","45%"]} margin="auto">
                    <Box as ="h1" fontSize="60px" color="#fff" width={["100%","100%", "23rem", "23rem"]} textAlign="center" fontWeight="550" textTransform="uppercase" lineHeight="70px">
                        zx9 speaker
                    </Box>
                    <Box as="p" width="90%" margin="auto" color="#f1f1f1" mt="2rem" textAlign="center" lineHeight="30px" fontSize="20px">
                        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound
                    </Box>
                    <Box width={["70%","50%","80%","80%"]} margin="auto" my="2rem">
                    <Buttons text = "see products"  color="#000" stateName="ZX9 Speaker"/>
                    </Box>
                </Box>
            </Box>
     );
}
 
export default SectionSpeaker;