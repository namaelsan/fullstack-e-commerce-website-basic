import React, { useEffect } from "react";
import {
  Container,
  SimpleGrid,
  Text,
  textDecoration,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <Container maxW="container.xl">
      <VStack spacing={8}>
        <Text
          bgGradient="linear(to-l, cyan.400, blue.500)"
          bgClip="text"
          fontSize={"30"}
          fontWeight="bold"
          textAlign={"center"}
        >
          Current Products 🚀
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text fontWeight="bold" color={"gray.500"}>
            No products found 😢{" "}
            <Link to={"/create"}>
              <Text
                as={"span"}
                color={"blue.500"}
                __hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
