import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/maketrip">
        <Button>Post Data</Button>
      </Link>
      <Link to={"/gettrip"} >
        <Button>Retrieve Data</Button>
      </Link>
    </div>
  )
}

export default Navbar