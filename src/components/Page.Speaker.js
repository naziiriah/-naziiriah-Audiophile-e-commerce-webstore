import { Box } from "@chakra-ui/layout";
import HeadSection from "./mini-components/Pages.header";
import Aside from "../components/Aside"
import Footer from "../components/Footer"
import ProductSection from "../components/mini-components/products"
import Introduction from "./introduction";


const Speakers = () => {

    const DeviceOne = "ZX9 Speaker"
    const Devicetwo = "ZX7 Speaker"

    return ( 
<Box> 
                    <HeadSection text ="speakers"/>
                    <Box as="article" width="100%">
                       <Introduction DeviceName = {DeviceOne} order={false}/>
                       <Introduction DeviceName = {Devicetwo} order={true}/>
                    <ProductSection/>
                    </Box>
                    <Aside/>
                    <Footer/>
                </Box>
     );
}
 
export default Speakers;