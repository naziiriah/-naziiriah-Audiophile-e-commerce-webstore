import { Box} from "@chakra-ui/react"

import { Image } from "@chakra-ui/image";
import { useContext } from "react";
import { GearContext } from "../../context/Context";


const ParcelUpgrade = ({ value, id }) => {
  const [Items, purchased, Total, SetTotal] = useContext(GearContext)
    return ( 
        <Box>
            {
                Items.filter(items => items.id === id)
                  .map(item =>   (
                      <>
                        <Box key={item.id} display="flex" justifyContent="space-between" marginBottom="1rem" width="100%">
                        <Box display="flex">
                        <Image height="4rem" width="4rem" src={item.image.mobile} alt={item.name}/>                            
                        <Box marginLeft="1rem">
                            <Box fontSize="15px">{item.name}</Box>
                            <Box>${item.price}</Box>
                        </Box>
                        </Box>
                        
                        
                        <Box width="2rem" height="2rem" paddingTop=".3rem" paddingLeft=".7rem" bgColor="#f3f3f3"  fontWeight="700">
                          {value}
                        </Box>
                          
                      
                        </Box>
                        </>
                  ) )
        } 
        </Box> 
        );
}
 
export default ParcelUpgrade;