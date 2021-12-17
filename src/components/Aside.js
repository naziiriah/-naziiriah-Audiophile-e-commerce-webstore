import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import image from "../components/assets/shared/desktop/image-best-gear.jpg"

const Aside = () => {
    return ( 
        <Box as ="aside" order="revert" width={["100%","100%","90%","80%"]} height={["70rem", "70rem","70rem", "40rem"]} display="flex" flexDirection={["column", "column", "column", "row"]}  justifyContent="space-between" margin="auto" marginTop="5rem">
            <Box marginTop="6rem" order={["1","1","1","0"]} >
                <Box as="h2" lineHeight="" textAlign={["center", "center","center","start"]}
                textTransform="uppercase" marginBottom="1.5rem" 
                fontSize="33px" fontWeight="700" letterSpacing="2px"
                width="100%">bringing you the best <Box as="span" color="#D87D4A"> audio</Box> gear</Box>
                <Box as="p" width={["100%","100%","90%","90%"]} lineHeight="28px" fontSize="20px" letterSpacing=".3px" >
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
                 We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. 
                 Stop by our store to meet some of the 
                fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </Box>
            </Box>
            <Image height={["40rem"]} src={image} width={["100%","100%","90%","50%"]} alt="enjoying music with our gears" order={["0","0","0","1"]} />
        </Box>
     );
}
 
export default Aside;