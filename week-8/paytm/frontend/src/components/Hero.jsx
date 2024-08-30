import React from 'react'
import {
    Heading,
    Stack,
    Text
} from '@chakra-ui/react'

const Hero = () => {
  return (
    <Stack spacing={4} p={"5"}>
        <Heading>Hi, Farhan</Heading>
        <Text>Balance: 
        ₹99999999909.55
        </Text>
    </Stack>
  )
}

export default Hero
