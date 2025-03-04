import  { Box, Icon } from "@chakra-ui/react"
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti'
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <Box as="footer" width="100%" height={["100rem", "45rem", "45rem" ,"45rem"]}  bgColor="#000" color="#fff" margin="auto" marginTop="4rem">
            <Box width="80%"  margin="auto" >
                <Box as="nav" w="100%"  margin="auto" h="20rem"  d="flex" flexDirection={["column", "column", "row" ,"row"]} paddingTop="4rem" justifyContent= "space-between" alignItems="center">
                        <Box as="h2" fontSize="18" color="#fff" fontWeight="700" letterSpacing="2px">audiophile</Box>
                        <Box as="ul" d="inline-flex" flexDirection={["column", "column", "row" ,"row"]} textDecoration="none" listStyleType="none" fontSize="">
                            <Link to ="/"> <Box as="li" fontSize="15" textTransform="uppercase"  textAlign="center" mx="15px" my="1rem" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}}>home</Box> </Link>
                            <Link to="/headphones"> <Box as="li" fontSize="15" textTransform="uppercase" textAlign="center" mx="15px" my="1rem" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} >headphones</Box> </Link>
                            <Link to="/speakers"> <Box as="li" fontSize="15" textTransform="uppercase"  textAlign="center" mx="15px" my="1rem" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}}>speakers</Box></Link>
                            <Link to="/earphones"> <Box as="li" fontSize="15" textTransform="uppercase"  textAlign="center" mx="15px" my="1rem" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}}>earphones</Box> </Link>
                    </Box>
                </Box>
                <Box width="100%" height="20rem" marginTop="4rem" display="flex" flexDirection={["column", "column", "row" ,"row"]} justifyContent="space-between">
                    <Box width={["100%", "100%", "50%", "50%"]} height="100%" fontSize="18px" fontWeight="400" lineHeight="26px" color="grey" textAlign="center" >
                    Audiophile is an all in one stop to fulfill your audio needs.
                     We're a small team of music lovers and sound specialists 
                     who are devoted to helping you get the most out of personal audio.
                     Come and visit our demo facility - we’re open 7 days a week.
                     <Box as="p" marginTop="6rem" textAlign="center">Copyright 2021. All Rights Reserved</Box>
                    </Box>
                    <Box margin={["auto", "auto", ".1rem", ".1rem" ]} marginTop={["7rem", "7rem", ".1rem", ".1rem" ]} >
                        <Icon as ={ TiSocialFacebook } fontSize="1.2rem" _hover={{color:"#D87D4A", cursor:"pointer"}}/>
                        <Icon as ={ TiSocialTwitter }  fontSize="1.2rem" mx="1rem" _hover={{color:"#D87D4A", cursor:"pointer"}}/>
                        <Icon as ={ TiSocialInstagram } fontSize="1.2rem" _hover={{color:"#D87D4A", cursor:"pointer"}}/>
                    </Box>
                </Box>
            </Box>
        </Box>
     );
}
 
export default Footer;