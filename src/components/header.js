import  { Box, Icon,} from "@chakra-ui/react"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import ProductSection from "./mini-components/products";
import  BasicUsage from "./modal"




//  displaying nv links and header and carts

const Head = () => {
    const [smallScreen, setSize] = useState(false)
    return (
        <>
        <Box as="nav" className="Header"maxWidth="100rem"  width="90%" margin="auto" h="100" color="fff"  >
            <Box   mt="3" margin="auto" h="20"  d="flex" justifyContent= "space-between" alignItems="center" borderBottomColor="white" borderBottomStyle="solid" borderBottomWidth="1.5px" border>
                <Box as="h2" fontSize="18" order={["2","2","2","1"]} color="#fff" fontWeight="700" letterSpacing="2px">audiophile</Box>
                <Box _hover={{cursor:"pointer", color:"#D87D4A"}} display={["block", "block", "block", "none"]}>
                 <Icon as={ GiHamburgerMenu } onClick={()=>{setSize(!smallScreen)}}></Icon>
                </Box>
                <Box  as="ul" order={["1","1","2","2"]} d={["none", "none","none","inline-flex"]} textDecoration="none" listStyleType="none" fontSize="">
                   <Link to="/"> <Box as="li" fontSize="15" textTransform="uppercase"  textAlign="center" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} >home</Box></Link>
                    <Link to="/headphones"><Box as="li" fontSize="15" textTransform="uppercase" textAlign="center" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} >headphones</Box></Link>
                    <Link to="/speakers"><Box as="li" fontSize="15" textTransform="uppercase"  textAlign="center" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} >speakers</Box></Link>
                    <Link to="/earphones"><Box as="li" fontSize="15" textTransform="uppercase"  textAlign="center" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} >earphones</Box></Link>
                </Box>
                <Box order={["3"]}>
                <BasicUsage/>
                </Box>
            </Box> 
            <Box>

                { smallScreen &&   
                <Box width="15rem" bgColor="black" marginTop="-5.5rem"  marginLeft="-1.7rem" height="30rem" pos="relative" top="0rem" >
                    <Box  >
                        <Icon as={IoMdClose} fontSize="33px" marginLeft="1rem" marginTop="2rem" _hover= {{  cursor:"pointer", color: "#D87D4A"}} onClick={() => setSize(false)}/>
                    </Box>
                    <Box  as="ul" width="10rem" marginLeft="4rem"  d={["flex"]} justifyContent="space-between" flexDirection="column" textDecoration="none" listStyleType="none" height="15rem">
                   <Link to="/"> <Box as="li" fontSize="15" textTransform="uppercase"  textAlign="start" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}}  onClick={() => setSize(false)}>home</Box></Link>
                    <Link to="/headphones"><Box as="li" fontSize="15" textTransform="uppercase" textAlign="start" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} onClick={() => setSize(false)} >headphones</Box></Link>
                    <Link to="/speakers"><Box as="li" fontSize="15" textTransform="uppercase"  textAlign="start" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}}  onClick={() => setSize(false)}>speakers</Box></Link>
                    <Link to="/earphones"><Box as="li" fontSize="15" textTransform="uppercase"  textAlign="start" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} onClick={() => setSize(false)} >earphones</Box></Link>
                </Box>
                  
                </Box>
                
                 }
            
            </Box>
        </Box>
     
      
        </>
    );
}
 
export default Head;