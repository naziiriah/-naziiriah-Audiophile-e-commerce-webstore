import { Box } from "@chakra-ui/layout";
import HeadSection from "./mini-components/Pages.header";
import Aside from "../components/Aside"
import Footer from "../components/Footer"
import ProductSection from "../components/mini-components/products"
import Introduction from "./introduction";


const Headphones = () => {

    const DeviceOne = "XX99 Mark II Headphones"
    const Devicetwo = "XX99 Mark I Headphones"
    const Devicethree = "XX59 Headphones"
    return ( 
                <Box> 
                    <HeadSection text ="headphones"/>
                    <Box as="article" width="100%">
                       <Introduction DeviceName = {DeviceOne} order={false}/>
                       <Introduction DeviceName = {Devicetwo} order={true}/>
                       <Introduction DeviceName = {Devicethree} order={false}/>
                    <ProductSection/>
                    </Box>
                    <Aside/>
                    <Footer/>
                </Box>
    );
}
 
export default Headphones;