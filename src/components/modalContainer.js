import { Box} from "@chakra-ui/react"
import { useContext } from "react";
import { GearContext } from "../context/Context";
import { Image } from "@chakra-ui/image";

const Parcel = ({ value, id }) => {
  const [Items, purchased, Total] = useContext(GearContext)
    

    return ( 
    <Box>
        {
            Items.filter(item => item.id === id)
                  .map(item =>   (
                      <>
                        <Box display="flex" justifyContent="space-between" marginBottom="1rem">
                        <Box display="flex">
                        <Image  height="4rem" width="4rem" src={item.image.mobile} alt={item.name}/>                            
                        <Box marginLeft="1rem">
                            <Box>{item.name}</Box>
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
 
export default Parcel;
