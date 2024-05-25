import { Box, Container, Flex, IconButton, VStack, HStack, Text, Link } from "@chakra-ui/react";
import { FaHome, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex as="nav" bg="teal.500" color="white" padding="1rem" justifyContent="space-between" alignItems="center">
      <Text fontSize="xl" fontWeight="bold">
        Dashboard
      </Text>
      <HStack spacing={4}>
        <Link href="#">Home</Link>
        <Link href="#">Profile</Link>
      </HStack>
    </Flex>
  );
};

const Sidebar = () => {
  return (
    <VStack as="aside" bg="gray.100" width="200px" height="100vh" padding="1rem" spacing={4} alignItems="flex-start">
      <Link href="#" display="flex" alignItems="center">
        <IconButton aria-label="Home" icon={<FaHome />} variant="ghost" />
        <Text marginLeft="1rem">Home</Text>
      </Link>
      <Link href="#" display="flex" alignItems="center">
        <IconButton aria-label="Profile" icon={<FaUser />} variant="ghost" />
        <Text marginLeft="1rem">Profile</Text>
      </Link>
    </VStack>
  );
};

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Flex>
        <Sidebar />
        <Container maxW="container.xl" padding="1rem">
          <Text fontSize="2xl">Welcome to the Dashboard</Text>
          <Text>This is your blank canvas. Start building your dashboard here.</Text>
        </Container>
      </Flex>
    </Box>
  );
};

export default Index;
