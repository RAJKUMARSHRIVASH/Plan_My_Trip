import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

export default function Retrieve() {
    const [arr,setArr] = useState([]);
    const baseURL = "https://planmytrip-q0gy.onrender.com"
    
    useEffect(()=>{

        getData();
    },[])
    async function getData() {
        const fetctedData = await fetch(`${baseURL}/api/trip/gettrip`)
        const data = await fetctedData.json();
        setArr(data)
    }

    return (
        <Center width={"80%"} py={6} padding={10} margin={"auto"} display={"grid"} gap={10} gridTemplateColumns={"repeat(4,1fr)"}>
            {arr.map((el, i) => {
                return (<Box key={i}
                    outline={"auto"}
                    maxW={'330px'}
                    w={'full'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Stack
                        textAlign={'center'}
                        p={6}
                        align={'center'}>
                        <Text
                            fontSize={'sm'}
                            fontWeight={500}
                            p={2}
                            px={3}
                            color={'green.500'}
                            rounded={'full'}>
                            Trip
                        </Text>
                        <Stack direction={'row'} align={'center'} justify={'center'}>
                            <Text fontSize={'6xl'} fontWeight={800}>
                                {el.destination}
                            </Text>
                        </Stack>
                    </Stack>

                    <Box px={6} py={10}>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Name: {el.name}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Email:{el.email}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Cost per Person : {el.budget_per_person}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} color="green.400" />
                                No. of Travelers = {el.no_of_travellers}
                            </ListItem>
                        </List>

                        <Button
                            mt={10}
                            w={'full'}
                            bg={'green.400'}
                            color={'white'}
                            rounded={'xl'}
                            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                            _hover={{
                                bg: 'green.500',
                            }}
                            _focus={{
                                bg: 'green.500',
                            }}>
                            Book Your trip
                        </Button>
                    </Box>
                </Box>)
                    
            })}
        </Center>
    );
}