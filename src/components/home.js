import TopHeadSection from "../components/HomepageSection/TopHeadSection"
import { Box } from "@chakra-ui/layout";
import ProductSection from "../components/mini-components/products"
import SectionSpeaker from "./HomepageSection/speaker";
import SectionSpeaker2 from "./HomepageSection/speaker2";
import SectionSpeaker3 from "./HomepageSection/speaker3";
import Aside from "../components/Aside"
import Footer from "./Footer";

const Home = () => {
    
    return (
      <>
        <TopHeadSection />
        <Box as="article">
          <ProductSection/>
          <SectionSpeaker/>
          <SectionSpeaker2/>
          <SectionSpeaker3/>
        </Box> 
        <Aside/>
        <Footer/>
      </>
      );
}
 
export default Home;