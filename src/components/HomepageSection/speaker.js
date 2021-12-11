import { Box} from "@chakra-ui/layout";
import imageSpeaker from "../assets/home/desktop/image-speaker-zx9.png"
import { Image } from "@chakra-ui/image";
import Buttons from "../mini-components/Button";


const SectionSpeaker = () => {
    return ( 
            <Box as ="section" width="80%" margin="auto" borderRadius="7px" marginTop="4rem" height="35rem" bgColor="#D87D4A" display="flex" justifyContent="space-around">
                <Image src={ imageSpeaker } width="20rem" mt="7.2rem" height="28rem" alt="speaker-model-zx9"/>
                <Box as="p" mt="8.2rem" width="23rem">
                    <Box as ="h1" fontSize="60px" color="#fff" width="18rem" fontWeight="550" textTransform="uppercase" lineHeight="70px">
                        zx9 speaker
                    </Box>
                    <Box as="p" width="100%" color="#f1f1f1" mt="2rem" lineHeight="30px" fontSize="20px">
                        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound
                    </Box>
                    <Buttons text = "see products" color="#000" stateName="ZX9 Speaker"/>
                </Box>
            </Box>
     );
}
 
export default SectionSpeaker;