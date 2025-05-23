import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useProductStore } from "../store/product";

const ProductCard = ({ product }) => {
  const [updatedProduct ,setUpdatedProduct ] = useState(product);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const { deleteProduct, updateProduct } = useProductStore();
  const toast = useToast();
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
      });
    }
  };
  const handleUpdateProduct = async (pid,updatedProduct) => {
    const {success, message} = await updateProduct(pid,updatedProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: "The item was updated",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }

    onClose();
  }

  return (
    <Box
      bg={bg}
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w={"full"}
        objectFit={"cover"}
      />
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight={"bold"} fontSize={"xl"} color={textColor} mb={4}>
          ${product.price}
        </Text>
        <HStack spacing={2}>
          <IconButton icon={<FaEdit />} colorScheme="blue" onClick={onOpen} />
          <IconButton
            icon={<MdDeleteForever />}
            colorScheme="red"
            onClick={() => {
              handleDeleteProduct(product._id);
            }}
          />
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalBody>
            <VStack spacing={4}>
              <Input placeholder="Product Name" name="name" 
              defaultValue={updatedProduct.name}
              onChange={ (e) => {setUpdatedProduct({...updatedProduct, name:e.target.value})} }
              />
              <Input placeholder="Price" name="price" type="number" 
              defaultValue={updatedProduct.price}
              onChange={ (e) => {setUpdatedProduct({...updatedProduct, price:e.target.value})} }
              />
              <Input placeholder="Image URL" name="image" 
              defaultValue={updatedProduct.image}
              onChange={ (e) => {setUpdatedProduct({...updatedProduct, image:e.target.value})} }
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} 
            onClick={() => handleUpdateProduct(product._id,updatedProduct)}
            >
              Update
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;
