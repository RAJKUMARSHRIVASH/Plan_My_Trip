
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Select } from '@chakra-ui/react'
// import { useEffect } from 'react';

export default function FormComponent() {

  const baseURL = "https://planmytrip-q0gy.onrender.com"
  // const baseURL = "http://localhost:8000"


  // const [name,setName] = useState("");
  // const [destination,setDestination] = useState("");
  // const [email,setEmail] = useState("");
  // const [no_of_travellers,setNo] = useState("");
  // const [budget_per_person,setBudget] = useState("");

  async function postData() {
    const name = document.getElementById("firstName").value;
    const destination = document.getElementById("destination").value;
    const email = document.getElementById("email").value;
    const no_of_travellers = document.getElementById("no_of_traveler").value;
    const budget_per_person = document.getElementById("budget_per_person").value;

    const payload = {
      name,
      destination,
      email,
      no_of_travellers,
      budget_per_person
    }
    // console.log(payload)

    const fetctedData = await fetch(`${baseURL}/maketrip`, {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    const data = await fetctedData.json();
    console.log(data)
    if(data){
      alert(data)
    }

  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Post Your Trip
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" >
                  <FormLabel>Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="destination">
                  <FormLabel>Destination</FormLabel>
                  <Select>
                    <option value=''>select </option>
                    <option value='India'>India</option>
                    <option value='Africa'>Africa</option>
                    <option value='Europe'>Europe</option>
                    <option value='America'>America</option>
                  </Select>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" >
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="no_of_traveler" >
              <FormLabel>No. of Travellers</FormLabel>
              <Input type='Number'></Input>
            </FormControl>
            <FormControl id="budget_per_person" >
              <FormLabel>Budget/Person</FormLabel>
              <Input type='Number'></Input>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={postData}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Post Trip
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}