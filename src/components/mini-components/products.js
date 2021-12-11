import { Box } from "@chakra-ui/layout";
import { Image, Icon } from '@chakra-ui/react'
import { IoIosArrowForward } from 'react-icons/io';
import miniHeadphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png"
import miniSpeakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png"
import miniEarphone from "../assets/shared/desktop/image-category-thumbnail-earphones.png"



const ProductSection = () => {
    return (
        <Box as="section" 
        display="flex" h="500"  w="100%" 
        bgColor="#fff"
        margin="auto">
            <Box w="80%" h="23rem"d="flex" m="auto" marginTop="10rem"  justifyContent="space-between" textTransform="uppercase">
                <Box height="15rem" marginTop="3rem" bgColor="#f1f1f1" w="21rem" _hover={{ cursor:"pointer"}}>
                    <Image  marginTop="-5rem" mx="auto"  src={miniHeadphones} alt="headphones" width="13rem"/>
                    <Box as="h2" mt=".5rem" textAlign="center" fontSize="22px" fontWeight="700" letterSpacing="1px">headphones</Box>
                    <Box as="h4" mt=".5rem" fontSize="19px"textAlign="center" fontWeight="550" _hover={{ color:"#D87D4A",cursor:"pointer"}}>shop <Icon mx=".5rem" as={ IoIosArrowForward } color="#D87D4A" /></Box>
                </Box>
                <Box height="15rem" marginTop="3rem" bgColor="#f1f1f1" w="21rem"  _hover={{ cursor:"pointer"}}>
                    <Image  marginTop="-5rem" mx="auto" src={miniSpeakers} alt="speakers" width="13rem"/>
                    <Box as="h2" mt=".5rem" textTransform="uppercase" textAlign="center" fontSize="22px" fontWeight="700" letterSpacing="1px">speaker </Box>
                    <Box as="h4" mt=".5rem" fontSize="19px"textAlign="center" fontWeight="550" _hover={{ color:"#D87D4A",cursor:"pointer"}}>shop <Icon mx=".5rem" as={ IoIosArrowForward } color="#D87D4A" /></Box>
                </Box>
                <Box height="15rem" marginTop="3rem" bgColor="#f1f1f1" w="21rem"  _hover={{ cursor:"pointer"}}>
                    <Image marginTop="-5rem" mx="auto" src={miniEarphone} alt="earphones" width="13rem"/>
                    <Box as="h2" mt=".5rem" textTransform="uppercase" textAlign="center" fontSize="22px" fontWeight="700" letterSpacing="1px"> earphones</Box>
                    <Box as="h4" mt=".5rem" fontSize="19px" textAlign="center" fontWeight="550" _hover={{ color:"#D87D4A",cursor:"pointer"}}>shop <Icon mx =".5rem" as={ IoIosArrowForward } color="#D87D4A"/></Box>
                </Box>
            </Box>
        </Box>
      );
}
 
export default ProductSection;