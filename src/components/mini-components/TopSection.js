import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout"
import Buttons from "./Button";

const TopSection = (props) => {
    
    return (
        <Box as="section" width={["100%","90%","80%","80%"]} display="flex" flexDirection={["column", "column", "column", "row"]}  margin = "auto" marginTop="6rem" justifyContent="space-between" height={["70rem", "70rem","70rem", "30rem"]}>
            <Image src={props.src} alt={props.alt} order= {["0","0","0",`${props.order && 2}`]}/>
            <Box marginLeft="0rem" width = {["100%","100%","100%",'40%']} textAlign={["center", "center", "center", "start"]} height={["50rem", "50rem","50rem", "30rem"]}
             text >
                { props.new && <Box as="h3"color="#D87D4A" fontSize="20px" marginTop="3rem" textTransform="uppercase" letterSpacing="8px"> new product</Box>}
                <Box as ="h1" fontSize="36px" fontWeight="600" my=".5rem" textTransform="uppercase" letterSpacing="4px" >{props.name}</Box>
                <Box as ="p" fontSize="20px" >{props.description}</Box>
                <Box margin={["auto", "auto", "auto", "0"]} width="15rem"><Buttons color="#D87D4A" tColor="#fff" text="see products"  stateName={props.name}/>   </Box>    
            </Box>
        </Box>
     );
}
 
export default TopSection;