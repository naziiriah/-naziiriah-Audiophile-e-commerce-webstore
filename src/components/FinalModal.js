import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    useDisclosure, 
    ModalBody,
    Button,
    Box,
    Icon,
    Text
  } from "@chakra-ui/react"
import { IoMdCheckmark } from "react-icons/io"
import { useContext } from "react";
import { GearContext } from "../context/Context";
import ParcelUpgrade from "./mini-components/checkpointContainer";
import { useHistory } from "react-router-dom";


const CheckoutButton = ({ value }) =>  {

    const [Items, purchased, Total] = useContext(GearContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const History = useHistory()
  
    return (
      <>
        <Button onClick={onOpen} width="100%" height="3rem" textTransform="uppercase" bgColor="#D87D4A" color="#fff">continue & pay</Button>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} width="50rem" >
          <ModalOverlay />
          <ModalContent >
          
            <ModalBody  >
                <Box width="5rem" height="5rem" bgColor="#D87D4A" borderRadius="50%" my="2rem">
                    <Icon as={ IoMdCheckmark } mt="1rem" mx="1rem" fontSize="3rem" color="white"></Icon>
                </Box>
                <Box>
                    <Text as="h1" textTransform="uppercase" letterSpacing="1px" fontSize="37px" fontWeight ="600" >Thank you</Text>
                    <Text as="h1" textTransform="uppercase" letterSpacing="1px" fontSize="37px" fontWeight ="600" >for your order </Text>
                </Box>
                <Box width="100%" display="flex" height="30rem" mt="2rem" flexDir={["column", "column", "column", "column"]}>
                    <Box width={["100%", "100%", "100%", "100%"]} height="30rem" color="#000" bgColor="#f3f3f3">
                        <Box width="80%" margin="auto" height="70%" fontSize="23px" marginTop="4rem" marginBottom="-4rem">
                            <ParcelUpgrade value={purchased[0].value} id={purchased[0].id}/>
                        </Box>
                        { purchased.length > 1 && <Box width="80%" margin="auto" borderTopColor="#000" borderTopWidth="3px" borderTopStyle="solid" height="40%">
                                    <Text as="h3" fontWeight="500" fontStyle="43px" textAlign="center">
                                        and {purchased.length - 1 } other item(s)
                                    </Text>
                        </Box>}
                    </Box>
                    <Box width={["100%", "100%", "100%", "100%"]} height="30rem" bgColor="#000">
                        <Text as="h2" fontSize="27px" fontWeight="600" textTransform="uppercase" color="#fff" my="2rem" mx="3rem"> grand total</Text>
                        <Text as="h2" fontSize="27px" fontWeight="600" textTransform="uppercase" color="#fff" mx="3rem"> ${value}</Text>
                
                    </Box>
                </Box>
            </ModalBody>
  
            <ModalFooter>
           
              <Button width="100%" height="3rem" textTransform="uppercase" bgColor="#D87D4A" color="#fff"
              onClick={() => History.push("/") }>Back to home</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default CheckoutButton;