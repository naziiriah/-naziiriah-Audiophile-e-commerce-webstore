import { Box,Icon } from "@chakra-ui/react"
import { useHistory, useLocation } from "react-router";
import { useContext, useState } from "react";
import { GearContext } from "../context/Context";
import Aside from "./Aside";
import Footer from "./Footer";
import ProductsHeader from "./mini-components/ProductTopHeader";
import ProductSection from "./mini-components/products";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import MiniProductSection from "./mini-components/pages.mini.product";
import { IoMdAdd} from "react-icons/io"
import { FaMinus } from "react-icons/fa";


 

const Products = () => {

  const [Items, purchased, Total] = useContext(GearContext)
  const [value, setValue] = useState(1)
  const Location = useLocation()
  const History = useHistory()

    return ( <>
      { 
        Items
            .filter(gears => gears.name === Location.state)
            .map(earphon => (
               <Box key ={earphon.id}>
{/* topheader section */}
                 <ProductsHeader/>
{/* Goback button */}
                <Box as="article" width="100%">
{/* acts as article holdig=ng the following sections */}
                <Box as="Button" fontSize="23px" fontWeight="600"
                marginTop="6rem" marginLeft={["0%", "10%", "10%", "10%"]}
                 textTransform ="capitalize" height="3rem" width="7rem" 
                onClick={History.goBack}
                _hover={{cursor:"pointer", color:"#D87D4A"}} >
                   go back</Box>
{/* section area for displaying  */}
                 <Box as="section" 
                  width={["100%", "80%", "80%", "80%"]}
                  display="flex" 
                  flexDirection={["column", "column", "row", "row"]}
                  margin = "auto" 
                  marginTop="2rem"
                  marginBottom="2rem"
                  justifyContent="space-between"
                  height={["70rem","70rem","40rem","36rem"]}>
                  <Image src= {earphon.image.desktop}  height="36rem" width={["100%", "100%", "48%", "48%"]} alt={earphon.name}/>
{/* image top headef section */}
                  <Box marginLeft="0rem" width={["100%", "100%", "48%", "48%"]} >
                      { earphon.new && <Box as="h3"color="#D87D4A" fontSize="20px" marginTop="3rem" textTransform="uppercase" letterSpacing="8px" width={["20rem"]}> new product</Box>}
                      <Box as ="h1" fontSize="36px" fontWeight="600" my=".5rem" textTransform="uppercase" letterSpacing="4px" >{earphon.name}</Box>
                      <Box as ="p" fontSize="20px" >{earphon.description}</Box>
                      <Box as="h3" my="1rem" fontWeight="700" fontSize={["23px", "33px", "33px", "33px"]} >${earphon.price}</Box>
                      <Box display="flex" flexDirection={["row", "row", "row", "row"]} width="100%"  height="10rem"justifyContent="space-between">
{/* display for add cart button area */}
                      <Box display="flex"  height="4rem" width={["50%","50%","50%","50%"]}  marginTop="3rem" marginRight="1rem" bgColor="#f3f3f3"  alignItems="center">
                        <Box width="32%"  height="4.1rem" onClick={() => setValue(value-1)}>
                          <Icon as ={FaMinus}  margin="auto"my="1.5rem"  mx="2rem"/>
                        </Box>
                        <Box width="32%" height="4.1rem" alignItems="center" >
                          <Box my="1.5rem"  mx="2rem">{value}</Box>
                        </Box>
                        <Box width="32%" height="4.1rem" alignItems="center" onClick={() => setValue(value+1)} >
                          <Icon my="1.5rem"  mx="2rem" as={IoMdAdd}/>
                        </Box>
                      </Box>
                      <Button bgColor = "#D87D4A" mt="3rem" borderRadius="0" 
                        textAlign = "center" textTransform="uppercase" letterSpacing="3px"
                        width ="13rem" color = "#fff"
                        fontSize="16px" height="4rem" _hover={{cursor:'pointer', opacity:'0.7'}}
                        onClick={() => (purchased.push({id :earphon.id, value:value}),
                                         Total.push(earphon.price * value) )}
                        
                        >add to cart</Button>
                      </Box>

                  </Box>
                  </Box>
{/* Features description */}
                <Box as="section"  height={["67rem", "67rem", "40rem","40rem"]}  display="flex" flexDirection={["column", "column", "column", "row"]} justifyContent="space-between" width ="80%" margin=" auto" my="3rem">
                  <Box  width={["100%","100%","100%","47%"]} >
                    <Box as="h2" fontSize={["23px", "33px", "33px", "33px"]}  fontWeight="600" textTransform="uppercase">Features</Box>
                    <Box as ="p" lineHeight="33px" fontSize="20px" marginTop="1.4rem" marginBottom="1rem" > {earphon.features}</Box>
                  </Box>
                  <Box width={["100%","100%","100%","47%"]} display={["flex"]} flexDirection={["row", "row", "row", "column"]}>
                    <Box as="h2" fontSize={["23px", "33px", "33px", "33px"]} height="" width={["50%", "50%", "50%", "100%"]}  fontWeight="600" textTransform="uppercase">in the box</Box>
                    <Box marginTop={["0rem", "0rem","0rem", "1.4rem"]} width={["50%", "50%", "50%", "100%"]}> 
{/* display [pieces of equipment] */}
                      {earphon.includes.map(includes=> (
                        <Box display="flex" marginTop=".8rem" >
                          <Box as="h3" marginRight="1.5rem" lineHeight="33px" fontSize="20px" marginTop=".4rem" color="#D87D4A">{ includes.quantity }x</Box>
                          <Box as="p" lineHeight="33px" fontSize="20px"  marginTop=".4rem">{ includes.item }</Box>
                        </Box>
                      ))}
                      </Box>
                  </Box>
                </Box>
                      {/* gallery pictures */} 
                <Box width="80%" margin="auto" as="section" marginTop="9rem" display="flex" flexDirection={["column", "row", "row", "row"]} justifyContent="space-between" >
                        <Box width={["100%","48%","48%","48%"]}  marginBottom="3rem" height="40rem" >
                          <Box width="100%" height ="19rem">
                          <Image src ={earphon.gallery.first.desktop} width="100%" height="100%"/>
                          </Box>
                          <Box width="100%" marginTop="2rem" height ="19rem">
                          <Image src ={earphon.gallery.second.desktop} width="100%" height="100%"/>
                          </Box>
                        </Box>
                          <Box width={["100%","48%","48%","48%"]}  height="40rem">
                            <Image src ={earphon.gallery.third.desktop} width="100%" height="100%"/>
                          </Box>
                </Box>

                {/* other related products */}
                <Box  as="h1" marginTop="10rem" marginBottom="5rem" textAlign="center" fontSize="33px" fontWeight="650" textTransform="uppercase" letterSpacing="3px">
                  you may also like
                </Box>
{/* displaying various products related to the original products*/}
              <Box as ="section" display=" flex" justifyContent="space-between" width={["100%","100%","80%","80%"]} flexDirection={["column", "column", "row", "row"]} margin="auto" marginBottom="10rem">
                      {earphon.others.map( others => (
                        <MiniProductSection image = {others.image.desktop} name={others.name} />
                      ))}
              </Box>
{/* end of page  */}
               <ProductSection/>
                </Box>
                <Aside/>
                <Footer/>
            </Box>
            ))
            }
            </>
      );
}
 
export default Products;