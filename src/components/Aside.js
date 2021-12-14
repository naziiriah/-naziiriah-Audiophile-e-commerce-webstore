import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import image from "../components/assets/shared/desktop/image-best-gear.jpg"

const Aside = () => {
    return ( 
        <Box as ="aside" width={["100%","100%","90%","80%"]} height={["60rem", "80rem","40rem", "40rem"]} display="flex" flexDirection={["column", "column", "row", "row"]}  justifyContent="space-between" margin="auto" marginTop="5rem">
            <Box marginTop="6rem">
                <Box as="h2" lineHeight=""
                textTransform="uppercase" marginBottom="1.5rem"
                fontSize="33px" fontWeight="700" letterSpacing="2px"
                width="24rem">bringing you the best <Box as="span" color="#D87D4A"> audio</Box> gear</Box>
                <Box as="p" width="27rem" lineHeight="28px" fontSize="20px" letterSpacing=".3px" >
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
                 We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. 
                 Stop by our store to meet some of the 
                fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </Box>
            </Box>
            <Image height="" src={image} alt="enjoying music with our gears" />
        </Box>
     );
}
 
export default Aside;