import { Box } from "@chakra-ui/layout";
import HeadSection from "./mini-components/Pages.header";
import Aside from "../components/Aside"
import Footer from "../components/Footer"
import ProductSection from "../components/mini-components/products"
import Introduction from "./introduction";

const Earphones = () => {

    const DeviceOne = "YX1 Wireless Earphones"
        
    return ( 
        <Box> 
            <HeadSection text ="earphones"/>
            <Box as="article" width="100%">
            <Introduction DeviceName = {DeviceOne} order={false}/>
            <ProductSection/>
            </Box>
            <Aside/>
            <Footer/>
        </Box>
         );
}
 
export default Earphones;