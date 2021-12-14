import { Box } from "@chakra-ui/layout";
import TopSection from "./mini-components/TopSection";
import { GearContext } from "../context/Context";
import { useContext } from "react";





const Introduction = (props) => {
// displaying introductory content on package
    const [Items, purchased, Total] = useContext(GearContext)
    return ( <>
    {
         Items
         .filter(gears => gears.name === props.DeviceName)
         .map(earphon => (
             <Box key ={earphon.id}>
                 <Box as="article" width="100%">
                     <TopSection src={earphon.image.desktop} alt="yx1-model earphones" 
                     new ={earphon.new} name={earphon.name} description = {earphon.description} order={props.order}/>
                 </Box>
             </Box>
      ))
      
    }
    </> );
}
 
export default Introduction;