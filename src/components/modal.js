import { useHistory } from "react-router"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure, 
  Button,
  Box,
  Icon,
  Text
} from "@chakra-ui/react"
import { useContext } from "react"
import { GearContext } from "../context/Context"
import { FaCartPlus } from 'react-icons/fa'

import Parcel from "./modalContainer"

const BasicUsage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const History= useHistory()
    const [Items, purchased, Total] = useContext(GearContext)

    return (
      <>
        
      <Icon as={FaCartPlus} onClick={onOpen} _hover={{cursor:"pointer", color:"#D87D4A"}}/>
        <Modal isOpen={isOpen} onClose={onClose} size="sm">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader display="flex" justifyContent="space-between">
              <Box>
                cart({purchased.length})
              </Box>
              <Text _hover={{cursor:"pointer", color:"#D87D4A"}}
              
              onClick={() => {
                Total.splice(0, Total.length)
                purchased.splice(0, purchased.length)
                onClose()
              }}
              >Remove all           </Text>

            </ModalHeader>
            
            { purchased.length === 0 ? <Box margin="auto" >Cart is empty</Box> : <Box margin="auto" width="90%">{
              purchased.map(item => <Parcel value ={item.value} id={ item.id} />)
            }</Box>}
            
            <Box display="flex" justifyContent="space-between" width="90%" margin="auto">
                <Box as="h1" textTransform="uppercase" fontSize="23px" fontWeight="600"> total</Box>
                {Total.length >= 1 && <Box as="h1"  fontSize="23px" fontWeight="600">${Total.reduce( (a, b) => a + b)}</Box>}
              </Box>
            <ModalFooter>
             {purchased.length === 0? " " :  <Button colorScheme="orange" textTransform="uppercase" fontWeight="Bold"
              width="95%" margin="auto" textAlign="center"  onClick={()=> ( History.push('/checkout')) }>
                checkout
              </Button>}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default BasicUsage