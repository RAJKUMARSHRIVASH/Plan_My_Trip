import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    FormControl,
    FormLabel,
    Select,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

export default function Retrieve() {
    const [arr, setArr] = useState([]);
    // const [filter, setFilter] = useState("");
    const baseURL = "https://planmytrip-q0gy.onrender.com"

    useEffect(() => {

        getData();
    }, [])
    async function getData() {
        const fetctedData = await fetch(`${baseURL}/api/trip/gettrip`)
        const data = await fetctedData.json();
        setArr(data)
    }
    async function filterData() {

        const dest = document.getElementById("destination").value || "";
        const fetctedData = await fetch(`${baseURL}/api/trip/gettrip/${dest}`)
        const data = await fetctedData.json();
        setArr(data)

    }

    return (
        <div>
            <FormControl id="destination" width={"20%"}>
                <FormLabel>Filter By destination</FormLabel>
                <Select onChange={filterData}>
                    <option value=''>select </option>
                    <option value='India'>India</option>
                    <option value='Africa'>Africa</option>
                    <option value='Europe'>Europe</option>
                    <option value='America'>America</option>
                </Select>
            </FormControl>

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
                            onClick={(async()=>{
                                const data = await fetch(`${baseURL}/api/trip/${el._id}`,{
                                    method:"DELETE",
                                    headers:{
                                        "Content-Type":"application/json"
                                    }
                                });
                                const res = await data.json();
                                console.log(res)
                                alert(res)
                                getData()

                            })}
                                mt={10}
                                w={'full'}
                                bg={'green.400'}
                                color={'white'}
                                rounded={'xl'}
                                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                                _hover={{
                                    bg: 'red.500',
                                }}
                                _focus={{
                                    bg: 'green.500',
                                }}>
                                Delete Your trip
                            </Button>
                        </Box>
                    </Box>)

                })}
            </Center>
        </div>
    );
}