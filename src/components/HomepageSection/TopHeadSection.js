import { Box } from "@chakra-ui/layout";
import Buttons from "../mini-components/Button";


const TopHeadSection = () => {


    return (
            <Box as="section"
              className="head-section" 
              w="100%" h={["900"]} marginTop="-40">
                <Box h="450"  color="white"  width={["100%","100%","60%","50%"]}
                    paddingTop="17rem" paddingLeft="4rem" textAlign={["center", "center", "start","start" ]} >
                    <Box textTransform="uppercase" letterSpacing="9px"
                     fontSize="19px" as="h4" width="100%" color="grey" mb="1rem">
                        new product
                    </Box>
                    <Box as="h1" textTransform="uppercase" fontSize={["33px","33px","41px","51px"]}
                    fontWeight="700" letterSpacing="3px" >
                        xx99 mark ii headphones
                    </Box>
                    <Box as="p" lineHeight="30px" fontSize="19px" color="grey.400" w="90%" my="2rem">
                        Experience natural, lifelike audio and exceptional 
                        building quality made for the passionate music
                        enthusiast.
                    </Box>
                    <Buttons  text = "see product"color="#D87D4A" stateName="XX99 Mark II Headphones"/>
                </Box>
                
            </Box>
        );
}
 
export default TopHeadSection;