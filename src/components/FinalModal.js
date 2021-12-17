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


const CheckoutButton = ({ value }) =>  {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen} width="100%" height="3rem" textTransform="uppercase" bgColor="#D87D4A" color="#fff">continue & pay</Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
          
            <ModalBody>
                <Box width="5rem" height="5rem" bgColor="#D87D4A" borderRadius="50%">
                    <Icon as={ IoMdCheckmark } mt="1rem" mx="1rem" fontSize="3rem" color="white"></Icon>
                </Box>
                <Box>
                    <Text as="h1" textTransform="uppercase" letterSpacing="1px" fontSize="37px" fontWeight ="600" >Thank you</Text>
                    <Text as="h1" textTransform="uppercase" letterSpacing="1px" fontSize="37px" fontWeight ="600" >for your order </Text>
                </Box>
                <Box width="100%" display="flex" height="30rem" mt="2rem" flexDir={["column", "column", "row", "row"]}>
                    <Box width={["100%", "100%", "60%", "60%"]} height="30rem" bgColor="#f3f3f3"></Box>
                    <Box width={["100%", "100%", "40%", "40%"]} height="30rem" bgColor="#000">
                        <Text as="h2" fontSize="27px" fontWeight="600" textTransform="uppercase" color="#fff"> grand total</Text>
                        <Text as="h2" fontSize="27px" fontWeight="600" textTransform="uppercase" color="#fff"> ${value}</Text>
                
                    </Box>
                </Box>
            </ModalBody>
  
            <ModalFooter>
           
              <Button width="100%" height="3rem" textTransform="uppercase" bgColor="#D87D4A" color="#fff">Back to home</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default CheckoutButton;