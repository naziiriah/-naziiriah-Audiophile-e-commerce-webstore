import  { Box,} from "@chakra-ui/react"
import { Link } from "react-router-dom";
import  BasicUsage from "./modal"


//  displaying nv links and header and carts

const Head = () => {
  
    return (
        <>
        <Box as="nav" className="Header" w="100%" h="100" color="fff" >
            <Box  maxW="1200" mt="3" margin="auto" h="20"  d="flex" justifyContent= "space-between" alignItems="center" borderBottomColor="white" borderBottomStyle="solid" borderBottomWidth="1.5px" border>
                <Box as="h2" fontSize="18" color="#fff" fontWeight="700" letterSpacing="2px">audiophile</Box>
                <Box as="ul" d="inline-flex" textDecoration="none" listStyleType="none" fontSize="">
                   <Link to="/"> <Box as="li" fontSize="15" textTransform="uppercase"  textAlign="center" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} >home</Box></Link>
                    <Link to="/headphones"><Box as="li" fontSize="15" textTransform="uppercase" textAlign="center" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} >headphones</Box></Link>
                    <Link to="/speakers"><Box as="li" fontSize="15" textTransform="uppercase"  textAlign="center" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} >speakers</Box></Link>
                    <Link to="/earphones"><Box as="li" fontSize="15" textTransform="uppercase"  textAlign="center" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} >earphones</Box></Link>
                </Box>
                <Box>
                <BasicUsage/>
                </Box>
            </Box> 
        </Box>
     
      
        </>
    );
}
 
export default Head;