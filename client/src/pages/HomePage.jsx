import React from 'react'
import Navbar from '../component/Navbar'
import { Heading } from '@chakra-ui/react'

function HomePage() {
  return (
    <div>
        <Navbar/>
        <Heading marginTop={"20vh"}>Welcome to the Plan My Trip</Heading>
    </div>
  )
}

export default HomePage