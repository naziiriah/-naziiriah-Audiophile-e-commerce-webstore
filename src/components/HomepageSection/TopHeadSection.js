import { Box } from "@chakra-ui/layout";
import Buttons from "../mini-components/Button";


const TopHeadSection = () => {


    return (
            <Box as="section"
              className="head-section" 
              w="100%" h="800" marginTop="-40">
                <Box h="450" maxW= "500" color="white"  
                pos="relative" top="17rem" left="8rem">
                    <Box textTransform="uppercase" letterSpacing="9px"
                     fontSize="19px" as="h4" color="grey" mb="1rem">
                        new product
                    </Box>
                    <Box as="h1" textTransform="uppercase" fontSize="51px" 
                    fontWeight="700" letterSpacing="3px">
                        xx99 mark ii headphones
                    </Box>
                    <Box as="p" lineHeight="30px" fontSize="19px" color="grey.400" w="90%" my="2rem">
                        Experience natural, lifelike audio and exceptional 
                        building quality made for the passionate music
                        enthusiast.
                    </Box>
                    <Buttons text = "see product"color="#D87D4A" stateName="XX99 Mark II Headphones"/>
                </Box>
                
            </Box>
        );
}
 
export default TopHeadSection;