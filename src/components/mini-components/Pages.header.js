import { Box } from "@chakra-ui/layout"

const HeadSection = ({text}) => {
    return ( 
        <Box as="header" height="20rem" bgColor="#000" width="100%" marginTop="-7rem">
                <Box as="h1" fontSize="33px" fontWeight="600" textAlign="center" textTransform="uppercase" paddingTop="13rem" color="#fff" > { text } </Box>
        </Box> 
    );
}
 
export default HeadSection;