import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import Buttons from "./Button";

const MiniProductSection = ({image, name}) => {

    return ( 
        <Box as="section" width="20rem" height="20rem">
            <Image src={image} alt={name}/>
            <Box as ="h2" textAlign="center" marginTop="1rem" fontSize="23px" fontWeight="600">{name}</Box>
            <Box marginLeft ="3rem">
            <Buttons text="see products"color="#D87D4A"  stateName={name}/>
            </Box>
        </Box>
     );
}
 
export default MiniProductSection;