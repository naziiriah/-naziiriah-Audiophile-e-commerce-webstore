import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import Buttons from "./Button";

const MiniProductSection = ({image, name}) => {

    return ( 
        <Box as="section" width={["20rem", "20rem", "10rem", "20rem"]} height="31rem" margin="auto">
            <Image src={image} alt={name} marginTop="-5rem"/>
            <Box as ="h2" textAlign="center" marginTop={["0.5rem" ,"0.5rem", "1rem", "1rem"]} fontSize="23px" fontWeight="600">{name}</Box>
            <Box marginLeft ="3rem">
            <Buttons text="see products"color="#D87D4A" width="100%"  stateName={name}/>
            </Box>
        </Box>
     );
}
 
export default MiniProductSection;