import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router";
const Buttons = ({  text, color, tColor, stateName }) => {     
    const History = useHistory()

    return ( 
        // customizzed button hook 
        <Button bgColor = { color } mt="3rem" borderRadius="0" 
        textAlign = "center" textTransform="uppercase" letterSpacing="3px"
        w ="220px" color = "#fff"
         fontSize="16px" h="4.1rem" _hover={{cursor:'pointer', opacity:'0.7'}}
         onClick={()=> {History.push({pathname:'/products', state: stateName })}}
         >
             { text }
       </Button>
     );
}

export default Buttons;